const { Tech, Matchup, Dog,Breed } = require("../models");




const resolvers = {
  Query: {
    tech: async () => {
      return Dog.find({});
    },
    dogs: async () => {
      return Dog.find({});
    },
    dogsByBreed:async(parent, args)=>{
      return Dog.find(args)
    },
    facetSearch: async(parent, args) =>{
        return Breed.find(args);

    },

    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
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

    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await Matchup.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${techNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
