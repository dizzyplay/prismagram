export default {
  Message: {
    to: async (parent, __, { prisma }) => {
      return await prisma.message({ id: parent.id }).to();
    },
    from: async (parent, __, { prisma }) => {
      return await prisma.message({ id: parent.id }).from();
    }
  }
};
