
// ======================================
//         INITIALIZING DEPENDENCIES
// ======================================
const express = require('express');
	app = express(),
	bodyParser = require("body-parser"),
	AWS = require('aws-sdk'),
	cors = require('cors'),
	AmazonCognitoIdentity = require('amazon-cognito-identity-js'),
    utility = require('./utilities/utility'),
    VerifyToken = require('./verify_user'),
    cookieParser = require('cookie-parser'),
	archiver = require("archiver"),
	fs = require("fs"),
	path = require("path"),
	uploadFile = require("./upload.js"),
	global.fetch = require('node-fetch');

// ================================================
//            SERVER CONFIGURATION
// ================================================


global.navigator = () => null;
const BUCKET_NAME = "dbt-users-data"

// ======================================
//         	GLOBAL VARIABLES
// ======================================
const successMessage = "success";
const failureMessage = "failure";
const apiPrefix = "/api/"

// ======================================
//       CONFIGURING AWS SDK & EXPESS
// ======================================

// AWS Credentials loaded
AWS.config.loadFromPath('./config/AWSConfig.json');

// Cognito Configuration
var cognito = require("./config/cognito_configuration");

// Multer Configuration
let upload = require('./config/multer.config.js');

// Cognito Configuration
var cognito = require("./config/cognito_configuration.js");

// AWS S3 & Other Controllers Configuration
const awsWorker = require('./controllers/aws.controller.js');


var s3 = new AWS.S3();

// Cognito client who initializes the AWS Credentials to invoke
// commands on behalf of the developer
var COGNITO_CLIENT = new AWS.CognitoIdentityServiceProvider({
    apiVersion: cognito.apiVersion,
    region: cognito.region
});

// DynamoDB Object created to do SCAN , PUT , UPDATE operations
const docClient = new AWS.DynamoDB.DocumentClient({
	convertEmptyValues: true
});

// Express configured for POST Request handling of multiple types
// xxx-url encoded (form type)  & json type
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: ["http://localhost:2000", "http://localhost:3000"],
        credentials: true
       }
));
// ============================================
//     FUNCTIONS OR IMPLEMENTATIONS
// ============================================



let users = [];
let paginationToken = "";

// Function list all users
// user_attributes only takes required or user attributes defined
// in cognito not custom attributes
function listAllUsers(user_attributes, cb) {

    let params = {
        "AttributesToGet": user_attributes, // Pass an array to it
        "UserPoolId": cognito.userPoolId,
    };

    if (paginationToken) {
        params["PaginationToken"] = paginationToken
    }


    COGNITO_CLIENT.listUsers(params, function (err, data) {
        if (err) {
            cb(err, ""); // an error occurred
        } else {
            if (data.PaginationToken == undefined) {
                users.push(data.Users);
                paginationToken = "";
                cb("", utility.concatArrays(users)); // successful response
                users = [];
            } else {
                paginationToken = data.PaginationToken;
                users.push(data.Users);
                listAllUsers(user_attributes, cb);
            }
        }
    });
}


// Enable the user in cognito
function enableUser(user_name, cb) {
    var params = {

        UserPoolId: cognito.userPoolId,
        /* required */
        Username: user_name /* required */
    };
    COGNITO_CLIENT.adminEnableUser(params, function (err, data) {
        if (err) cb(err, "") // an error occurred
        else {
            cb("", data);
        } // successful response
    });
}

// Disable the users in cognito
function disableUser(user_name, cb) {
    var params = {
        UserPoolId: cognito.userPoolId,
        /* required */
        Username: user_name /* required */
    };
    COGNITO_CLIENT.adminDisableUser(params, function (err, data) {
        if (err) cb(err, "") // an error occurred
        else {
            cb("", data);
        } // successful response
    });

}

// Get List of groups of which user is member
// Like Admin,Associate etc
function getListGroupForUser(user_name, cb) {
    var params = {
        UserPoolId: cognito.userPoolId,
        /* required */
        Username: user_name,
        /* required */
    };
    COGNITO_CLIENT.adminListGroupsForUser(params, function (err, data) {
        if (err) {
            cb(err.code, "");
        } // an error occurred
        else {
            cb("", data.Groups);
        } // successful response
    });
}

