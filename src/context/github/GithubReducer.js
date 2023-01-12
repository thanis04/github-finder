const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'GET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_CLEAR':
      return {
        ...state,
        users: []
      }
    default:
      return state;
  }
};

export default githubReducer;
