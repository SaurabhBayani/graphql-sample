var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.write('Hello world');
});

// Start this awsome app
app.listen('4000', function() {
    console.log('*********************');
    console.log('App running on port 4000 :', new Date());
    console.log('*********************');
})