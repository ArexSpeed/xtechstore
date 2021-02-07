export const initialState = {
  bagOpen: false,
  bagItems: [],
  adminPhones: []
};

export const actionTypes = {
  SET_BAG_MODAL: "SET_BAG_MODAL",
  ADD_BAG_ITEM: "ADD_BAG_ITEM",
  DELETE_BAG_ITEM: "DELETE_BAG_ITEM",
  PLUS_ITEM_QTY: "PLUS_ITEM_QTY",
  MINUS_ITEM_QTY: "MINUS_ITEM_QTY",
  ADMIN_GET_PHONES: "ADMIN_GET_PHONES",
  ADMIN_ADD_PHONE: "ADMIN_ADD_PHONE",
  ADMIN_EDIT_PHONE: "ADMIN_EDIT_PHONE",
  ADMIN_DELETE_PHONE: "ADMIN_DELETE_PHONE",
};

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.SET_BAG_MODAL:
      return {
        ...state,
        bagOpen: action.bagOpen,
      };
    case actionTypes.ADD_BAG_ITEM:
      console.log(action.bagItems, "item in action");
      return {
        ...state,
        bagItems: action.bagItems,
      };
    case actionTypes.DELETE_BAG_ITEM:
      console.log(action.payload, "item to delete");
      return {
        ...state,
        bagItems: state.bagItems.filter((x) => x.id !== action.payload),
      };
      case actionTypes.PLUS_ITEM_QTY:
        console.log(action.payload.id, "add qty");
        return {
          ...state,
          qty: state.bagItems.filter((x) => x.id === action.payload.id ? x.qty++ : ''),
        };
        case actionTypes.MINUS_ITEM_QTY:
          console.log(action.payload.id, "add qty");
          return {
            ...state,
            qty: state.bagItems.filter((x) => x.id === action.payload.id ? x.qty-- : ''),
          };
    case actionTypes.ADMIN_GET_PHONES:
      return{
        ...state,
        adminPhones: action.payload
      }
    default:
      return state;
  }
};

export default reducer;