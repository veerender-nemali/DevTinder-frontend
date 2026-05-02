import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import feedReducer from "./slices/feedSlice"
import connectionsReducer from "./slices/connectionsSlice"
import requestReducer from "./slices/requestSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connections: connectionsReducer,
        requests: requestReducer
    }
})

export default appStore