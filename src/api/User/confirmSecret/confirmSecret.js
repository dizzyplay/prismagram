import {generateToken} from '../../../utils';

export default {
  Mutation: {
    confirmSecret: async (_, args, {prisma}) => {
      const {email, secret} = args;
      if (!email) throw Error('이메일 주소가 필요합니다');
      if (!secret) throw Error('시크릿키가 필요합니다');
      const user = await prisma.user({email});
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
      } else if (user.loginSecret === '') {
        throw Error('비밀키가 존재하지 않습니다. 이메일 인증을 해주세요');
      } else {
        throw Error('비밀키가 틀립니다. ');
      }
    },
  },
};
