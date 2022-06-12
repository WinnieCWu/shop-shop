import { useReducer } from 'react';

import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
  } from "./actions";

  //creates a fxn called reducer. when executed, it'll pass value of action.type argument into switch statement
  // and compare with possible actions
export const reducer = (state, action) => {
    switch (action.type) {
      // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
      case UPDATE_PRODUCTS:
          //return new obj with copy of state argument using spread operator
        return {
          ...state,
          products: [...action.products],
        };

      // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
      case UPDATE_CATEGORIES:
        return {
          ...state,
          categories: [...action.categories]
        };
      
      case UPDATE_CURRENT_CATEGORY:
        return {
          ...state,
          currentCategory: action.currentCategory
        };

      // if it's none of these actions, do not update state at all and keep things the same!
      default:
        return state;
    }
  };

  //this fxn will be used to help initalize our global state obj and 
  //then provide us with fxnality for updating that state by auto running it thru reducer() fxnality
  //its a more in-depth way of using the useState() Hook
  export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }