const initialState = { posts: [] };

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { posts: action.payload };
    case "CREATE_POST":
      return { posts: [action.payload, ...state.posts] };

    case "UPDATE_POST":
      const clonePosts = [...state.posts];
      const foundedId = clonePosts.findIndex(
        (i) => i._id === action.payload._id
      );

      clonePosts[foundedId] = action.payload;
      return { ...state, posts: clonePosts };
    case "DELETE_POST":
      const filtred = state.posts.filter((post) => post._id !== action.payload);

      return { ...state, posts: filtred };
    default:
      return state;
  }
};
