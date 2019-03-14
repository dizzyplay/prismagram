export default {
  Query: {
    seeFullPost: async (_, args, { prisma }) => {
      const { id } = args;
      const post = await prisma.post({ id });
      const comments = await prisma.post({ id }).comments();
      const likeCount = await prisma
        .likesConnection({ where: { post: { id } } })
        .aggregate()
        .count();
      return { post, comments, likeCount };
    }
  }
};
