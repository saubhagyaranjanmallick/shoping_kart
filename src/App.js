import { BrowserRouter } from "react-router-dom";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import store from './store/store';
import Address from "./pages/Address";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <NavBar/>
      <br/>
      <br/>
      <br/>
      <Routes>
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
