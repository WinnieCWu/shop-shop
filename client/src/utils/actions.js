export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
//update_products is used by ProductList component. 
//get all data from server, and Apollo caches the results
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
//take the list of categories retrieved from Apollo and store in this global state
//easier for offline capabilities later on
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
//connecting piece. we can select category from state and display it in the products

//add actions related to shopping cart
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';
