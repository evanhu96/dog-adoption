const { Tech, Matchup, Dog } = require("../models");

const resolvers = {
  Query: {
    tech: async () => {
      return Dog.find({});
    },
    dogs: async () => {
      return Dog.find({});
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
      return dog;},

    //   {
    //   type: DogType,
    //   args: {
    //     id: { type: new GraphQLNonNull(GraphQLID) },
    //   },
    //   resolve(parent, args) {
    //     return Dog.findByIdAndRemove(args.id);
    //   },
    // },

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
