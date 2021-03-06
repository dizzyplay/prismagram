export default {
  Query: {
    searchPost: async (_, args, { prisma }) => {
      const { term } = args;
      return await prisma.posts({
        where: {
          OR: [{ location_starts_with: term }, { caption_starts_with: term }]
        }
      });
    }
  }
};
