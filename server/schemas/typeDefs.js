const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Tech {
    _id: ID!
    name: String!
  }
  type Dog {
    _id: ID!
    breed: String
    name: String!
    age: Int
  }

  type Breed {
    _id: ID!
    breed: String
    category: String
    size: String
    exercise: String
    homeSize: String
    grooming: String
    coat: String
    lifeSpan: String
    imgLink: String
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
    dogs: [Dog]
    dogsByBreed(breed: String): [Dog]
    getBreed(breed: String): [Breed]
    facetSearch(
      exercise: [String]
      category: [String]
      grooming: [String]
      homeSize: [String]
    ): [Breed]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
    deleteDog(_id: ID!): Dog
    addDog(name: String, breed: String, age: Int): Dog
  }
`;

module.exports = typeDefs;
