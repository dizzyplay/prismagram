import {isAuthenticated} from "../../../middlewares";

export default {
  Mutation: {
    toggleLike: async (_, args, {request, prisma}) => {
      isAuthenticated(request);
      const {postId} = args;
      const {user} = request;
      try{
        const existingLike = await prisma.$exists.like({
          AND: [
            {
              user: {
                id: user.id
              }
            },
            {
              post:{
                id:postId
              }
            }
          ]
        });
        if(existingLike){
          await prisma.deleteManyLikes({
            AND:[
              {
                user:{
                  id:user.id
                }
              },
              {
                post:{
                  id:postId
                }
              }
            ]
          })
        }else{
          await prisma.createLike({
            user:{
              connect:{
                id:user.id
              }
            },
            post:{
              connect:{
                id:postId
              }
            }
          })
        }
        return true
      }
      catch {
        return false
      }
    }
  }
}