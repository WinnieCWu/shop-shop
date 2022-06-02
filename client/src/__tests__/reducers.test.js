import { reducer } from '../utils/reducers';

// import our actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
  } from '../utils/actions';
  
  // create a sample of what our global state will look like
  const initialState = {
      //empty list of products
    products: [],
    //single category in a list
    categories: [{ name: 'Food' }],
    currentCategory: '1',
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