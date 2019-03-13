export const isAuthenticated = (request)=>{
  if(!request.user){
    throw Error('you need login for this action')
  }
};