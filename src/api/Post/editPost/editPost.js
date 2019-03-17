export default {
  Mutation: {
    editPost: async (_, args, { request, prisma, isAuthenticated }) => {
      const DELETE = "DELETE";
      const EDIT = "EDIT";
      isAuthenticated(request);
      const { user } = request;
      const { id, location, caption, action } = args;
      const isAuthor = await prisma.$exists.post({
        AND: [{ id }, { user: { id: user.id } }]
      });
      if (isAuthor) {
        switch (action) {
          case EDIT:
            return prisma.updatePost({
              data: { caption, location },
              where: { id }
            });
          case DELETE:
            return prisma.deletePost({ id });
        }
      } else {
        throw Error("Not allowed ");
      }
    }
  }
};
