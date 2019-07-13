# DBT

## Steps to run the application
 - Update the /config/configuration_keys.json with required variables
------

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

# To Build React Application:
$ cd client/
$ npm run build
# To host build generated
$ node server.js
```
# For Local testing :
 - Please add entries given below in /etc/hosts
```
127.0.0.1       digitalbraininjury.com
```
