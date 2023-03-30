import { configureStore } from "@reduxjs/toolkit";
import magicBricksReducer from '../Store/Reducer'
const Store = configureStore({
    reducer:{
     Bricks:magicBricksReducer
    }
})
export default Store