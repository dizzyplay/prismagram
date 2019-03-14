export default {
  Query: {
    getProfile: (_, args, { request, prisma }) => {
      const { userId } = args;
      const profile = prisma.user({ id: userId });
      const posts = prisma.user({ id: userId }).posts();
      return { user: profile, posts };
    }
  }
};
