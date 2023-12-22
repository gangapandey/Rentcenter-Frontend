import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { add } from "../../../store/cartSlice";

const Card = ({ id, imageSrc, title, rating, price, addToCart }) => {
  const renderStars = () => {
    const starArray = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      starArray.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
      starArray.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    const remainingStars = 5 - starArray.length;

    for (let i = 0; i < remainingStars; i++) {
      starArray.push(<FaStar key={`empty-${i}`} className="text-gray-400" />);
    }

    return starArray;
  };

  const dispatch = useDispatch()

  const addToCartt = ({ id, title, price }) => {
    dispatch(add({id,title, price, imageSrc }))
  }

  return (
    <div className="mb-4 p-5 flex-shrink-0">
      <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-32 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center mt-2">{renderStars()}</div>
          <p className="text-xs text-gray-400 mt-2 mb-0.5">Rent</p>
          <div className="flex items-center justify-between mt-1">
            <p className="text-gray-700">${price}</p>
            <button
              onClick={() => addToCartt({ id, title, price, imageSrc })}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductContainer = () => {
  const addToCart = (product) => {
    // Implement your addToCart logic here, e.g., update a shopping cart state
    console.log("Added to cart:", product);
  };

  const products = [
    {
      id: 1,
      imageSrc:
        "https://i.pinimg.com/564x/25/2e/f1/252ef1d94faa11bd302e7db19f20aee7.jpg",
      title: "Product 1",
      rating: 4.5,
      price: 29.99,
    },
    {
      id: 2,
      imageSrc:
        "https://i.pinimg.com/564x/87/22/b0/8722b0a660b43cd52af6d48f16c13c7f.jpg",
      title: "Product 2",
      rating: 3.8,
      price: 39.99,
    },
    {
      id: 3,
      imageSrc:
        "https://i.pinimg.com/564x/87/22/b0/8722b0a660b43cd52af6d48f16c13c7f.jpg",
      title: "Product 3",
      rating: 4.2,
      price: 49.99,
    },
    {
      id: 4,
      imageSrc:
        "https://i.pinimg.com/564x/87/22/b0/8722b0a660b43cd52af6d48f16c13c7f.jpg",
      title: "Product 4",
      rating: 4.9,
      price: 59.99,
    },
  ];

  return (
    <div className="bg-gray-50 p-10 mt-16 ">
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <Card key={product.id} {...product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
