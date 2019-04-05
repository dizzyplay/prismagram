export const USER_FRAGMENT = `
fragment UserParts on User{
  id
  avatar
  username
 }
`;

export const FULL_POST_FRAGMENT = `
  fragment PostParts on Post{
       id
      location
      caption
    createdAt
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
       avatar
      }
    }
`;

export const ROOM_FRAGMENT = `
  fragment RoomParts on Room{
    id
    participants{
      id
      username
      avatar
   }
   messages{
    id
    to{
      id
      username
      }
    from{
      id
      username
      }
    text
    }
 }`;
