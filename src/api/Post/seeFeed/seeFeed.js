import { FULL_POST_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeFeed: async (_, args, { prisma, request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const following_list = await prisma.user({ id: user.id }).following();
      const feed = await prisma
        .posts({
          first: 3,
          orderBy: "createdAt_DESC",
          where: {
            user: {
              id_in: following_list.map(user => user.id)
            }
          }
        })
        .$fragment(FULL_POST_FRAGMENT);
      return feed;
    }
  }
};
