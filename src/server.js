import { GraphQLServer } from 'graphql-yoga'

// Scalar types - String, Boolean, Int, Float, ID 
// Non scalar types - arrays, objects

// Type definitions aka (schema) all the operations that 
// can be performed on our API

// The exclamation mark means it cannot return null.

const typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employed: Boolean!
        gpa: Float
    }
`


// Resolvers are functions that run when various options run
// In general, the structure will mirror the schema.
const resolvers = {
    Query: {
        id() {
            return "abc123"
        },
        name() {
            return "Benjamin"
        }, 
        age() {
            return 28
        }, 
        employed() {
            return true
        }, 
        gpa() {
            return null
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