const graphql = require('graphql');
const _ =  require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt
} = graphql;

// Dummy data
const moviesList = [
    {"id":"1","name":"Break Up","genre":"Thriller"},
    {"id":"2","name":"Stranger, The","genre":"Action"},
    {"id":"3","name":"Impromptu","genre":"Comedy|Romance"},
    {"id":"4","name":"Right Now (À tout de suite)","genre":"Crime|Drama|Romance|Thriller"},
    {"id":"5","name":"Young & Wild (Joven y alocada)","genre":"Drama"}
];

const directorsList = [
    {"id":1,"name":"Ritchie Breston","gender":"Male"},
    {"id":2,"name":"Bald Shrieve","gender":"Male"},
    {"id":3,"name":"Maxie Severns","gender":"Male"},
    {"id":4,"name":"Alisha Bambery","gender":"Female"},
    {"id":5,"name":"Freda Colyer","gender":"Female"}
];

// Schema for movies
const MovieType = new GraphQLObjectType({
    name: 'MovieType',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

// Schema for directors
const DirectorType =  new GraphQLObjectType({
    name: 'DirectorType',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        gender: {type: GraphQLString}
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                console.log(' _.find(moviesList, {id: args.id});: ',  _.find(moviesList, {id: args.id}));
                return _.find(moviesList, {id: args.id});
            }
        },
    })
});

module.exports = new GraphQLSchema({
    query: RootQueryType,
});