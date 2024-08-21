import React from "react";
import "./navbar.css";
import logo from "../../assets/imagesnavbar/logo.png";
import wishlist from "../../assets/imagesnavbar/wishlist.png";
import shopping_cart from "../../assets/imagesnavbar/shopping_cart.png";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import { logout } from "../../Features/Slider/loginSlice";
import happyface  from "../../assets/imagesnavbar/happyface.png";
import sadface from "../../assets/imagesnavbar/sadface.png";

const Navbar=()=>{
    
    const totalAmount= useSelector((state)=>state.cart.totalAmount);
    //to set the username in the heading
    const  user = useSelector((state)=>state.user.user);
    const {name} = user;

    //for cart open and close
    const  [open, setOpen] = useState(false);
    const handleopen=()=>{
        setOpen(true);
    }

    const   dispatch = useDispatch()
    /* onmouse hover the logout to hide the login img 
    const loginlogo = document.getElementsByClassName("navbar_logo");
    const logoutlogo = document.getElementsByClassName("logout");

    logoutlogo.addEventListener(onscroll,myFunction)

    const myFunction=()=>{
        loginlogo.style.img = "hidden";
    }
    */

    return (
        <div className="navbar_container">
            <div className="navbar_heading">
                <h1>Welcome back {name[0].toUpperCase()+ name.slice(1)}</h1>
                <img src={happyface} alt="" className='w-12 m-2'  />
            </div>
            <div className="narbar_heading_1">
                <div className="navabar_logo">
                    <img src={logo} alt=""  className="img_logo"/>
                </div>
                <div className="navbar_heading_2">
                    <div className="logout" onClick={()=>dispatch(logout())}>
                        <div className="navbar_button_logout"  >
                            <button>Logout</button>
                            <img src={sadface} alt=""  className="thinking" />
                        </div>
                    </div>
                    <div className="navbar_icons">
                        <div className="navbar_wishlist">
                            <img src={wishlist} alt="" className="icons_icons" />
                            <p>Wishlist</p>
                        </div>
                        <div className="navbar_shoppingcart" onClick={handleopen}>
                        {totalAmount > 0 ? (
                            <span className="shoppingcart_value">
                                {totalAmount}
                            </span>
                             ) : (
                            <img src={shopping_cart} alt="" className="icons_icons" />
                             )}
                            <p>Shopping Cart</p>
                            <div>
                                {open && <Cart openModal={open} setOpen={setOpen}/>}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="navbar_bottom">
                <div className="bottom">50% OFf</div>
                <div className="bottom">Free shipping & Returns</div>
                <div className="bottom">different Payment method</div>
            </div>
        </div>
    )
}

export default Navbar;

//line 39 terneary operator is  used if totalAmout is less thaan 0 its will show image or  else it display the adder cart 
//value 



