/**
    * NodeJS-elgato Server Framework
    *
    * LICENSE: GPL 3.0
    *
    * @package    NodeJS-elgato
    * @author     Pablo Meniño
    * @copyright  Pablo Meniño (pablo.menino@mfwlab.com)
    * @license    http://www.gnu.org/licenses/gpl-3.0.html
    * @version    0.8
    *
    * @email      pablo.menino@mfwlab.com
    * @website    https://www.mfwlab.com
    *
*/

var http = require("http");
var sys = require('util');
var exec = require('child_process').exec;
var url = require("url");

function onRequest(request, response)
{
    var params = url.parse(request.url,true).query;
    function puts(error, stdout, stderr) {sys.puts(stdout)}

    console.log("NodeJS-elgato - Version 0.8 - Start");

    // Only for debug
    // console.log(params);
    // console.log(request.connection.remoteAddress);

    // Accept gets only from Raspberry Pi Node
    if (request.connection.remoteAddress.includes('192.168.0.10'))
    {

        if (params.launch == "elgato-pi-deck")
        {
            if (params.conn == "firefox")
            {
                console.log("Execute Firefox Action");
                // Return OK to client
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end('Request OK');
                // open a new tab in Firefox with google.com
                exec("firefox -new-tab \"https://www.google.com/\"");
            }

            if (params.conn == "clementine")
            {
                console.log("Execute Clementine Action");
                // Return OK to client
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end('Request OK');
                // open Clementine
                exec("clementine %U");
            }

        }

    }

    console.log("NodeJS-elgato - End");
}

http.createServer(onRequest).listen(8889);
