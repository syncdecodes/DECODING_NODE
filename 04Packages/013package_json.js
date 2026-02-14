/*
Node Package Manager (npm) - global command, comes with node
npm --version (to check you npm version {check in terminal})

local dependency - use it only in this particular project {command - npm i <package_name}
global dependency - use it in any project {command - npm i -g <package_name}

package.json - manifest file (stores imp info about project/package)
*/


/*
All dependencies are stored inside the node_modules folder.
When we install a package/dependecies like lodash (npm i lodash), it is automatically added to node_modules and we can see it inside the dependencies object inside main package.json file
We can also store the dependecies under devDependencies in the package.json file - command - npm i/install <package_name> -D/--save-dev
If the package we install has its own dependencies, those are also installed automatically inside node_modules (eg - bootstrap).
*/



/* 
INSTALL AND UNISTALL A PACKAGE 

INSTALL package.json
=> npm init (step by step, press enter to skip)
=> npm init -y (everything default)

INSTALL packages
=> npm i <package_name> 
=> npm install <package_name>
=> npm install <package_name><@version_number> 
=> sudo npm install <packageName> (mac)

UNINSTALL packages
npm uninstall <package_name>

UNISTALL PACKAGE USING NUCLEAR APPROACH -:
delete node_modules folder and package-lock.json file manually the remove the dependecies from package.josn file which you wanna delete
run `npm i` in terminal - a fresh node_modules folder and a package-lock.json file will be created
*/


/* 
IMPORTANCE of package.json

package.json is essential because it:

=> Lists all required packages under dependencies (and devDependencies)
=> Acts like a blueprint for the project
=> allows us to share a Node.js project without node_modules

node_modules is not uploaded because it’s very large and can be recreated anytime.

When someone clones our repo(Node.js ones) and runs:
npm install

npm reads package.json and automatically installs all needed packages into a fresh node_modules folder.
That’s why package methods and properties work again without pushing node_modules.
*/


/* Thus package.json allows us to share a Node.js project without node_modules while still letting anyone recreate the exact environment using npm install. */

// To clone a repo run command
// git clone <repo SSH or HTTPS link> enter {Downloads (copies) the entire repository from GitHub, Creates a new folder on your computer, The folder name is the same as the repo name}
// git clone <repo-link> new-folder-name {rename the folder while cloning}

/* copy a Node js project and run this */
// git clone <repo-link>      # download project
// cd my-project(repo_name)   # enter project folder
// npm install                # install all dependencies

// dependencies - Packages our app NEEDS to run. Used for production and development. Without them, our app will break
// devDependencies - Packages used only during development. Used for testing, formatting, building, linting

// Running npm install installs both dependencies and devDependencies.
// Only when we run npm install --production (or set NODE_ENV=production) are devDependencies skipped.


/*
To run a code in terminal without using playbutton -:
run commad - node <file_name>
if the file is inside a folder then run command - node <folder_name/file_name>
*/


/*
In package.json, the "scripts" section defines shortcut commands.

"scripts": {
  "start": "node file_name.js"
}

`npm start` in the terminal, executes the command
written next to "start"

So, `npm start` is just a shortcut for running your main file.

for some commands we can simply type - `npm start` like the above eg
but for some commands we have to type full - `npm run command_name`
*npm run start* will also work no problem
*/

// nodemon automatically restarts the app whenever a file changes,
// so you don’t have to stop and run the server again every time.
// "dev": "nodemon 02Modules/007app1.js" add this in scripts > package.json
