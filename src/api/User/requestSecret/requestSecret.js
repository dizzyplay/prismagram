import {generateSecret, sendSecretMail} from '../../../utils';

export default {
  Mutation: {
    requestSecret: async (_, args, {prisma}) => {
      const {email} = args;
      const user_exist = await prisma.$exists.user({email});
      if (user_exist) {
        const loginSecret = generateSecret();
        try {
          await sendSecretMail(email, loginSecret);
          await prisma.updateUser({data: {loginSecret}, where: {email}});
          return true;
        } catch {
          return false;
        }
      } else {
        return false;
      }
    },
  },
};
