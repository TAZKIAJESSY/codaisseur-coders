import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";

function someFeatureReducer(state = "hi", action) {
  return state;
}

const reducer = combineReducers({
  someFeature: someFeatureReducer,
});

export default reducer;
