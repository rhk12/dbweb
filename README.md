<<<<<<< HEAD
# Digital Brain Technologies

Digital Brain Technologies develops premier computational brain modeling software and provides services for neural analytics. Innovative sensor and neurotechnology companies use our API to dramatically improve concussion diagnostics, monitor the brain response over decade long time periods, track the initiation and progression of neurodegenerative disease, interpret EEG signals and provide an overall digital picture of your brain.

The source code of this project can be cloned from the GitHub repository <git@github.com:rhk12/dbweb.git>.

Installation instructions
	•	Be sure to have installed Node.js in your system:

	•	Download the code using git and install manually its dependencies:

	•	git clone git@github.com:rhk12/dbweb.git
	•	cd dbweb/
	•	npm install
	•	ng  start

To install the dependency packages , you need to run npm install in your project. To run the server of the ReactJS you have to run npm start , it will automatically open your application on your browser .



Documentation
https://reactjs.org/docs/getting-started.html

Source
git@github.com:rhk12/dbweb.git



Issue tracker

Licensing and distribution

Third-party libraries
	•	Jquery:
	•	jQuery is a fast, small, and feature-rich JavaScript library.

Third-party Services
=======
# dbweb app

## Steps to run the application
 - Duplicate the /config/AWSConfig.example.json to config/AWSConfig.json

- Update your AWS Access key ID , Secret Key & Region in
   /config/AWSConfig.json (this files is included in .gitignore so it will not be committed on future pushes to github).

  - To do this, In AWS Management Console, Search and open IAM service, Then Select Users from Left-hand Side Pane. Select your user-name listed in Table. Then click on Security Credentials Tab, there you can access & view your all AWS Access Key IDs. If the user does not have a user account, then create one.

 ------
 - Duplicate the config/cognito_configuration.example.js to config/cognito_configuration.js

 - Update your AWS Cognito Credentials including: userPoolId, region & ClientId in
   the file residing in /config/cognito_configuration.example.js.

   - You can find these in AWS Cognito service page. The userPooolID can be found under General settings, "Pool Id". The ClientID is under App integration, then App client settings, then there is a title for the App client, and under that there is "ID", this is the ID to use.

   - Set  apiVersion as "2016-04-19"

------
- Duplicate the AvatarTest.example.py to AvatarTest.py

- Add client_id and client_secret of "Client Access" in AvatarTest.py file. Note: client_id and client_secret from the the Avatar3d SDK website. There are IDs created for "Developer Access"  and "Client Access". This information is from the "Client Access" section.

------

- Duplicate the .env_example to .env

- Add AWS Access Key ID and AWS Secret Access Key ID to .env file.

  - To do this, In AWS Management Console, Search and open IAM service, Then Select Users from Left-hand Side Pane. Select your user-name listed in Table. Then click on Security Credentials Tab, there you can access & view your all AWS Access Key IDs. If the user does not have a user account, then create one.

------

- Duplicate oauth.example.json to oauth.json. Remove any ID from the "access_token" entry in oauth.json. Should just be "".
------

- Duplicate player.example.json to player.json. Remove any ID from the "code" entry in player.json. Should just be "".

## IMPORTANT: do not upload Access keys to web (e.g. github, google drive)
```sh

# Pre-Requisite dependencies

# If on linux : sudo is required with -g based npm commands (They are global dependencies being installed in System)

# To run npm commands concurrently
$ sudo npm install -g concurrently

# To create daemon process of node server for development purpose
$ sudo npm install -g nodemon

# To install Project's dependencies
# Then in project root's directory run the following commands :
$ npm run init

# To Run the Application locally:
$ npm start

# To Run the Application in Dev mode:
$ npm run start-dev
```
>>>>>>> 0579481921d54ac40b97ed457e29829dde678483
