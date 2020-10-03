#!/bin/bash

#----------------------------------------------------------------------------------------
# NodeJS-elgato
# Version: 0.8
# 
# WebSite:
# https://github.com/pablomenino/nodejs-elgato/
# 
# Copyright © 2020 - Pablo Meniño <pablo.menino@gmail.com>
#----------------------------------------------------------------------------------------

SCRIPT=`realpath $0`
SCRIPTPATH=`dirname $SCRIPT`

# Kill previous instances
kill $(ps aux | grep 'node NodeJS-elgato.js' | awk '{print $2}')

# Execute server
cd $SCRIPTPATH

node NodeJS-elgato.js &
