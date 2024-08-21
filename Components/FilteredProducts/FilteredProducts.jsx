import React from "react";
import "./filterproducts.css";
import {useParams} from "react-router-dom";
import ProductCard from "./ProductCard";
import Error from "../Error/Error";
import {filteredProducts, filterGender, sortByPrice, filterByColor, filterBySize} from "../../Features/Slider/ProductSlice";
import { useSelector, useDispatch } from "react-redux";

const FilteredProducts=()=>{
    const error = useSelector((state)=> state.product.error)
    const products = useSelector((state)=>state.product.filteredProducts);
    //{filteredProducts is get from productslice page }
    //console.log("products",products);
    const  {type} = useParams();
    //console.log("params",type);

    const genderButton  = ["Male",  "Female"];
    const colorButtons = ["red","green","purple","yellow","orange","blue","black","brown"];

    const selectSize = ["S", "M", "L", "XL"];

    const dispatch = useDispatch();
    return(
        <div className="pt-8">
            <div className="pl-10">
                <h1 className="product_text">{type}</h1>
            </div>

            <div className="filterProducts_buttons">
              <div className="filter_button">
                {genderButton.map((item,index)=>{
                  return(
                    <div  key={index}>
                      <button className="buttons" onClick={() => dispatch(filterGender(item))}>{item}</button>
                    </div>
                  )
                })}
              </div>
              <div className="filter_button">
              <button className="buttons" onClick={()=> dispatch(sortByPrice())}>High price</button>
              </div>

              <div className="color_item">
                <div className="color_button">
                <button className="buttons">Select Color</button>
                </div>
                <div className="color_color">
                  {colorButtons.map((item,index)=>{
                    return(
                      <div className="color variant" style={{color:item}} onClick={()=>(dispatch(filterByColor(item)))}>{item}</div>
                    )
                  })}
                </div>
              </div>

              <div className="size_item">
                <div className="size_button">
                <button className="buttons" disabled={type === "Bags" || type === "Shoes"}> Select Size </button>
                </div>
                <div className="size_size">
                  {selectSize.map((item,index)=>{
                    return(
                      <div className="color variant" onClick={()=>(dispatch(filterBySize(item)))} >{item}</div>
                    )
                  })}
                </div>
              </div>
                 

              <div className="clear_buttons">
                <button className="clearbuttons" onClick={()=>(dispatch(filteredProducts(type)))}>Clear Filter</button>
              </div>
            </div>

             {/* -------  */}
             {error ? <Error/> : <div className="product_items">
              {products
                .filter((product) => product.type === type)
                .map((product, index) => {
                  return (
                    <div key={index} className="product_items-outer">
                      <ProductCard
                        id={product.id}
                        name={product.name}
                        text={product.text}
                        img={product.img}
                        price={product.price}
                        colors={product.color}
                      />
                    </div>
                  );
                })}
              </div> }
        </div>
    )
}

export default FilteredProducts;
