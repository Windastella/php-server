# PHP-SERVER

Setup a simple Express server that can run PHP script. This is possible with:

1. [node-php](https://github.com/mkschreder/node-php) by mkshcreder

## Installation

This node require php-cgi and your choosen version of PHP installed:

`sudo apt-get install php-cgi php7.0 libapache2-mod-php7.0 php7.0 php7.0-common php7.0-gd php7.0-mysql php7.0-mcrypt php7.0-curl php7.0-intl php7.0-xsl php7.0-mbstring php7.0-zip php7.0-bcmath php7.0-iconv`

Install php-server with npm:

`npm install -g github:Windastella/php-server`

Start the server:

`php-server --port 8080 --host 0.0.0.0 --dir public`

## Options

`-p,--port` Set port Number , default `8080`

`-h,--host` Set host Address , default `0.0.0.0`

`-d,--dir` Set directory to serve, default ``
