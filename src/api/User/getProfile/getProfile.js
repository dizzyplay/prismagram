export default {
  Query: {
    getUser: (_, args, { request, prisma, isAuthenticated }) => {
      const { userId } = args;
      return prisma.user({ id: userId });
    }
  }
};
