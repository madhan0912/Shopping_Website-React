import React from "react";
import  "./slider.css";
import { nextSlide, prevSlide, dotSlide } from "../../Features/Slider/SliderSlice";
import { useSelector, useDispatch } from "react-redux";
import {sliderData} from "../../assets/data/dummydata";


//sliderdata is oject value innthe dummydata



const Slider=()=>{
    const slideIndex = useSelector((state)=>state.slider.value);
    //console.log("slideIndex", slideIndex);

    const dispatch = useDispatch();
    
    
    return(
        <div className="slider" >
            <div className="slider_slider" >
                {sliderData.map((item,index)=>{
                    return(
                        <div key={item.id} className={parseInt(item.id) ===slideIndex ? "opacity-100 duration-700 ease-in-out scale-100" 
                        : "opacity-0 duration-700 ease-in-out scale-95" }>
                            <div>
                                {parseInt(item.id) === slideIndex &&(
                                     <img src={item.img} alt="shoes" className="slider_images"/>
                                )}
                            </div>
                            <div className="slider_text">
                                {parseInt(item.id)===slideIndex && (
                                    <p>{item.text}</p>
                                    
                                )}
                                
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="slider_rounded">
                {sliderData.map((dot,index)=>{
                    return (
                       <div key={index} className="mr-4">
                            <div className={index ===slideIndex ? "bg-green-300  rounded-full p-4 cursor-pointer" 
                                 : "bg-red-200 rounded-full p-4 cursor-pointer" }
                                 onClick={()=>dispatch(dotSlide(index))}
                                 ></div>
                            
                       </div> 
                    )
                })}
            </div>
            <div >
            <button className="button slider_left" onClick={()=>dispatch(nextSlide(slideIndex + 1))}>❮</button>
            <button className="button slider_right" onClick={()=>dispatch(prevSlide(slideIndex - 1))}>❯</button>
            </div>

            
           
        </div>
    );
};

export default Slider;

//nextslide & prevslide value is taken form Sliderslice.jsx to  move next slide