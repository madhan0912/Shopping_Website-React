import React from "react";
import Navbar from "../Navbarfile/Navbar";
import Slider from "../Slider/Slider";
import NavigateButton from "../NavigateButton/NavigateButton";
import ProductSection from "../ProductSection/ProductSection";
import Footer from "../Footer/Footer";


const Main=()=>{
    return (
        <div>
           <Navbar />
           <Slider/>
           <NavigateButton />
           <ProductSection />
           <Footer/>
        </div>
    )
}

export default Main;