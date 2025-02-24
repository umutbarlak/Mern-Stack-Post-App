export const modalReducer = (state = { modal: null }, action) => {
  switch (action.type) {
    case "MODAL":
      return { modal: action.payload };

    default:
      return state;
  }
};