function getFileSignedUrl(key, cb) {

    var params = {
        Bucket: BUCKET_NAME,
        Key: key
    };
    s3.getSignedUrl('getObject', params, function (err, url) {
        if (err) {
            cb(err, "");
        } else {
            cb("", url);
        }
    });
}


// Get user details & all his attributes
function getUser(user_name, cb) {

    var params = {
        UserPoolId: cognito.userPoolId,
        /* required */
        Username: user_name /* required */
    };
    COGNITO_CLIENT.adminGetUser(params, function (err, data) {
        if (err) {
            cb(err.code, "");
        } // an error occurred
        else {
            cb("", data);
        } // successful response
    });
}


function createUserDbEntry(event, callback) {
    var dbInsert = {};
    // adding key with name user_cognito_id
    // deleting the key from parameter from "user_name"
    event["user_cognito_id"] = event.user_name;
    delete event.user_name ;
        dbInsert = {
            TableName: "users",
            Item: event
        }


    docClient.put(dbInsert, function (dbErr, dbData) {
        if (dbErr) {
            callback(dbErr, null);
            console.log(dbErr);
        }
        else {
            console.log(dbData);
            callback(null, event);
        }
    });
}


function getUploadedFileList(user_name, cb) {
    const s3Params = {
        Bucket: BUCKET_NAME,
        Delimiter: '/',
        Prefix: user_name + '/profile/'
        // Key: req.query.key + ''
    };

    s3.listObjectsV2(s3Params, (err, data) => {
        if (err) {
            //   console.log(err);
            cb(err, "");
        }
        console.log(data);
        cb("", data.Contents);
    });

}

// Function to authenticate user credentials
function login(user_name, password, user_type,cb) {

    const poolData = {
        UserPoolId: cognito.userPoolId, // Your user pool id here
        ClientId: cognito.ClientId // Your client id here
    };

    var pool_region = cognito.region;
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: user_name,
        Password: password,
    });

    var userData = {
        Username: user_name,
        Pool: userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            // Data received on successfull authentication
            // console.log('access token + ' + result.getAccessToken().getJwtToken());
            // console.log('id token + ' + result.getIdToken().getJwtToken());
            // console.log('refresh token + ' + result.getRefreshToken().getToken());

            cb("", result);
        },
        onFailure: function (err) {
            // console.log(err);
            console.log(err);
            cb(err.code, "");
        }
    });
}

function loginFirstTime(user, cb) {
    const poolData = {
        UserPoolId: cognito.userPoolId, // Your user pool id here
        ClientId: cognito.ClientId // Your client id here
    };

    // var pool_region = 'ap-south-1';
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: user.user_name,
        Password: user.password,
    });

    var userData = {
        Username: user.user_name,
        Pool: userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            // console.log('access token + ' + result.getAccessToken().getJwtToken());
            // console.log('id token + ' + result.getIdToken().getJwtToken());
            // console.log('refresh token + ' + result.getRefreshToken().getToken());
            cb("", result);
        },
        onFailure: function (err) {

            cb(err.code, "");
        },
        newPasswordRequired: function (userAttributes, requiredAttributes) {

            // User was signed up by an admin and must provide new
            // password and required attributes, if any, to complete
            // authentication.

            // the api doesn't accept this field back
            delete userAttributes.email_verified;

            // Custom attributes can be also set if we want
            // userAttributes.custom_blood_group = "O+";

            // unsure about this field, but I don't send this back
            delete userAttributes.phone_number_verified;

            // Get these details and call
            cognitoUser.completeNewPasswordChallenge(user.new_password, userAttributes, this);
        }

    });
}


// Function to get Verification Status of the User
function getVerificationStatus(user_name, cb) {
    var db_table = {
        TableName: 'users',
        Key: {
            "user_name": user_name
        }
    };
    docClient.get(db_table, function (err, data) {
        if (err) {

            cb(err, "");

        } else {

            cb("", data);
        }
    });
}


