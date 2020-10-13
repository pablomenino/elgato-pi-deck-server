#!/bin/bash

#----------------------------------------------------------------------------------------
# NodeJS-elgato
# Version: 0.9.1
# 
# WebSite:
# https://www.mfwlab.com/
# 
# Copyright © 2020 - Pablo Meniño <pablo.menino@mfwlab.com>
#----------------------------------------------------------------------------------------

SCRIPT=`realpath $0`
SCRIPTPATH=`dirname $SCRIPT`

# Kill previous instances
kill $(ps aux | grep 'node NodeJS-elgato.js' | awk '{print $2}')

# Execute server
cd $SCRIPTPATH

node NodeJS-elgato.js &
