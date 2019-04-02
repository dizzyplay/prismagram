export default {
  Mutation: {
    createAccount: async (_, args, {prisma}) => {
      const {username, email, firstName = '', lastName = '', bio = ''} = args;
      try {
        const user = await prisma.createUser({
          username,
          email,
          firstName,
          lastName,
          bio,
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};
