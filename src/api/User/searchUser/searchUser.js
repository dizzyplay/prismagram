export default {
  Query: {
    searchUser: async (_, args, { request, prisma }) => {
      const { term } = args;
      return await prisma.users({
        where: {
          OR: [
            { username_contains: term },
            { firstName_contains: term },
            { lastName_contains: term }
          ]
        }
      });
    }
  }
};
