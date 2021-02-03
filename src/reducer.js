export const initialState = {
  open: false,
  color: 'red'
};

export const actionTypes = {
  SET_BAG_MODAL: "SET_BAG_MODAL",
  TEST_COLOR: "TEST_COLOR"
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_BAG_MODAL:
      return {
        ...state,
        open: action.open
      };
      case actionTypes.TEST_COLOR:
        return {
          ...state,
          color: action.color
        };
    default:
      return state;
  }
};

export default reducer;