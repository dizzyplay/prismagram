import { isAuthenticated } from "../../../middlewares";

export default {
  Mutation: {
    addComment: async (_, args, { request, prisma }) => {
      isAuthenticated(request);
      const { user } = request;
      const { text, postId } = args;
      const comment = await prisma.createComment({
        text,
        post: {
          connect: {
            id: postId
          }
        },
        user: {
          connect: {
            id: user.id
          }
        }
      });
      return comment;
    }
  }
};
