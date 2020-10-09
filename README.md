<h3 align="center">elgato-pi-deck-server</h3>
<h3 align="center">Version: 0.9</h3>
<p align="center">elgato-pi-deck-server - Is a local NodeJS Server Script to execute commands controlled by Elgato Stream Deck (connected to a Raspberry Pi). You can have one or several's NodeJS Server's.</p>

<p align="center">
<a href="https://github.com/pablomenino/elgato-pi-deck-server/releases"><img src="https://img.shields.io/github/release/pablomenino/elgato-pi-deck-server.svg"></a>
<a href="./LICENSE"><img src="https://img.shields.io/github/license/pablomenino/elgato-pi-deck-server.svg"></a>
</p>

**This is the server part of [elgato-pi-deck](https://github.com/pablomenino/elgato-pi-deck/)**

**This is a basic script to be used like a template or idea of something more complex that you need**

## Table of contents

* [How to Use](#how-to-use)

## <a name="how-to-use">How to Use

#### Requirements

* NodeJS
* NPM
* There must be a user session established to perform script actions.

Installing NodeJS in Fedora:

Starting from Fedora 24, npm is a part of Node.js package and does not need to be installed separately. Therefore, to install both npm and Node.js, you need to run:

```
sudo dnf install nodejs
```

Installing NodeJS packages:

```
npm install js-yaml
```

#### Usage

<a href="https://raw.githubusercontent.com/pablomenino/elgato-pi-deck-server/master/Assets/diagam.png"><img src="https://raw.githubusercontent.com/pablomenino/elgato-pi-deck-server/master/Assets/diagam.png" width="380"></a>

In this case you are on Cumputer 1 or 2:

Clone this repo

```
git clone https://github.com/pablomenino/elgato-pi-deck-server/
cd elgato-pi-deck-server/
```

By default this script use TCP port 8889, you can change it editing the config file config.json:

```
# By example if you want to use port TCP 25864

# Edit file
vi config.json

# Replace listenPort:
# From
"listenPort": "8889",
# To
"listenPort": "25864",
```

Configure IP address of your Raspberry PI (Accept only request from that IP)

In config.json file, change IP Address for your local Raspberry PI:

```
# By example if you Raspberry Pi have the IP Address 10.2.20.40

# Edit file
vi config.json

# Replace line:
# From
"remoteAddress": "192.168.0.10",
# To
"remoteAddress": "10.2.20.40",
```

Configure custom actions

Add new actions:

By example open a new tab in Firefox with google.com:

```
        {
            "conn": "firefox",
            "log": "Execute Firefox",
            "notify": "Execute Firefox",
            "command": "firefox -new-tab \"https://www.google.com/\""
        },
```

In elgato-pi-deck you must assign elgato-pi-deck/firefox action to a button.

Execute script to bring the server up.

```
./NodeJS-elgato.sh
```
