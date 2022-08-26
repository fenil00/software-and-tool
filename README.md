# software-and-tool
> List of my Softwares and Tools as well commands, How to install, update and upgrade them 

# MacBook Air with M1 #
* (Windows) `%HOME%\AppData\user` = (M1) `/opt` = (Ubentu etc.) `/user/local/*`
* Program Files (x86) = Applications
<img width="626" alt="image" src="https://user-images.githubusercontent.com/67994954/186946378-ff92d889-b891-4b18-9141-5e36dc102f51.png">


# ZSH Terminal #

* My personalized ZSH, make ".zshrc" file (if does not exists) in home directory then put as following
> PROMPT="%F{magenta}%n%f%F{yellow}@%m%f %B%F{green}%1~%f%b %F{magenta}$%f "

* Check Version  (`zsh --version`) -> (`zsh 5.8.1 (x86_64-apple-darwin21.0)`)
* All packages installed by Installer (`pkgutil --pkgs`)
* Identify where shell is installed (`which zsh`) -> Answer should be (`/bin/zsh`)
* Find out which shell i am using (`dscl . -read /Users/<username> UserShell`) -> Answer should be (`UserShell: /bin/zsh`)
* Help (`zsh --help`)

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
  * install package (`npm i <package-name> `)


# MongoDb #


