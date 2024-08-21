import React from "react";
import "./footer.css";
import logo from "../../assets/imagesnavbar/logo.png";
import twitter from "../../assets/imagesnavbar/twitter.png";
import facebook from "../../assets/imagesnavbar/facebook.png";
import instagram from "../../assets/imagesnavbar/instagram.png";

const Footer=()=>{
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_image">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="footer_contact">
                    <p>for contact </p>
                    <div className="footer_buttons">
                        <img src={twitter} alt="twitter" />
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagam" />
                    </div>
                </div>
                <div>
                    <div className="footer_text">
                        <h2>
                            copyright @ {year}
                        </h2>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Footer;
 