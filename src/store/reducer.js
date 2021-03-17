import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducer";
// import someFeatureReducer from "./someFeature/reducer";

// function someFeatureReducer(state = "hi", action) {
//   return state;
// }

const reducer = combineReducers({
  //someFeature: someFeatureReducer,
  feed: feedSliceReducer,
});

export default reducer;
