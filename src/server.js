import { GraphQLServer } from "graphql-yoga";

// Scalar types - String, Boolean, Int, Float, ID
// Non scalar types - arrays, objects

// Type definitions aka (schema) all the operations that
// can be performed on our API

// The exclamation mark means it cannot return null.

const typeDefs = `
    type Query {
        me: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`;

// Resolvers are functions that run when various options run
// In general, the structure will mirror the schema.
const resolvers = {
  Query: {
    me() {
      return {
        id: "abc123",
        name: "Mike",
        email: "mike@example.com",
        age: 26
      }
    },
    post() {
        return {
            id: "123fD34A",
            title: "My Favorite tools for 2020",
            body: "Lorem ipsum alor somet",
            published: true
        }
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log("The server is up!");
});
