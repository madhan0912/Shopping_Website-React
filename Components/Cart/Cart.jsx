import React from "react";
import "./cart.css"
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart} from "../../Features/Slider/CartSlice";

const  Cart=({openModal, setOpen })=>{
    const cart = useSelector((state)=> state.cart.cart)
    const totalprice  = useSelector((state)=> state.cart.totalPrice)
    //console.log('totalprice',totalprice);
    //add 2 or more items cart page moves upward

    const dispatch = useDispatch();
    return(
        
        <div className="cart_container"> 
            <div className="cartHeading">
                        <h1>Shopping Bag</h1><hr />
            </div>
           {cart.length > 0 ? (
            <div className="cart_cart">
                <div className="shoppingbag">
                    <div className="cart_items">
                        {cart.map((item,index)=>{
                            return(
                                <div key={index} > 
                                    <div  className="cartContainer">
                                        <div>
                                            <img src={ item.img } alt={ item.name } className="cartImage" />
                                            <div className="imageName">
                                                <h2>{ item.name }</h2>
                                            </div>
                                            <div className="cartText">
                                                <h2>{ item.text }</h2>
                                            </div>
                                        </div>
                                        <div className="cartptag">
                                            <div>
                                                <p>Selected size:{''} <span>{item.size}</span></p>
                                            </div>
                                            <div>
                                                <p>Selected color:{''} <span className="selected-g-color" style={{backgroundColor: item.color}}></span></p>
                                            </div>
                                            <div>
                                                <p>Amount:{''} <span>{item.amount}</span></p>
                                            </div>
                                            <div>
                                                <p>Single Item Price:{''} <span>{item.price}</span></p>
                                            </div>
                                            <div>
                                                <p>Total Item Price:{''} <span>{item.totalPrice}</span></p>
                                            </div>
                                            <div className="cartbutton" onClick={()=>dispatch(removeFromCart(item))}>
                                                <button>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cartBottom"></div>
                                </div>     
                            )    
                        })
                        }
                        <div className="cart-totalprice">
                            <p>Total Amount:{''} <span>{totalprice}</span></p>
                        </div>
                        <div className="cart_pay">
                            <button> proceed to  pay</button>
                        </div>
                    </div>
                </div>
            </div>
           ):(
           <div className="cart_empty">
                <h1>your bag is  empty  </h1> <br />
                <p>Add  items to Cart</p>
            </div>)}
         </div>
    )
}

export default Cart;
