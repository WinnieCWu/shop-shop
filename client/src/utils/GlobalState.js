import React, {createContext, useContext} from "react";
//used to instantiate a new Context obj to hold our global state data from
//and sharable thruout the application
//useContext is a React Hook that allows use to use the state from createContext fxn
import {useProductReducer} from './reducers';

//when we run createContext() fxn, creates new Context obj
const StoreContext = createContext();
const {Provider} = StoreContext; 

const StoreProvider = ({value = [], ...props}) => {
    //with StoreProvider fxn, we instantiate our initial global state with useProductReducer()
    //every time we run useProductReducer() fxn, we receive both state and dispatch function
    //state = current version; dispatch = method we execute to update our state
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    //use this to confirm it works!
    console.log(state);
    //return the StoreContent's Provider component with our state obj 
    //and dispatch the fxn as data for the value prop
    return <Provider value={[state,dispatch]} {...props} />;
};

//when we execute this from w/in the component, will receive the [state,dispatch] data from StoreProvider 
const useStoreContext = () => {
    return useContext(StoreContext);
  };

export {StoreProvider, useStoreContext};