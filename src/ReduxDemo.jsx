import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
//action type:
//מונע שגיאות כתיב בשימוש חוזר
const BUY_CANDY = "BUY_CANDY";
const BUY_ICECREAM = "BUY_ICECREAM";

//Action creator:
//Action פונקציה שמחזירה
const buyCandy = (amount = 1) =>{
  return {
    type: BUY_CANDY,
    payload: amount
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

//מצב התחלתי לחנות
const initialCandyState = {
  numberOfCandies: 200,
};

const initialIceCreamState = {
  numberOfIceCream: 200,
};

//פונקציה שמחזירה את המצב העדכני
//מחזיר את המצב העדכני
//flux pattern
const candyReducer = (state = initialCandyState, action) => {
  switch (action.type) {
    case BUY_CANDY:
      return {
        ...state,
        numberOfCandies: state.numberOfCandies - action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  candy: candyReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("initial state", store.getState());

//regular updates: callback is invoked when the state changes
const unsubscribe = store.subscribe(() =>
  {}//console.log("updated state", store.getState())
);

store.dispatch(buyCandy(10));
store.dispatch(buyCandy(5));
store.dispatch(buyCandy(3));

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

//done
unsubscribe();