function addUserDetailsToDb(user_details, cb) {
    var dbInsert = {
        TableName: "users",
        Item: user_details
    };
    docClient.put(dbInsert, function (err, data) {
        if (err) {

            cb(err, "");

        } else {

            cb("", data);
        }
    });
}



function getUserDbData(user_name, cb) {
    var db_table = {
        TableName: 'users',
        Key: {
            "user_cognito_id": user_name
        }
    };
    docClient.get(db_table, function (err, data) {
        if (err) {

            cb(err, "");

        } else {

            cb("", data);
        }
    });
}





// Function to create User by Admin
function adminCreateUser(User, cb) {
    var params = {
        UserPoolId: cognito.userPoolId, /* required */
        Username: User.user_name, /* required */
        DesiredDeliveryMediums: [
            "EMAIL",
        ],
        UserAttributes: [
            {
                Name: 'phone_number', /* required */
                Value: User.phone_number
            },
            {
                Name: 'name', /* required */
                Value: User.name
            },
            {
                Name: 'email', /* required */
                Value: User.email
            },
            {
                Name: 'phone_number_verified',
                Value: 'true'
            },
            {
                Name: 'email_verified',
                Value: 'true'
            }
        ]
    };
    COGNITO_CLIENT.adminCreateUser(params, function (err, data) {
        if (err) {
            cb(err, "");
        } // an error occurred
        else {
            cb("", data);
        }             // successful response
    });
}


function addUserToGroup(event, callback) {
    console.log("********\n", event, "\n**********");

    var params = {
        UserPoolId: cognito.userPoolId,
        /* required */
        Username: event.userName,
        GroupName: event.user_type
    }
    COGNITO_CLIENT.adminAddUserToGroup(params, function (error, data_admin_group) {
        if (error) {
            console.log("==================\n", error)
            callback(error, null);
        } // an error occurred
        else {
            callback(null, data_admin_group)
        }
    });
}



// Function to fetch all the items of the table 'numbers' from DynamoDB
const fetchNumbers = () => {
	return new Promise(function (resolve, reject) {
		var params = {
			TableName: 'numbers'
		};
		//   var items
		var items = [];
		docClient.scan(params).eachPage((err, data, done) => {
			if (err) {
				reject(err);
			}
			if (data == null) {
				resolve(utility.concatArrays(items));
			} else {
				items.push(data.Items);
			}
			done();
		});
	})
}

const putNumbers = (numbersData) => {
	return new Promise(function (resolve, reject) {
		let param = {
			TableName: "numbers",
			Item: numbersData
		};
		docClient.put(param,function(err,data){
			if(err){
				console.log("ERROR IN TABLE_UPDATE=======\n",err);
				reject(err)
			}
			else{
				resolve(data)
			}
		})
	})
	}

// ============================================
//     				ROUTES
// ============================================

app.post(`${apiPrefix}getNumbers`, (req, res) => {
	console.log("API CAlled");

	fetchNumbers().then((numbers) => {
		res.send({
			message: successMessage,
			data: numbers
		})
	}).catch((err) => {
		console.log("Error while fetching numbers", err)
		res.send({
			message: failureMessage,
			data: [],
			error: err
		})
	})
});

