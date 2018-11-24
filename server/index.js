const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

// middleware for graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true, // Show query builder
}));

// Start this awsome app
app.listen('4000', function() {
    console.log('*********************');
    console.log('App running on port 4000 :', new Date());
    console.log('*********************');
});