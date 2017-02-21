# PHP-SERVER

Setup a simple Express server that can run PHP script. This is possible with:

1. [node-php](https://github.com/mkschreder/node-php) by mkshcreder

## Installation

This node require php-cgi to be installed:

`sudo apt-get install php-cgi`

Install php-server with npm:

`npm install -g github:Windastella/php-server`

Start the server:

`php-server --port 8080 --host 0.0.0.0 --dir public`
