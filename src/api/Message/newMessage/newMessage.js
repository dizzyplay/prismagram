import { MESSAGE_FRAGMENT } from "../../../fragments";

export default {
  Subscription: {
    newMessage: {
      subscribe: (_, args, { prisma }) => {
        const { roomId } = args;
        return prisma.$subscribe
          .message({
            AND: [
              { mutation_in: "CREATED" },
              {
                node: {
                  room: { id: roomId }
                }
              }
            ]
          })
          .node()
          .$fragment(MESSAGE_FRAGMENT);
      },
      resolve: payload => payload
    }
  }
};
