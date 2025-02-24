const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { posts: action.payload };
    case "CREATE_POST":
      return { posts: [...state.posts, action.payload] };

    case "UPDATE_POST":
      const clonePosts = [...state.posts];
      const foundedId = clonePosts.findIndex((i) => i.id === action.payload.id);

      clonePosts[foundedId] = action.payload.post;
      return { ...state, posts: clonePosts };
    case "DELETE_POST":
      const filtred = state.posts.filter((post) => post._id !== action.payload);

      return { ...state, posts: filtred };
    default:
      return state;
  }
};

export default postReducer;
