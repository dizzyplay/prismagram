import { FULL_POST_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeFullPost: async (_, args, { prisma }) => {
      const { id } = args;
      return await prisma.post({ id }).$fragment(FULL_POST_FRAGMENT);
    }
  }
};
