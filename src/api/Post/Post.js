export default {
  Post: {
    isLiked: (parent, __, { request, prisma }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.post({
        AND: [{ id }, { likes_some: { user: { id: user.id } } }]
      });
    },
    commentsCount: (parent, __, { prisma }) => {
      const { id } = parent;
      return prisma
        .commentsConnection({ where: { post: { id } } })
        .aggregate()
        .count();
    },
    likesCount: (parent, __, { prisma }) => {
      const { id } = parent;
      return prisma
        .likesConnection({ where: { post: { id } } })
        .aggregate()
        .count();
    }
  }
};
