export default {
  Mutation: {
    editProfile: (_, args, { request, prisma, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { firstName, lastName, bio } = args;
      try {
        return prisma.updateUser({
          data: {
            firstName,
            lastName,
            bio
          },
          where: {
            id: user.id
          }
        });
      } catch (e) {
        return e;
      }
    }
  }
};
