const postState = {
  posts: [{ title: "Test title", content: "Test content" }],
};

export const postReducer = (state = postState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      console.log("Undefined action provided");
      return state;
  }
};