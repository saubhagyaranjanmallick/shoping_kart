import { BrowserRouter } from "react-router-dom";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
// import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import store from './store/store';
import Address from "./pages/Address";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Provider store={store}>
   
      <Routes>
        <Route path="/signin" element={ <SignIn />}/>
        <Route path="/signup" element={ <SignUp />}/>
        <Route path="/" element={ <Home />}/>
        <Route path="/cart" element={ <Cart/>}/>
        <Route path="/address" element={ <Address/>}/>

      </Routes>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
