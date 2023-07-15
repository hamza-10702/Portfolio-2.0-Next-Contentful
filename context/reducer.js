export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { contentData: { ...state.contentData } };
    default:
      return state;
  }
};
