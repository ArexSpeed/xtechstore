export const initialState = {
  bagOpen: false,
  bagItems: [
    {
      series: 'Pro Series',
      model: 'Pro 21 Max',
      img: '',
      cpu: '12-cores X-Brain',
      ram: '16GB',
      storage: '1TB',
      camera: '108MP',
      size: '6,9 inch',
      battery: '6000 mAh',
      price: '1500$'
    },
    {
      series: 'Pro Series',
      model: 'Pro 21',
      img: '',
      cpu: '8-cores X-Brain',
      ram: '12GB',
      storage: '512GB',
      camera: '108MP',
      size: '6,3 inch',
      battery: '5000 mAh',
      price: '1250$'
    },
  ]
};

export const actionTypes = {
  SET_BAG_MODAL: "SET_BAG_MODAL",
  ADD_BAG_ITEM: "ADD_BAG_ITEM",
  DELETE_BAG_ITEM: "DELETE_BAG_ITEM",
  TEST_COLOR: "TEST_COLOR"
};

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.SET_BAG_MODAL:
      console.log("reducer wokr");
      return {
        ...state,
        bagOpen: action.bagOpen,
      };
    case actionTypes.TEST_COLOR:
      return {
        ...state,
        color: action.color,
      };
    case actionTypes.ADD_BAG_ITEM:
      console.log(action.bagItems, "item in action");
      return {
        ...state,
        bagItems: action.bagItems,
      };
    case actionTypes.DELETE_BAG_ITEM:
      console.log(action.bagItems, "item to delete");
      return {
        ...state,
        bagItems: state.bagItems.filter((x) => x.model !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;