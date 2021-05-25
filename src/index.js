// write your createStore function here

function createStore(reducer) {
  let state;
  let listeners = [];
  
  const subscribe = (listener) => {
    listeners.push(listener);
  }
  
  const dispatch = (action) => {
   state = reducer(state, action)
   listeners.forEach( listener => listener() ) 
  }
  
  dispatch({type:"Initial Action"})
  
  const getState = () => {
    return state
  }
  
  return{
    getState: getState,
    dispatch: dispatch,
    subscribe, subscribe
  }
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let store = createStore()
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.

