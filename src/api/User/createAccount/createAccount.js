export default {
  Mutation: {
    createAccount: async (_, args, context) => {
      const {username, email, firstName = "", lastName = "", bio = ""} = args;
      const user = await context.prisma.createUser({
        username,
        email,
        firstName,
        lastName,
        bio
      });
      return user;
    }
  }
};