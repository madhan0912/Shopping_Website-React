import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummydata";

export const ProductSlice = createSlice({
  name:"products",
  initialState:{
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredStorage")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
    error: false,
    },
    reducers:{
        filteredProducts(state,action) {
            try{
                //storedata is from dummydata 
                const filter = storeData.filter(
                    (product)=>product.type === action.payload
                );
                //console.log("filter-product",filter);
                //below filteredproducts is inthe initalstate
                //product is button cliked data if hoodies clicked get the hoodies data if shoes clicked get the shoe data from storeData
                state.filteredProducts = filter;
                state.error = false;
                //console.log("filteredproucts from productslice", filter);
                const savedata = JSON.stringify(filter);
                sessionStorage.setItem("filteredproducts", savedata)
            }
            catch(err){
                return err,
                console.log("error message from productslice", err);
              }
        },
        singleProduct(state, action) {
            try {
              const oneProduct = storeData.filter(
                (product) => product.id === action.payload
              );
              state.singleProduct = oneProduct;

              const savedState = JSON.stringify(oneProduct);
              sessionStorage.setItem("oneProduct", savedState);
              //console.log("oneProduct-singleProduct", oneProduct);
            }
            catch (err) {
              return err
              //console.log('error message from oneProduct-singleProduct', err);
            }
          },
          filterGender(state, action) {
            try {
              const gender = state.filteredProducts.filter(
                (product) => product.gender === action.payload
              );
              state.error = false;
              state.filteredProducts = gender;
              const oneGenderType = gender.length > 0;
              if (oneGenderType) {
                state.error = false;
                const saveState = JSON.stringify(gender);
                sessionStorage.setItem("filteredData", saveState);
              } else {
                state.error = true;
                state.filteredProducts = [];
              }
            } catch (err) {
              return err;
            }
          },
        sortByPrice(state, action){
          try {
            const price = state.filteredProducts.sort((a,b)=>a.price > b.price ? -1 : 1)
            state.filteredProducts = price;
            let count = price.length;
            if (count>1) {
              const noerror = false;
              state.error  = noerror;
              if (!noerror) {
                state.filteredProducts = price;
                const savedState = JSON.stringify(price);
                sessionStorage.setItem("filteredData", savedState);               
              }
            } else {
              state.error = true;
              state.filteredProducts = [];
            }
          } catch (error) {
            return (error)
          }
        },
        filterByColor(state, action) {
          try {
            const color = state.filteredProducts.filter((product) =>
              product.color.includes(action.payload)
            );
            state.error = false;
            state.filteredProducts = color;
            if (color.length <= 0) {
              state.error = true;
              state.filteredProducts = [];
            } else {
              state.error = false;
              state.filteredProducts = color;
              const saveState = JSON.stringify(color);
              sessionStorage.setItem("filteredData", saveState);
            }
          } catch (err) {
            return err;
          }
        },
        filterBySize(state,action){
          try {
            const size = state.filteredProducts.filter(
              (product) => product.size.includes(action.payload)
            );
            state.error = false;
            state.filteredProducts = size;
            if (size.length <= 0) {
              state.error = true;
              state.filteredProducts = [];
            } else {
              state.error = false;
              state.filteredProducts = size;
              const savedState = JSON.stringify(size);
              sessionStorage.setItem("filteredData", savedState)
            }
          } catch (error) {
            return (error)
          }
        },
        },
})

export const { filteredProducts, singleProduct, filterGender, sortByPrice, filterByColor, filterBySize } =ProductSlice.actions;
export default ProductSlice.reducer; 