app.post(`${apiPrefix}putNumbers`, (req, res) => {
	console.log("API CAlled put",req.body);

	putNumbers(req.body).then((data) => {
		res.send({
			message: successMessage
		})
	}).catch((err) => {

		res.send({
			message: failureMessage,
			error: err
		})
	})
});
app.post(`${apiPrefix}signUp`,(req,res)=>{

	console.log(req.body);

    // First we add an attirbute of `name` as cognito requires it from first_name and last_name
    req.body["name"] = req.body.first_name + req.body.last_name ;
    req.body["email"] = req.body.user_name ;
    adminCreateUser(req.body, function (err, data) {
        if (err) {
            console.log("COGNITO CREATE USER ERROR =========\n", err);

            res.send({
                message: "failure",
                error: err.code
            });
        }
        else {
            console.log(data);
            var UserData = data.User;
            //Now check type of User and give permission accordingly
            // res.send(data);
            // user_type
            // userName
            var tempData = {};
            tempData["user_name"] = UserData.Username;
			tempData["userName"] = UserData.Username;

            tempData["user_type"] = req.body.user_type;
            tempData["phone_number"] = req.body.phone_number;

            if (req.body.user_type == "Admin") {

                // Admin User
                var mergedObject = { ...req.body, ...tempData };
                delete mergedObject.userName;
                delete mergedObject.name ;
                createUserDbEntry(mergedObject, function (dberr, dbdata) {
                    if (err) {
                        console.log("DB ERRRRRR =============================== \n", err);

                        res.send({
                            message: "faiure",
                            error: dberr.code
                        });
                    }
                    else {
                        // Add user to corresponding group...
                        // event.user_type
                        // event.user_name
                        console.log(tempData);

                        addUserToGroup(tempData, function (groupAddErr, groupData) {
                            if (groupAddErr) {

                                res.send({
                                    message: "faiure",
                                    error: groupAddErr.code
                                })
                            }
                            else {
                                // On success
                                res.send({
                                    message: 'success'
                                });
                            }
                        });
                    }
                })
            }
            else {

                // Merging objects
                var mergedObject = { ...req.body, ...tempData };

                delete mergedObject.userName;
                delete mergedObject.name ;
                createUserDbEntry(mergedObject, function (dberr, dbdata) {
                    if (err) {
                        console.log("DB ERRRRRR =============================== \n", err);

                        res.send({
                            message: "faiure",
                            error: dberr.code
                        });
                    }
                    else {
                        // Add user to corresponding group...
                        // event.user_type
                        // event.user_name
                        console.log(tempData);

                        addUserToGroup(tempData, function (groupAddErr, groupData) {
                            if (groupAddErr) {

                                res.send({
                                    message: "faiure",
                                    error: groupAddErr.code
                                })
                            }
                            else {
                                res.send({
                                    message : "success"
                                })

                            }
                        });
                    }
                })
            }



        }
    })
});

app.post(`${apiPrefix}logIn`,(req,res)=>{
console.log("Log In API Called!");
        // Getting user data of that user
        getUser(req.body.user_name, function (err, data) {
            if (err) {
                console.log(err);

                res.send({
                    message: "failed",
                    error : err
                });
            } else {

                console.log(data);

                // Now getting the list of Groups of user
                getListGroupForUser(data.Username, function (error, groupData) {
                    if (error) {

                        res.send({
                            message: "failure",
                            error  : error
                        });
                    } else {
                        // Now checking is user is ADMIN or not

                            if (data.UserStatus == "FORCE_CHANGE_PASSWORD") {
                                // Sends the user to first login page
                                // respond with status of FORCE_CHANGE_PASSWORD
                                res.send({
                                    message : "success",
                                    status : "FORCE_CHANGE_PASSWORD"
                                })
                            } else {

                    // Now checking is user is ADMIN or not
                    var userType = "StandardUser";
                    groupData.forEach(element => {
                        if (element.GroupName == "Admin") {
                            userType = "Admin";
                        }
                    });
                    // Here call the login function then
                                login(req.body.user_name,req.body.password,userType,function(err,result){
                                    // TODO : REfactor code here
                                    if(err){
                                        res.cookie("token", "");
                                        res.send({
                                            message : "failure",
                                            error : err
                                        })
                                    }
                                    else{


                                        res.cookie("token", result.getIdToken().getJwtToken());

                                        res.send({
                                            message : "success",
                                            user_type : userType
                                        });
                                    }
                                })
                            }
                    }
                })
            }
        })
})

// Login first time with temporary password
app.post(`${apiPrefix}logInFirstTime`,(req,res)=>{
    loginFirstTime(req.body,function(err,result){
        if(err){
            res.send({
                message : "failure",
                error : err
            })
        }
        else{

            getUser(req.body.user_name, function (err, data) {
                if (err) {
                    console.log(err);

                    res.send({
                        message: "failed",
                        error : err
                    });
                } else {
                    getListGroupForUser(data.Username, function (err, groupData) {
                        if(err){
                            res.send({
                                message : "failure",
                                error : err
                            })
                        }
                        else{

                    // Now checking is user is ADMIN or not
                    var userType = "StandardUser";
                    groupData.forEach(element => {
                        if (element.GroupName == "Admin") {
                            userType = "Admin";
                        }
                    });
                    res.cookie("token", result.getIdToken().getJwtToken());
                            res.send({
                                message : "success",
                                user_type : userType
                            })

                        }
                    });

                }
            }
                );

        }
    })

})

