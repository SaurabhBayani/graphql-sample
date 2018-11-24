var express = require('express');
var app = express();
var graphqlHTTP = require('express-graphql');

app.use('/graphql', graphqlHTTP({
    // will show error message
}));

// Start this awsome app
app.listen('4000', function() {
    console.log('*********************'); 
    console.log('App running on port 4000 :', new Date());
    console.log('*********************');
})