export default {
  Mutation: {
    sendMessage: async (_, args, { request, prisma, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { toUserId, text, roomId } = args;
      const toUser = await prisma.user({ id: toUserId });
      return await prisma.createMessage({
        room: {
          connect: {
            id: roomId
          }
        },
        text,
        from: {
          connect: {
            username: user.username
          }
        },
        to: {
          connect: {
            username: toUser.username
          }
        }
      });
    }
  }
};
