import {configureStore} from "@reduxjs/toolkit"; 
import sliderReducer  from "../Features/Slider/SliderSlice";
//sliderReducer,proudctReducer,cartReducer is the name we are given
import ProductReducer from "../Features/Slider/ProductSlice";
import cartReducer from "../Features/Slider/CartSlice";
import loginReducer from "../Features/Slider/loginSlice";


export const store =configureStore({
    reducer:{
        slider:sliderReducer,
        product:ProductReducer,
        cart:cartReducer,
        user: loginReducer
    },
    
})