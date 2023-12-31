import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./global/component/navbar/Navbar";
import Footer from "./global/component/footer/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/home/Home";
import Signupform from "./global/component/forms/Signupform";
import Cart from "./pages/cart/Cart";
import Hostvechicle from "./pages/hostvechicle/Hostvechicle";
import Hostelectronic from "./pages/hostelectronic/Hostelectronic";
import Registeruser from "./global/component/forms/Registeruser";
import Product from "./pages/product/Product";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <Navbar />
      <RouterProvider router={router} />
      <Footer /> */}

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loginn" element={<Signupform />} />
            <Route path="/register" element={<Registeruser />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/hostvechicle" element={<Hostvechicle />} />
            <Route path="/hostelectronic" element={<Hostelectronic />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
