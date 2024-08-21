import React from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../../Features/Slider/loginSlice";

const Login=()=>{
    const  initialState={
        name:  "",
        password:  ""
    };

    const [values, setValues] = React.useState(initialState)

    const onChange=(e)=>{
        const {name, value}= e.target;
        setValues({...values, [name]:value});    
    }

    const dispatch = useDispatch();

    return (
        <div className="login_contanier">
            <div className="login_box">
                <div  className="login_login">
                    <h1>Login  Form</h1>
                </div>
                <div className="login_form">
                    <label>Name:</label>
                    <br />
                    <input type="text"  name="name"   value={values.name} onChange={onChange} required/>
                </div>
                <div className="login_form">
                    <label>Password: </label>
                    <br />
                    <input type="password" name="password" value={values.password} onChange={onChange} required/>
                </div>
                <div className="login_button">
                    <button onClick={()=>dispatch(login(values))}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Login;