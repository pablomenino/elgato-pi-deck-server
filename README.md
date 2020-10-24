<!-- start badges -->
![GitHub release](https://img.shields.io/github/release/pablomenino/elgato-pi-deck-server)
![GitHub license](https://img.shields.io/github/license/pablomenino/elgato-pi-deck-server)
![GitHub last commit](https://img.shields.io/github/last-commit/pablomenino/elgato-pi-deck-server)
![GitHub repo size](https://img.shields.io/github/repo-size/pablomenino/elgato-pi-deck-server)
![Contributors](https://img.shields.io/github/contributors-anon/pablomenino/elgato-pi-deck-server)
![GitHub followers](https://img.shields.io/github/followers/pablomenino?label=Follow)
![Twitter Follow](https://img.shields.io/twitter/follow/pmenino)
<!-- end badges -->

<!-- start description -->
<h1>Welcome to elgato-pi-deck-server 👋</h1>
<p>
    <a href="https://lab.mfwlab.com/lab/elgato-pi-deck-server/" id="homepage" rel="nofollow">
        <img align="right" height="128" id="icon" src="logo.svg" width="128"/>
    </a>
</p>
<h2>🏠 <a href="https://lab.mfwlab.com/lab/elgato-pi-deck-server/" id="homepage">Homepage</a></h2>
<p>
    elgato-pi-deck-server - Is a local NodeJS Server Script to execute commands controlled by Elgato Stream Deck (Client software where Steram Deck is connected). You can have one or several's NodeJS Server's.
</p>
<!-- end description -->

## Table of contents

* [How it works](#how-it-works)
* [How to Use](#how-to-use)
* [Support me](#support-me)
* [Third party](#third-party)

## <a name="how-it-works"> How it works

elgato-pi-deck-server - Is a local NodeJS Server Script to execute commands controlled by Elgato Stream Deck (Client software where Steram Deck is connected). You can have one or several's NodeJS Server's.

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

## <a name="support-me">Support me:

### Librepay

<a href="https://liberapay.com/pablomenino/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>

### Paypal

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4HPTG85J8NQVG)

## <a name="third-party">Third party:

* **Icons:** The icon images are from [Tela Icon Theme](https://github.com/vinceliuice/Tela-icon-theme)
