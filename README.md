# App-Framework-Cordova


The App-Framework Cordova is an open-source "wrapper" that helps you to transform your web app in a full feature

mobile app that can eventually resides remotely. In few words: 

You can build extended websites that can communicate with your device remotely!

You can also forget to compile and update your app for all mobile platform everytime 

you need to fix/add functionalities  

Thanks to phonegap/cordova and web technologies you love.


## How to install

1. download or clone this repo

2. copy ***config.xml.dist*** and paste it with new name: ***config.xml***

3. copy ***/www/conf/conf.def.json*** and paste with new name:  ***/www/conf/conf.json***

4. ***configure config.xml*** following phonegap docs ***and conf.json*** following instructions below

5. you've a ***ready-to-build mobile app***!


***NOTE:*** If you want to compile and run locally, you need to run following script:

`phonegap-install-plugins` ( contains commands to install all required plugins )

and then you need to run:

`phonegap run <platform> --device --verbose`

( to install on your device , overwrite <platform> with android,ios or winphone )


## How use the framework

Read documentation inside: /www/README.md
