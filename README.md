# software-and-tool
> List of my Softwares and Tools as well commands, How to install, update and upgrade them 

## ZSH Terminal

* Check Version  (`zsh --version`) -> Answer is (`zsh 5.8.1 (x86_64-apple-darwin21.0)`)
* All packages installed by Installer (`pkgutil --pkgs`)
* Identify where shell is installed (`which zsh`) -> Answer should be (`/bin/zsh`)
* Find out which shell i am using (`dscl . -read /Users/<username> UserShell`) -> Answer should be (`UserShell: /bin/zsh`)

## Homebrew

All Commands to be typed in ZSH shell 

* Check Version  (`brew --version`)
* All packages installed by Installer (`brew list`)
* Update to latest version of Homebrew (`brew update`)
* Update all the packages installed by Homebrew (`brew upgrade`)

```sh
zsh --version 
```

