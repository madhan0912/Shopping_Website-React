import React from "react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../Features/Slider/ProductSlice";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    //id coming form the FilteredProduct page
    <Link to={`/filteredProducts/${type}/` + id}>
      <div className="w-96" onClick={() => dispatch(singleProduct(id))}>
        <header color="blue" className="relative h-96">
          <img src={img} alt="img-blur-shadow" className="h-full w-full" />
        </header>
        <body className="text-center">
          <div variant="h5" className="mb-2">
            {name}
          </div>
          <div>{text}</div>
        </body>
        <footer divider className="flex items-center justify-between py-3">
          <div variant="small">{price}$</div>
          <div variant="small" color="gray" className="flex gap-1">
            {colors?.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </div>
        </footer>
      </div>
    </Link>
  );
};

export default ProductCard;