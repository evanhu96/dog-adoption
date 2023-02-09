const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Dog {
    _id: ID!
    breed: String
    name: String!
    age: Int
    imgLink: String
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


  type Query {
    dogs: [Dog]
    dogsByBreed(breed: String): [Dog]
    breed(breed: String): Breed
    facetSearch(
      exercise: [String]
      category: [String]
      grooming: [String]
      homeSize: [String]
    ): [Breed]
  }

  type Mutation {
    deleteDog(_id: ID!): Dog
    addDog(name: String, breed: String, age: Int): Dog
  }
`;

module.exports = typeDefs;
