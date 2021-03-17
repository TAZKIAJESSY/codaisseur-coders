import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducer";
import postPageSliceReducer from "./postPage/reducer";
// import someFeatureReducer from "./someFeature/reducer";

// function someFeatureReducer(state = "hi", action) {
//   return state;
// }

const reducer = combineReducers({
  //someFeature: someFeatureReducer,
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
});

export default reducer;