app.post(`${apiPrefix}enableUser`,(req,res)=>{
    enableUser(req.body.user_name,function(err,data){
        if(err){
            res.send({
                message : "failure",
                error  : err
            })
        }
        else{
            res.send({
                message : "success"
            })
        }
    })
})

app.post(`${apiPrefix}disableUser`,(req,res)=>{
    disableUser(req.body.user_name,function(err,data){
        if(err){
            res.send({
                message : "failure",
                error  : err
            })
        }
        else{
            res.send({
                message : "success"
            })
        }
    })
})

app.post(`${apiPrefix}getUserDetails`,VerifyToken,(req,res)=>{
    getUserDbData(req.user_cognito_id,function(err,data){
        if(err){
            res.send({
                message : "failure",
                error  : err
            })
        }
        else{
            userData = data.Item;
                getUploadedFileList(req.user_cognito_id,function(err,list){
                    if(err){
                        console.log(err);

                    }
                    else{
                        // Fetches the latest profile pic
                        var latestProfilePic = list.reduce(function (oldest, profile_pic) {
                            return oldest.LastModified > profile_pic.LastModified ? oldest : profile_pic;
                          }, {});
                        console.log("OUPTUT ---->\n",latestProfilePic);
                        // Now get the signed URL link  from S3
            // if no S3 link is found then send empty data link
            // KEY : req.user_cognito_id + "/profile/" + req.user_cognito_id ;
            // No file is uploaded
            var key
            if(list.length!=0){
                key = latestProfilePic.Key ;
            }
            else{
                key = req.user_cognito_id + "/profile/" + req.user_cognito_id ;
            }

            getFileSignedUrl(key,function(err,url){
                if(err){
                    console.log(err);
                    userData["profile_picture_url"] = "";
                    res.send({
                        message : "success",
                        data : userData
                    })
                }
                else{
                    if(list.length == 0){
                        userData["profile_picture_url"] = "";
                    }
                    else{
                        userData["profile_picture_url"] = url;
                    }
                    res.send({
                        message : "success",
                        data : userData
                    })
                }

            })
                    }
                });


        }
    })
})

app.post(`${apiPrefix}getProfilePicLink`,VerifyToken,(req,res)=>{

    getUploadedFileList(req.body.user_cognito_id,function(err,list){
        if(err){
            console.log(err);
        res.send({
            message : 'failure',
            error : err
        })
        }
        else{
            console.log("OUPTUT ---->\n",list);
            // Now get the signed URL link  from S3
// if no S3 link is found then send empty data link
// KEY : req.user_cognito_id + "/profile/" + req.user_cognito_id ;
// No file is uploaded

var latestProfilePic = list.reduce(function (oldest, profile_pic) {
    return oldest.LastModified > profile_pic.LastModified ? oldest : profile_pic;
  }, {});

var key
if(list.length!=0){
    key = latestProfilePic.Key ;
}
else{
    key = req.user_cognito_id + "/profile/" + req.user_cognito_id ;
}

getFileSignedUrl(key,function(err,url){
    if(err){
        console.log(err);

        res.send({
            message : "success",
            profile_picture_url : ""
        })

    }
    else{
        var link = "";
        if(list.length == 0){
            link = "";
        }
        else{
            link = url;
        }
        res.send({
            message : "success",
            profile_picture_url : link
        })
    }

})
        }
    });



})


