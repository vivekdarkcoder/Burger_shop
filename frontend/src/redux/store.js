
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/userReducer";
import { orderReducer, ordersReducer } from "./reducers/ordersReducer";
import { adminReducer } from "./reducers/adminReducer";
import { ContactReducer } from "./reducers/contectReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        order: orderReducer,
        orders: ordersReducer,
        admin:adminReducer,
        contact: ContactReducer,
    },
})

export default store;

export const server = "https://burguerwalla.herokuapp.com/api/v1"
