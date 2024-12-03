import { configureStore } from "@reduxjs/toolkit";
import Todoslice from "./Todoslice"

 export const store=configureStore({
    reducer:{
        todo:Todoslice,
    }
 })