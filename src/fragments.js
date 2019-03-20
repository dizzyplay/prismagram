export const USER_FRAGMENT = `
fragment UserParts on User{
  id
  username
 }
`;

export const FULL_POST_FRAGMENT = `
  fragment PostParts on Post{
       id
      location
      caption
      files{
        id
        url
      }
      comments{
        id
        text
        user{
          id
          username
        }
      }
     user{
        id
        username
      }
    }
`;
