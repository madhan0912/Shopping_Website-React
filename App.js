import './App.css';
import Main from "./Components/Mainfile/Main";
import FilteredProducts from './Components/FilteredProducts/FilteredProducts';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SingleProduct from './Components/FilteredProducts/SingleProduct';
import {useSelector} from "react-redux";
import Login from './Components/Login/Login';

function App() {

  //const cart = useSelector((state)=> state.cart.cart);
  //const totalAmount = useSelector((state)=> state.cart.totalAmount);
  //const totalPrice = useSelector((state)=> state.cart.totalPrice);
  
  //console.log("cart", cart);
  //console.log("totalAmount", totalAmount);
  //console.log("totalPrice", totalPrice);



  const user = useSelector((state)=> state.user.user);
  const {authUser} = user;
  console.log("user", user);
  console.log("authUser", authUser);

  return (
    <div className='app' >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser? <Main/>:<Login/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/filteredProducts/:type" element={<FilteredProducts />}></Route>
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//in the  filteredproducts type is given for the select button names(items)