//getUser from state
export const getUser = state => {
  return state.user.user;
};

export const getIsLoading = state => {
  return state.user.isLoading;
};

export const getIsAuth = state => {
  return state.user.isAuth;
};
