export default {
  Mutation: {
    editProfile: (_, args, { request, prisma, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { firstName, lastName, bio, avatar, email, username } = args;
      try {
        return prisma.updateUser({
          data: {
            firstName,
            lastName,
            bio,
            email,
            username,
            avatar
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
