import { SEE_ROOM_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeRooms: (_, __, { prisma, request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      return prisma.user({ id: user.id }).rooms();
    }
  }
};
