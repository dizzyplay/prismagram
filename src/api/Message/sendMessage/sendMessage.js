export default {
  Mutation: {
    sendMessage: async (_, args, { request, prisma, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { toUserId, message } = args;
      const toUser = await prisma.user({ id: toUserId });
      if (user.id === toUser.id) {
        throw Error("You can't send a message yourself.");
      }
      const room = await prisma
        .user({ id: user.id })
        .rooms({ where: { participants_some: { id: toUser.id } } });
      let roomId;
      if (room.length === 1) {
        roomId = room[0].id;
      } else if (room.length === 0) {
        const newRoom = await prisma.createRoom({
          participants: { connect: [{ id: user.id }, { id: toUser.id }] }
        });
        roomId = newRoom.id;
      } else {
        throw Error(
          "Chat system got an error. Room value is not correct. check room length"
        );
      }
      return await prisma.createMessage({
        room: { connect: { id: roomId } },
        text: message,
        to: { connect: { id: toUser.id } },
        from: { connect: { id: user.id } }
      });
    }
  }
};
