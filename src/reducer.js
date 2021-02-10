export const initialState = {
  bagOpen: false,
  bagItems: [],
  adminPanel: "phones",
  adminPhones: [],
  currentEditId: "",
  adminUltrabooks: [],
  adminWatches: [],
  adminTablets: [],
};

export const actionTypes = {
  SET_BAG_MODAL: "SET_BAG_MODAL",
  ADD_BAG_ITEM: "ADD_BAG_ITEM",
  DELETE_BAG_ITEM: "DELETE_BAG_ITEM",
  PLUS_ITEM_QTY: "PLUS_ITEM_QTY",
  MINUS_ITEM_QTY: "MINUS_ITEM_QTY",
  ADMIN_PANEL: "ADMIN_PANEL",
  ADMIN_GET_PHONES: "ADMIN_GET_PHONES",
  ADMIN_ADD_PHONE: "ADMIN_ADD_PHONE",
  SET_CURRENT_EDIT_ID: "SET_CURRENT_EDIT_ID",
  ADMIN_EDIT_PHONE: "ADMIN_EDIT_PHONE",
  ADMIN_DELETE_PHONE: "ADMIN_DELETE_PHONE",
  ADMIN_GET_ULTRABOOKS: "ADMIN_GET_ULTRABOOKS",
  ADMIN_GET_WATCHES: "ADMIN_GET_WATCHES",
  ADMIN_GET_TABLETS: "ADMIN_GET_TABLETS",
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
        qty: state.bagItems.filter((x) =>
          x.id === action.payload.id ? x.qty++ : ""
        ),
      };
    case actionTypes.MINUS_ITEM_QTY:
      console.log(action.payload.id, "add qty");
      return {
        ...state,
        qty: state.bagItems.filter((x) =>
          x.id === action.payload.id ? x.qty-- : ""
        ),
      };
    case actionTypes.ADMIN_PANEL:
      return {
        ...state,
        adminPanel: action.payload,
      };
    case actionTypes.ADMIN_GET_PHONES:
      return {
        ...state,
        adminPhones: action.payload,
      };
    case actionTypes.SET_CURRENT_EDIT_ID:
      return {
        ...state,
        currentEditId: action.payload,
      };
    case actionTypes.ADMIN_EDIT_PHONE:
      return {
        ...state,
        adminPhones: state.adminPhones.map((phone) =>
          phone._id === action.payload._id ? action.payload : phone
        ),
      };
    case actionTypes.ADMIN_GET_ULTRABOOKS:
      return {
        ...state,
        adminUltrabooks: action.payload,
      };
    case actionTypes.ADMIN_GET_WATCHES:
      return {
        ...state,
        adminWatches: action.payload,
      };
      case actionTypes.ADMIN_GET_TABLETS:
      return {
        ...state,
        adminTablets: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
