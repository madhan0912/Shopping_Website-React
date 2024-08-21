import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/Slider/CartSlice";
import  "./productsection.css";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <div>
      <div className="w-96 relative">
        <div
          className="mb-2 absolute -rotate-45 top-12 right-8 z-10 text-red-700"
        >
          SALE%
        </div>
        <header className="h-90">
          <img src={img} alt={name} />
        </header>
        <body className="text-center">
          <div  color="blue-gray" className="mb-2">
            {name}
          </div>
          <div  className="font-medium" >
            {text}
          </div>
          <div className="flex justify-between items-center pt-4  ml-5">
            <div color="red" className="font-medium" >
              Size left:{""}
              <span className="text-gray-400 text-base font-extralight">
                {defaultSize}
              </span>
            </div>
            <div color="gray" className="font-medium" textGradient>
              Color:{" "}
              <span
                className="px-2 rounded-full ml-2 mr-5"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </div>
          </div>
        </body>
        <footer className="flex justify-center gap-7 pb-2 pt-2px">
          <div>
            <button className="productsection_button"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
              }
              size="lg"
              color="gray"
              variant="outlined"
              ripple={true}
            >
              Add to Cart
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ProductSectionItem;