app.post(`${apiPrefix}listUsers`,(req,res)=>{
    var attributes = ["name", "phone_number","email"];
    listAllUsers(attributes,function(err,data){
            if(err){
                res.send({
                    message : "failure",
                    error : err
                })
            }
            else{
                let users = utility.concatArrays(data);

                let count = 0;
    var tempArray = [];
                for (let i = 0; i < users.length; i++) {

                    setTimeout(() => {
                        getUser(users[i].Username, function (err, userData) {
                            if (err) {
                                console.log(err);

                                res.send({
                                    message: "failed",
                                    error : err
                                });
                            } else {
                                getUserDbData(users[i].Username, function(err,userDbData){

                                    getListGroupForUser(users[i].Username, function (err, groupData) {

                                        if (err) {
                                            console.log("List group for user ", err);
                                        }

                                        count++;

                                        // Now checking is user is ADMIN or not
                                        var flag = false;
                                        groupData.forEach(element => {
                                            if (element.GroupName == "Admin") {
                                        flag = true;
                                        }
                                        });
                                        // var temp = {};
                                        userDbData = userDbData.Item;
                                        userDbData["Enabled"] = userData.Enabled;

                                        if(flag){
                                            userDbData.user_type = "Admin"
                                        }
                                        else{
                                            userDbData.user_type = "Standard"
                                        }
                                        tempArray.push(userDbData);
                                        if (count == users.length) {
                                            // console.log(data);

                                            res.send(
                                                {
                                                    message : "success",
                                                    data : tempArray
                                                });
                                        }

                                    });

                                })


                            }
                        });

                    }, 20*i);

                }
            }
    })
})

// API To upload profile pic to S3
app.post(`${apiPrefix}uploadProfilePic`,VerifyToken, upload.single("profile_pic"), awsWorker.doUpload);

app.post(`${apiPrefix}verifyUser`,VerifyToken,(req,res)=>{
    // Fetch user group data and check if he is Admin or not
    getListGroupForUser(req.user_cognito_id, function (err, groupData) {
        if (err) {

            res.send({
                message: "failure",
                error  : error
            });
        } else {
        // Now checking is user is ADMIN or not
        var flag = false;
        groupData.forEach(element => {
            if (element.GroupName == "Admin") {
                flag = true;
            }
        });
        res.send({
            message : "success",
            isAdmin : flag
        })
        }});
})

// Create Avatar 3D
app.post(`${apiPrefix}createAvatar`, (req, res) => {
	console.log("API CAlled createAvatar",req.body);

	const spawn = require("child_process").spawn;
	const pythonProcess = spawn("python", [
		"./AvatarTest.py",
		req.body.image
	]);

	pythonProcess.stdout.on("data", async data => {
		console.log(data.toString());
		try {
			//archive zip
			var output = fs.createWriteStream(data.toString() + ".zip");
			var archive = archiver("zip");

			output.on("close", async function() {
				console.log(archive.pointer() + " total bytes");
				console.log(
					"archiver has been finalized and the output file descriptor has closed."
				);
				console.log("zip file uploading");
				let filePath = path.join(
				__dirname,
				"./" + data.toString() + ".zip"
				);
				let zipBuffer = fs.readFileSync(filePath);
				returnedData = await uploadFile("zip", zipBuffer, data.toString(), {
					ext: "zip",
					mime: "application/zip"
				});

				let rData = {};
				rData.plyPath = returnedData.Location;
				return res.status(200).send(rData);
			});
			archive.on("error", function(err) {
				console.log(err);
				res.status(400).send(err);
				throw err;
			});
			archive.pipe(output);
			let file = fs.createReadStream(
				path.join(__dirname, "/./" + data.toString() + "/model.ply")
			);
			archive.append(file, { name: "model.ply" });
			file = fs.createReadStream(
				path.join(__dirname, "/./" + data.toString() + "/model.jpg")
			);
			archive.append(file, { name: "model.jpg" });
			archive.finalize();

		} catch (error) {
			console.log(error);
			return res.status(400).send(error);
		}
	});

	pythonProcess.stderr.on("data", async data => {
		console.log(`error:${data}`);
	});
	pythonProcess.on("close", async data => {
		console.log(`child process close with ${data}`);
	});
});

// Clearing the cookies
app.post(`${apiPrefix}logOut`,(req,res)=>{
    res.cookie("token","");
    res.send({
        message : "success"
    });
})

// Configuring port for APP
const port = 3001;
const server = app.listen(port, function () {
	console.log('Magic happens on ' + port);
});
