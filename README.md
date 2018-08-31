# NodeJSMySQLExpressRestAPICRUD

This is Single Page(SPA) CRUD Application.This will very usefull for beginers to study how build NODE JS CRUD application without refresh page using AJAX JSON Technologies .

I have used Node JS, Express JS, MySQL, JADE Template Engine ,Bootstrap 4 CSS Framwork , AJAX,JSON, JQuery,Javascript, Rest API technologies for build this Single Page Application.

Here is few things to know initially.

HOW INSTALL NODE EXPRESS APP
-----------------------------

Create APP Folder And go to that folder using Commanline (CMD). (Ex : I created "MyNodeAPP" folder in my hard ).Then go to that folder using CMD and hit followings

npm install express-generator -g

//here is create express js node application inside MyNodeApp folder.
express crudnodejs

//then you can see "crudnodejs" folder has created inside "MyNodeAPP".then go for that
cd crudnodejs

//install node
npm install

SET DEBUG=crudnodejs:* & npm start

NOW you can check your app on browser localhost:3000 port

#####################################################################

When after browser closed ,port also not working. if you need to relunch app

Go for Your APP Folder in CMD (ex: my one is H:MyNodeAPP/crudnodejs)

then Hit

//for node server start
npm start

######################################################################

for install mysql 
---------------
npm install mysql –save


for install body-paser
---------------------
npm install body-parser

############################################################################
This will automatically changes apply.we don't need refresh /restart server after changes affect

npm install nodemon -g

//then every time hit this part.then you dont need to restart time to time your server after changes done.it will automatically apply
nodemon app.js


