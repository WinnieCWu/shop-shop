import { reducer } from '../utils/reducers';

// import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
  } from '../utils/actions';
  
  // create a sample of what our global state will look like
  const initialState = {
      //empty list of products
    products: [],
    //single category in a list
    categories: [{ name: 'Food' }],
    currentCategory: '1',
    cart: [
      {
        _id: '1',
        name: 'Soup',
        purchaseQuantity: 1
      },
      {
        _id: '2',
        name: 'Bread',
        purchaseQuantity: 2
      }
    ],
    cartOpen: false
  };

//test UPDATE_PRODUCTS actions to see if we can add a new product to products array
  test('UPDATE_PRODUCTS', () => {
      //pass in current state held in initialState
      //create a new state object that has the updated product info
    let newState = reducer(initialState, {
      type: UPDATE_PRODUCTS,
      //update our products list with contents held in products array
      products: [{}, {}]
    });
    //confirms that we successfully added our products to the newState w/o affecting initialState
    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
  });

  //test UPDATE_CATEGORIES action
  //pass the initial state, but our action type and value changes, with value as arrays
  test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CATEGORIES,
      categories: [{}, {}]
    });
  
    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
  });

  test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: '2'
    });
  
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
  });

  test('ADD_TO_CART', () => {
    let newState = reducer(initialState, {
      type: ADD_TO_CART,
      product: { purchaseQuantity: 1}
    });
    
    expect(newState.cart.length).toBe(3);
    //initial state is immutable, so verify it's not updated
    expect(initialState.cart.length).toBe(2);
  });

  test('ADD_MULTIPLE_TO_CART', () => {
    let newState = reducer(initialState, {
      type: ADD_MULTIPLE_TO_CART,
      products: [{}, {}]
    });
  
    expect(newState.cart.length).toBe(4);
    expect(initialState.cart.length).toBe(2);
  });

  test('REMOVE_FROM_CART', () => {
    let newState1 = reducer(initialState, {
      type: REMOVE_FROM_CART,
      _id: '1'
    });
    //cart is still open
    expect(newState1.cartOpen).toBe(true);
    //the 2nd item should now be the 1st
    expect(newState1.cart.length).toBe(1);
    expect(newState1.cart[0]._id).toBe('2');
    
    let newState2 = reducer(newState1, {
      type: REMOVE_FROM_CART,
      _id: '2'
    });
  
    // cart is empty and closed
    expect(newState2.cartOpen).toBe(false);
    expect(newState2.cart.length).toBe(0);
  
    expect(initialState.cart.length).toBe(2);
  });

test('UPDATE_CART_QUANTITY', () => {
  let newState = reducer(initialState, {
    type: 'UPDATE_CART_QUANTITY',
    _id: '1', 
    purchaseQuantity: 3
  });
  expect(newState.cartOpen).toBe(true);
  expect(newState.cart[0].purchaseQuantity).toBe(3);
  expect(newState.cart[1].purchaseQuantity).toBe(2);

  expect(initialState.cartOpen).toBe(false);
});

test('CLEAR_CART', () => {
  let newState = reducer(initialState, {
    type: CLEAR_CART
  });

  expect(newState.cartOpen).toBe(false);
  expect(newState.cart.length).toBe(0);
  expect(initialState.cart.length).toBe(2);
});

test('TOGGLE_CART', () => {
  let newState = reducer(initialState, {
    type: TOGGLE_CART
  });

  expect(newState.cartOpen).toBe(true);
  expect(initialState.cartOpen).toBe(false);

  let newState2 = reducer(newState, {
    type: TOGGLE_CART
  });

  expect(newState2.cartOpen).toBe(false);
});