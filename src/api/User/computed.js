export default {
  User: {
    fullName: parent => {
      return `${parent.firstName} ${parent.lastName}`;
    },
    amIFollowing: (parent, __, { request, prisma }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return prisma.$exists.user({
        AND: [{ id: user.id }, { following_some: { id: parentId } }]
      });
    },
    itsMe: async (parent, __, { request }) => parent.id === request.user.id
  }
};
