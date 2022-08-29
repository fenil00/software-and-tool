# software-and-tool
> List of my Softwares and Tools as well commands, How to install, update and upgrade them 

# MacBook Air with M1 #
* `/opt` -> the installation of add-on application software packages (Homebrew etc..)
* `/usr/local/bin/` -> for use by the system administrator when installing software locally (Node.js etc..)
* `Applications` -> All the applications installed by installer
* `cd ~` -> will give you home directory in ZSH
<img width="626" alt="image" src="https://user-images.githubusercontent.com/67994954/186946378-ff92d889-b891-4b18-9141-5e36dc102f51.png">


# ZSH Terminal #

* My personalized ZSH, make ".zshrc" file (if does not exists) in home directory then put as following
> PROMPT="%F{magenta}%n%f%F{yellow}@%m%f %B%F{green}%1~%f%b %F{magenta}$%f "

* Check Version  (`zsh --version`) -> (`zsh 5.8.1 (x86_64-apple-darwin21.0)`)
* All packages installed by Installer (`pkgutil --pkgs`)
* Identify where shell is installed (`which zsh`) -> Answer should be (`/bin/zsh`)
* Find out which shell i am using (`dscl . -read /Users/<username> UserShell`) -> Answer should be (`UserShell: /bin/zsh`)
* Help (`zsh --help`)
* use Homebrew to install any Third party software without installer. 

# Homebrew #

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


# MongoDb #


