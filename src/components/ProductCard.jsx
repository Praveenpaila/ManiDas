import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={img} alt="product" className={styles.image} />
      </div>
    </div>
  );
};

export default ProductCard;
