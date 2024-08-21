import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import  "./singlepoduct.css"
import { addToCart } from "../../Features/Slider/CartSlice";
import {useDispatch} from "react-redux"

const SingleProduct=()=>{
    // product from store.jsx its the reducer 
    // singleProduct is comes from the productSlice - feature/slider

    const product = useSelector((state)=>state.product.singleProduct)
    //console.log('singleproduct', product);

    const productSize = product[0].size ? product[0].size[0] : "";
    const productColor = product[0].color[0];

    const [size, setSize] = React.useState(productSize);
    const [color, setColor] = React.useState(productColor);

    //console.log('product', product);

    const {id} = useParams();
    const dispatch = useDispatch();

    return(
        <div>
           {product.filter((product)=> product.id===id)
                .map((item,index)=>{
                    return(
                        <div  key={index}  className="singleproduct_container">
                            <div  className="image_container">
                                <img src={item.img} alt={item.name} className="singleproduct_image"  />
                            </div>

                            <div  className="grow-[3]" >
                                <div  className="max-w-lg">
                                    <h1 className="singleproduct_heading">
                                        {item.name}
                                    </h1>
                                    <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                                        15% OFF
                                    </p>
                                    <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                                        {item.text}
                                    </p>

                                    <div className="pb-4">
                                        {item.size ? (
                                            <div>
                                                <label
                                                    htmlFor="size"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Pick a size
                                                </label>
                                                <select
                                                    id="size"
                                                    name="size"
                                                    value={size}
                                                    onChange={(e) => setSize(e.target.value)}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                >
                                                    {item.size.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item}>
                                                                {item}
                                                            </option>
                                                            );
                                                    })}
                                                </select>
                                            </div>
                                        ) : (
                                            <div>
                                              <label
                                                htmlFor="size"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                              >
                                                Pick a size
                                              </label>
                                              <select
                                                id="size"
                                                disabled={true}
                                                name="size"
                                                value={size}
                                                onChange={(e) => setSize(e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                              >
                                                {item?.size?.map((item, index) => {
                                                  return (
                                                    <option key={index} value={item}>
                                                      {item}
                                                    </option>
                                                  );
                                                })}
                                              </select>
                                            </div>
                                        )}
                                    </div>

                                    <div className="pb-4">
                                        <label
                                            htmlFor="color"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                            Pick a color
                                        </label>
                                        <select
                                            id="color"
                                            name="color"
                                            value={color}
                                            onChange={(e) => setColor(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            >
                                            {item.color.map((color, index) => {
                                                return (
                                                    <option key={index} value={color}>
                                                        {color}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div  className="singleproduct_button">
                                    <button 
                                   onClick={() =>
                                    dispatch(
                                      addToCart({
                                        id: item.id,
                                        name: item.name,
                                        img: item.img,
                                        text: item.text,
                                        size: size,
                                        color: color,
                                        price: item.price,
                                        amount: 1,
                                        totalPrice: item.price,
                                      })
                                    )
                                  }>
                                        Add to cart   
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
           
           }
        </div>
    )
}

export default SingleProduct;

