// import { combineReducers } from "redux";
// import { weightLogReducer } from "./weightLogReducer";

// const reducers=combineReducers({
//     weightLogReducer,
// });

// export default reducers;

import { combineReducers } from "redux";
import nutritionPlanReducer from "./nutritionPlanReducer";
import { weightLogReducer } from "./weightLogReducer";
import dietPlanReducer from "./dietPlanReducer";
import paymentReducer from "./paymentReducer";
import reducer from "./authReducer";

const rootReducer = combineReducers({
  fakestorePlans: nutritionPlanReducer,
  weightLogReducer,
  fakestore:dietPlanReducer,
  fakestore: paymentReducer,
  auth: reducer,

});

export default rootReducer;
