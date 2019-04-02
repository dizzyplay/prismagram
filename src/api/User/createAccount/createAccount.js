export default {
  Mutation: {
    createAccount: async (_, args, {prisma}) => {
      const {username, email, firstName = '', lastName = '', bio = ''} = args;
      const exists_username = await prisma.$exists.user({username});
      const exists_email = await prisma.$exists.user({email});
      if (exists_email) {
        throw Error('해당 이메일을 사용하는 유저가 이미 존재 합니다.');
      } else if (exists_username) {
        throw Error('해당 유저명을 사용하는 유저가 이미 존재 합니다.');
      }
      try {
        const user = await prisma.createUser({
          username,
          email,
          firstName,
          lastName,
          bio,
        });
        return true;
      } catch {
        return false;
      }
    },
  },
};
