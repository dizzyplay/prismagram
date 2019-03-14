import { USER_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    myProfile: (_, __, { prisma, request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const profile = prisma.user({ id: user.id });
      const posts = prisma.user({ id: user.id }).posts();
      // return prisma.user({ id: user.id }).$fragment(USER_FRAGMENT);
      return { user: profile, posts };
    }
  }
};
