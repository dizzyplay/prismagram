import { ROOM_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeRoom: async (_, args, { request, isAuthenticated, prisma }) => {
      isAuthenticated(request);
      const { user } = request;
      const { roomId } = args;
      const room = await prisma
        .user({ id: user.id })
        .rooms({ where: { id: roomId } })
        .$fragment(ROOM_FRAGMENT);
      return room[0];
    }
  }
};
