export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD TO CART": {
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    }
    case "REMOVE FROM CART": {
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    }
    case "INCREMENT": {
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, qty: action.payload.qty + 1 },
        ],
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, qty: action.payload.qty - 1 },
        ],
      };
    }
    default: {
      return state;
    }
  }
};
