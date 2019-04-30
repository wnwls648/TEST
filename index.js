var express = require('express');
var ParseServer = require('parse-server').ParseServer;

var app = express();

var api = new ParseServer({
 databaseURI: 'mongodb+srv://wnwls:0404@cluster0-fbmyx.mongodb.net/test?retryWrites=true',
 appId: 'wnwls',
 masterKey: '0404',
 filekey: '981121',
 serverURL: "http://localhost:1337/parse"
});

//Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

var port = process.env.PORT || 1337;
app.listen(port,function() {
 console.log('parse-server running on port' + port + '.');
}); 
