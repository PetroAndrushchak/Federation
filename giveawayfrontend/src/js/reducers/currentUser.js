const LOCAL_STORAGE_USER_KEY = 'giveaway-user-auth-info';

export const getCurrentUser = () => {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY));
    } catch(e) {
      return undefined;
    }
  };

  const setCurrentUser = (currentUser) => {
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(currentUser));
  };

  const currentUser = (state=null, action) => {
    switch(action.type) {
        case "AUTHENTICATE_USER":
          setCurrentUser(action.currentUser);
          return {...action.currentUser};
        default:
          return state;
      }
  };




export default currentUser;