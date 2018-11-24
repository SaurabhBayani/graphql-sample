const graphql = require('graphql');
const _ =  require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Dummy data
const moviesList = [
    {"id":"1","name":"Break Up","genre":"Thriller"},
    {"id":"2","name":"Stranger, The","genre":"Action"},
    {"id":"3","name":"Impromptu","genre":"Comedy|Romance"},
    {"id":"4","name":"Right Now (À tout de suite)","genre":"Crime|Drama|Romance|Thriller"},
    {"id":"5","name":"Young & Wild (Joven y alocada)","genre":"Drama"}
]

// Schema for movies
const MovieType = new GraphQLObjectType({
    name: 'MovieType',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

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