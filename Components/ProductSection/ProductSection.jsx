import React from "react";
import  "./productsection.css";
import ProductSectionItem from "./ProductSectionItems";
import { storeData } from "../../assets/data/dummydata";

const ProductSection=()=>{
    return(
        <div>
            <div className="product_container">
                <h1>Summer sale T-Shirt 30% off</h1>
            </div>
            <div className="product_section">
                {storeData.slice(0, 6).map((product, index) => {
                    return (
                        <div key={index}    className="product_section_items">
                            <ProductSectionItem
                                id={product.id}
                                text={product.text }
                                price={product.price}
                                totalPrice={product.totalPrice}
                                color={product.color}
                                size={product.size}
                                
                            />
            </div>
          );
        })}
      </div>
    </div>
    )
}

export default ProductSection;