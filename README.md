<h3 align="center">elgato-pi-deck-server</h3>
<h3 align="center">Version: 0.9.2</h3>
<p align="center">elgato-pi-deck-server - Is a local NodeJS Server Script to execute commands controlled by Elgato Stream Deck (Client software where Steram Deck is connected). You can have one or several's NodeJS Server's.</p>

<p align="center">
<a href="https://github.com/pablomenino/elgato-pi-deck-server/releases"><img src="https://img.shields.io/github/release/pablomenino/elgato-pi-deck-server.svg"></a>
<a href="./LICENSE"><img src="https://img.shields.io/github/license/pablomenino/elgato-pi-deck-server.svg"></a>
</p>

**This is the server part of [elgato-pi-deck](https://github.com/pablomenino/elgato-pi-deck/)**

## Table of contents

* [How to Use](#how-to-use)

## <a name="how-to-use">How to Use

#### Requirements

* NodeJS
* NPM
* libnotify

**Installing NodeJS in Fedora:**

Starting from Fedora 24, npm is a part of Node.js package and does not need to be installed separately. Therefore, to install both npm and Node.js, you need to run:

```
sudo dnf install nodejs
```

**Installing libnotify in Fedora:**

```
sudo dnf install libnotify
```

#### Usage

<a href="https://raw.githubusercontent.com/pablomenino/elgato-pi-deck-server/master/Assets/diagam.png"><img src="https://raw.githubusercontent.com/pablomenino/elgato-pi-deck-server/master/Assets/diagam.png" width="380"></a>

This guide is intended to help you to configure the script parameters (config.json) and software.

For this example elgato-pi-deck-server are be installed on Computer 1 or Computer 2:

**Clone this repo:**

```
git clone https://github.com/pablomenino/elgato-pi-deck-server/
cd elgato-pi-deck-server/
```

By default this script uses TCP port 8889 for the server, you can change it editing the config file config.json:


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

NOTE: You need to open the port in firewall (In this example firewalld).

```
sudo firewall-cmd --permanent --add-port=8889/tcp

# Or TCP 25864 Port

sudo firewall-cmd --permanent --add-port=25864/tcp

# Reload firewals policy
sudo firewall-cmd --reload
```

Configure IP address of elgato-pi-deck (Client) (Accept only request from that IP)

In config.json file, change IP Address for your local elgato-pi-deck node (Client):

```
# By example if you run elgato-pi-deck over a Raspberry Pi (This is only an example, can be other computer/OS) and you have the IP Address 10.2.20.40

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

Full config example:

```
{
    "remoteAddress": "192.168.0.10",
    "listenPort": "8889",
    "actions":
    [
        {
            "conn": "firefox",
            "log": "Execute Firefox",
            "notify": "Execute Firefox",
            "command": "firefox -new-tab \"https://www.google.com/\""
        },
        {
            "conn": "bitwarden",
            "log": "Executed Bitwarden",
            "notify": "Executed Bitwarden",
            "command": "bitwarden"
        }
    ]
}
```

Configuration parameters:

**conn:** Action name.

**log:** Text to display on console (Debug propose).

**notify:** Notify text to be displayed.

**command:** Command to be execute on local computer.
