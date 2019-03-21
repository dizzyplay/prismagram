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

export const MESSAGE_FRAGMENT = `
  fragment MessageParts on Message{
    id
    text
    to{
      id
      username
      }
     from{
      id
      username
    }
  }`;
