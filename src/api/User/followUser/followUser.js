export default {
  Mutation: {
    followUser: async (_, args, { request, prisma, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { id } = args;
      try {
        await prisma.updateUser({
          data: {
            following: { connect: { id } }
          },
          where: {
            id: user.id
          }
        });
        return true;
      } catch {
        return false;
      }
    }
  }
};
