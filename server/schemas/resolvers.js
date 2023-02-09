const { Breed, Dog } = require("../models");

const resolvers = {
  Query: {
    dogs: async () => {
      return Dog.find({});
    },
    dogsByBreed: async (parent, args) => {
      return Dog.find(args);
    },
    facetSearch: async (parent, args) => {
      return Breed.find(args);
    },
    breed: async (parent, args) => {
      return Breed.findOne(args);
    },
  },
  Mutation: {
    // Delete a dog
    deleteDog: async (parent, args) => {
      const dog = await Dog.findByIdAndRemove(args);
      return dog;
    },
    addDog: async (parent, args) => {
      const dog = await Dog.create(args);
      return dog;
    },
  },
};

module.exports = resolvers;
