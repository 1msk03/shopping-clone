import { configureStore } from "@reduxjs/toolkit";
import cartSystem from "./redux/cartSystem";

const store = configureStore({
  reducer: {
    cartProduct: cartSystem,
  },
});
export default store;
