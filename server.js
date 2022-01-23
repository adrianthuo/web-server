const fs = require('fs');
var express = require('express');
const https = require('https')
const path = require('path');

var app = express();

var PORT = 4444;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/server.html'));
});



app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});