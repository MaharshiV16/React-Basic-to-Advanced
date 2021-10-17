import React from "react";
import PropTypes from "prop-types";
import default_image from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      <img src={url || default_image} alt={name} />
      <h4>{name}</h4>
      <p>$ {price || "Unavailable"}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "Item",
//   price: "Unavailable",
//   image: { url: default_image },
// };

export default Product;
