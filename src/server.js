import { GraphQLServer } from 'graphql-yoga'

// Scalar types - String, Boolean, Int, Float, ID 
// Non scalar types - arrays, objects

// Type definitions aka (schema) all the operations that 
// can be performed on our API

// The exclamation mark means it cannot return null.

const typeDefs = `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean!
    }
`


// Resolvers are functions that run when various options run
// In general, the structure will mirror the schema.
const resolvers = {
    Query: {
      title() {
          return "Mac Pro"
      }, 
      price() {
          return 30000
      }, 
      releaseYear() {
          return 2020
      }, 
      rating() {
          return null
      }, 
      inStock() {
          return true
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