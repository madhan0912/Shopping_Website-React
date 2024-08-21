import React from "react";
import "./navigatebutton.css";
import clothes from "../../assets/images/clothes.jpg"
import { filteredProducts } from "../../Features/Slider/ProductSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButton=()=>{

    const buttons = [
        "Hoodies",
        "Suits",
        "Shoes",
        "T-Shirts",
        "Dresses",
        "Jeans",
        "Jackets",
        'Bags',
    ];

    const dispatch = useDispatch();
    return(
        <div>
            <div className="navigate_container">
                <div className="navigate_listitems">
                {buttons.map((item, index)=>{
                    return(
                        <div key={index} className="navigate_item">
                            <Link to={"/filteredProducts/"  + item}>
                                <button className="navigate_button"  onClick={()=>dispatch(filteredProducts(item))}>
                                    {item}
                                </button>
                            </Link>
                        </div>
                    )
                })}
                
                </div>
            <div className="navbar_sale">
                <h3 className="navbar_text">Sales upto 30% Off</h3>
            </div>
            <div className="navbar_clothes">
                <img src={clothes} alt="clothes" className="navbar_clothes_img"/>
            </div>
            </div>
        </div>
    )
}
export default NavigateButton;