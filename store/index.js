import { configureStore } from "@reduxjs/toolkit";
import FeatureReducer from "./reducer/FeatureReducer";

export const store = configureStore({
  reducer: { feature: FeatureReducer },
});
