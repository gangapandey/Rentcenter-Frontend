import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = async()=>{
        const response = await axios.get("https://localhost:3000/api/product")
        if (response.status == 200){
            setProducts(response.data.data)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
  return (
    <div>
      <div className="max-w-full h-full w-full m-auto py-20 px-4 relative group ">
        <p className="flex justify-center items-center text-2xl text-red-600 font-bold  ">
          Our Popular Products
        </p>

        <div class="mx-auto mt-11 w-64 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <img
            class="h-38 w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Product Image"
          />
          <div class="p-4">
            <h2 class="mb-2 text-lg font-medium dark:text-black text-gray-900">
              Product Name
            </h2>
            <p class="mb-2 text-base dark:text-gray-800 text-black-700">
              Product description goes here.
            </p>
            <div class="flex items-center">
              <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-black">
                $20.00
              </p>
              <p class="text-base  font-medium text-gray-500 line-through dark:text-black-300">
                $25.00
              </p>
              <button className="bg-blue-500 text-white px-2 py-2 ml-7 rounded-md hover:bg-blue-600">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
