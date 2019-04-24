export default {
  User: {
    fullName: parent => {
      return `${parent.firstName} ${parent.lastName}`;
    },
    followingCount: ({id}, __, {prisma}) => {
      return prisma
        .usersConnection({where: {following_some: {id}}})
        .aggregate()
        .count();
    },
    followersCount: ({id}, __, {prisma}) => {
      return prisma
        .usersConnection({where: {followers_some: {id}}})
        .aggregate()
        .count();
    },
    postsCount: (parent, __, {prisma}) => {
      return prisma
        .postsConnection({where: {user: {id: parent.id}}})
        .aggregate()
        .count();
    },
    isFollowing: (parent, __, {request, prisma}) => {
      const {user} = request;
      const {id: parentId} = parent;
      return prisma.$exists.user({
        AND: [{id: user.id}, {following_some: {id: parentId}}],
      });
    },
    isSelf: async (parent, __, {request}) => parent.id === request.user.id,
  },
};
