# software-and-tool
> List of my Softwares and Tools as well commands, How to install, update and upgrade them
> It is also Node.js webapp starter template 


- [software-and-tool](#software-and-tool)
  - [MacBook Air with M1](#macbook-air-with-m1)
    - [ZSH Terminal](#zsh-terminal)
    - [Homebrew](#homebrew)

# MacBook Air with M1 
* `/opt` -> the installation of add-on application software packages (Homebrew etc..)
* `/usr/local/bin/` -> for use by the system administrator when installing software locally (Node.js etc..)
* `Applications` -> All the applications installed by installer
* `cd ~` -> will give you home directory in ZSH
<img width="626" alt="image" src="https://user-images.githubusercontent.com/67994954/186946378-ff92d889-b891-4b18-9141-5e36dc102f51.png">


## ZSH Terminal

* My personalized ZSH, make ".zshrc" file (if does not exists) in home directory then put as following
> PROMPT="%F{magenta}%n%f%F{yellow}@%m%f %B%F{green}%1~%f%b %F{magenta}$%f "

* Check Version  (`zsh --version`) -> (`zsh 5.8.1 (x86_64-apple-darwin21.0)`)
* All packages installed by Installer (`pkgutil --pkgs`)
* Identify where shell is installed (`which zsh`) -> Answer should be (`/bin/zsh`)
* Find out which shell i am using (`dscl . -read /Users/<username> UserShell`) -> Answer should be (`UserShell: /bin/zsh`)
* Help (`zsh --help`)
* use Homebrew to install any Third party software without installer. 
* Open chrome with disable web security `open -na Google\ Chrome --args --disable-web-security --user-data-dir="/tmp/chrome_dev"`

## Homebrew 

All Commands to be typed in ZSH shell 

Homebrew requires the Xcode command-line tools from Apple's Xcode.

* Install the Xcode command-line tools by running the following command in your macOS Terminal:
```sh
xcode-select --install
```
* Xcode version (`xcode-select --version`) -> (`xcode-select version 2395.`)

* Help (`brew --help`)
* Check Version  (`brew --version`)
* All packages installed by Installer (`brew list`)
* Update to latest version of Homebrew (`brew update`)
* Update all the packages installed by Homebrew (`brew upgrade`)

# Node.js #
* Download Node.js from https://nodejs.org/en/ here and install it. 
* Start node REPL (Read, Evaluate, Print, Loop) in ZSH  (`node`)
* Execute .js file from node (`node <filenName.js>`) from correct path
* NPM is included with Node. js installation

  ## npm (Node Package Manager) ##
  * Packages should be install project wise in project folder only
  * `npm init` to create package.json (all packages records will be saved in this file, path should be normally in project root directory) 
  * `npm i or npm install` will automatically look for `package.json` and it will install all packages listed in package.json file. 
  * install package (`npm i <package-name> `)

  ## Express (Framework for Node.js) ##
  * To create server 
  * `npm i express` install express 
  * require (`const express = require("express")`) and execute (`const app = express()`)
  * `app.use()` will run on every incoming request to server. (get, post, put, homepage,/dogs,/cats....all of them)
  * Bonus : `nodemon` tool to restart server automatically whenever change in code during development phanse 
  
  ## EJS (Embedded JavaScript templates) ## 
  * `npm i ejs` install ejs 
  * to use ejs `app.set('view engine', 'ejs');`
  * if we set express to use "view engine", express will assume by default to look for ejs templates in "/views" folder. (this will only work if your are running your application from the same folder otherwise express will not be able to find the "/view" that is why the next point,)
  * require path from express `const path = require('path');` then combine path with current working directory `app.set('views', path.join(__dirname,'/views'));`

  ### Serving Static Assets in Express ###
  * `app.use(express.static(path.join(__dirname,'public')))`
  * Then reference file name of the `public` directory in template to use 
  
  ### Parsing the Request Body
  * `app.use(express.json())` // for parsing application/json
  * `app.use(express.urlencoded({ extended: true }))` // for parsing application/x-www-form-urlencoded
  * now we have access to `req.body`
  * Sometimes "PUT, PATCH or DELETE" method is not supported by form, theere `method-override` package comes to rescue. 
  * `const methodOverride = require('method-override')` and `app.use(methodOverride('_method')))` 

# MongoDb #
  * Installation Guide :- https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
  * Required Software : Xcode, Homebrew
  * Install : `brew install mongodb-community@6.0`
  * Never start your mongodb as root 
  * Start MongoDb service (`mongod` mongodemon process): `brew services start mongodb-community@6.0` <br>
    <img width="625" alt="image" src="https://user-images.githubusercontent.com/67994954/190848291-5dea6eb3-fa08-44cd-8be2-14f343a19b7a.png">
    <br>
  * Check Homebrew Service `brew services list`<br>
    <img width="717" alt="image" src="https://user-images.githubusercontent.com/67994954/190847217-089de628-644e-4976-bd92-7bf10e043db3.png">
    <br>
   -> So My Service has this Error. Now, I am going to stop the Service and Restart with Sudo 
  * Stop MongoDb Service (`mongod` mongodemon process) : `brew services stop mongodb-community@6.0` <br>
    <img width="616" alt="Screenshot 2022-09-15 at 20 08 13" src="https://user-images.githubusercontent.com/67994954/190478189-f5dfecc3-7613-4e1c-8f45-f1be645d2d3d.png">
    ## Error while starting mongodb service ##
      * Error on command `brew services list`
          <img width="740" alt="Screenshot 2022-09-17 at 10 16 17" src="https://user-images.githubusercontent.com/67994954/190847426-a2081e74-8e65-43c5-b9e6-77e347921fc9.png">
       
      * delete `mongo.log` from `/opt/homebrew/var/log/mongodb/mongo.log` since it is under root folder
      * delete `mongodb` from `/opt/homebrew/var/mongodb` since it is under root folder
      * Now Configure your own paths in `mongod.conf` file at `/opt/homebrew/etc/mongod.conf`
          ```
          systemLog:
                    destination: file
                    path: /Users/fenildesai/Desktop/mongodb/mongo.log #/opt/homebrew/var/log/mongodb/mongo.log
                    logAppend: true
                  storage:
                     dbPath: /Users/fenildesai/Desktop/mongodb/data/db #/opt/homebrew/var/mongodb
                  net:
                      bindIp: 127.0.0.1
                      port: 27017
          ```
      * After above steps your mongodb service should start. 
      * If network related error then run -> `brew services restart -vvv mongodb-community@6.0`
        <img width="775" alt="Screenshot 2022-09-17 at 10 31 24" src="https://user-images.githubusercontent.com/67994954/190847982-807fe24a-ffd8-4e37-ae98-c16f9abc0c8e.png"><br>
       
       ## MongoDB Shell (mongosh) ##
       * Now that mongodb service (`mongod` mongodemon process) is running start the `mongosh`
         <img width="1009" alt="image" src="https://user-images.githubusercontent.com/67994954/190848500-5f695a20-c269-4abd-9ea4-deff12a972da.png">
       * Shtdown the mongodb service from mongosh
         <img width="724" alt="image" src="https://user-images.githubusercontent.com/67994954/190848677-2f2536bf-4a2b-4580-ae8c-f5f8364e5b4e.png">

       ## Mongoose (ODM = Object Document Mapper)
       * https://mongoosejs.com/
       * It maps documents coming from a database into usable JavaScript objects. 
       * It provides ways for us to model out our application data and define a schema. It offers easy ways to validate data and build complex queries from the comfort of JS.
       * Install `npm i mongoose`

    
