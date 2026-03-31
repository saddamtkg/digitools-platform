import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, addToCart }) => {
  return (
    <>
      <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductGrid;
