import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <>
      <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard />
      </div>
    </>
  );
};

export default ProductGrid;
