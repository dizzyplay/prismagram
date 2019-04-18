export default {
  Comment:{
    user:(parent,{id},{prisma}) => prisma.comment({id:parent.id}).user(),
    post:(parent,{id},{prisma}) => prisma.comment({id:parent.id}).post()
  }
}
