export default {
  Query: {
    getProfile: (_, args, {prisma}) => {
      const {username} = args;
      const profile = prisma.user({username});
      const posts = prisma.user({username}).posts();
      return {user: profile, posts};
    },
  },
};
