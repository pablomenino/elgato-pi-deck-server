/**
    * NodeJS-elgato Server Framework
    *
    * LICENSE: GPL 3.0
    *
    * @package    NodeJS-elgato
    * @author     Pablo Meniño
    * @copyright  Pablo Meniño (pablo.menino@mfwlab.com)
    * @license    http://www.gnu.org/licenses/gpl-3.0.html
    * @version    0.9.1
    *
    * @email      pablo.menino@mfwlab.com
    * @website    https://www.mfwlab.com
    *
*/

// Libs
var http = require("http");
var sys = require('util');
var exec = require('child_process').exec;
var url = require("url");
const fs = require('fs');

// Read conig file
var jsonConfig = fs.readFileSync('./config.json');
// Parse json
var jsonConfig = JSON.parse(jsonConfig);

function onRequest(request, response)
{
    var params = url.parse(request.url,true).query;
    function puts(error, stdout, stderr) {sys.puts(stdout)}

    console.log("NodeJS-elgato - Version 0.9 - Start");

    // Only for debug
    // console.log(params);
    // console.log(request.connection.remoteAddress);

    // Accept gets only from remoteAddress in config file
    if (request.connection.remoteAddress.includes(jsonConfig.remoteAddress))
    {
        if (params.launch == "elgato-pi-deck")
        {

            // Read actions from config file
            for(let valueActions of jsonConfig.actions)
            {

                if (params.conn == valueActions.conn)
                {
                    console.log(valueActions.log);
                    // Return OK to client
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end('Request OK');
                    // Execute action
                    exec(valueActions.command);
                    exec("notify-send 'NodeJS-elgato' '" + valueActions.notify + "' --icon=dialog-information ");
                }
    
            }

        }

    }

    console.log("NodeJS-elgato - End");
}

http.createServer(onRequest).listen(jsonConfig.listenPort);
