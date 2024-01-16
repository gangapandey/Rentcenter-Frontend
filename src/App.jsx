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

import Product from "./pages/product/Product";
import Registerform from "./global/component/forms/Registerform";
import ForgetPassword from "./global/component/forms/forgetPassword";
import VerifyOtp from "./global/component/forms/verifyOtp";
import ResestPassword from "./global/component/forms/ResetPassword";
import ProductDetail from "./pages/product/ProductDetail";

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
            <Route path="/register" element={<Registerform />} />
            <Route path="/loginn" element={<Signupform />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="/verifyOtp" element={<VerifyOtp />} />
            <Route path="/resetPassword" element={<ResestPassword />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/hostvechicle" element={<Hostvechicle />} />
            <Route path="/hostelectronic" element={<Hostelectronic />} />
            <Route path="/productdetail" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
