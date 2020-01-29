import { GraphQLServer } from 'graphql-yoga'

// Type definitions aka (schema) all the operations that 
// can be performed on our API
const typeDefs = `
    type Query {
        hello: String!
    }
`


// Resolvers are functions that run when various options run
// In general, the structure will mirror the schema.
const resolvers = {
    Query: {
        hello() {
            return "This is my first query"
        }
    }
}

const server = new GraphQLServer({
 typeDefs,
    resolvers
})

server.start(() => {
    console.log("The server is up!")
})