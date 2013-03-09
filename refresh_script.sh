#!/bin/bash

$i = 0;
#Kill the current server process
ps -A | grep "node web.js" | tail -n1 | cut -d ' ' -f 2 | xargs kill

#Restart the server
node web.js &

#Notify the user
echo "Server refereshed $i"
