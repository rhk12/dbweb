# DB Web Application

## Steps to run the application
 - Update your AWS Access key ID , Secret Key & Region in
   the file residing in /config/AWSConfig.example.json

 - Rename the AWSConfig.example.json to AWSConfig.json

 - Update your AWS Cognito Credentials like : userPoolId, region & ClientId in
   the file residing in /config/cognito_configuration.example.json.
   - Set  apiVersion as "2016-04-19"

 - Rename the cognito_configuration.example.json to cognito_configuration.json

 - IMPORTANT: do not upload Access keys to web (e.g. github, google drive)
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
