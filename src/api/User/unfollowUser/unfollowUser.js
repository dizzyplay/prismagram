export default {
  Mutation: {
    unfollowUser: async (_, args, { request, prisma, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { id } = args;
      try {
        await prisma.updateUser({
          data: {
            following: {
              disconnect: {
                id
              }
            }
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
