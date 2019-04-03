import {generateToken} from '../../../utils';

export default {
  Mutation: {
    confirmSecret: async (_, args, {prisma}) => {
      const {email, secret} = args;
      const user = await prisma.user({email});
      try {
        if (user.loginSecret === secret) {
          await prisma.updateUser({
            where: {
              id: user.id,
            },
            data: {
              loginSecret: '',
            },
          });
          return generateToken(user.id);
        } else {
          throw Error('Wrong email/secret ');
        }
      } catch {
        throw Error('비밀키가 존재하지 않습니다 이메일 인증을 다시 해주세요');
      }
    },
  },
};
