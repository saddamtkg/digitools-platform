import React, { use } from "react";

import Banner from "./Banner";
import CtaSection from "./CtaSection";
import MainSection from "./MainSection";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Steps from "./Steps";

const HomePage = ({
  productsPromise,
  addToCart,
  removeFromCart,
  totalPrice,
  cartCount,
  proceedToCheckout,
  cartItems,
}) => {
  const products = use(productsPromise);

  return (
    <div>
      <Banner />
      <Stats />
      <MainSection
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
        cartCount={cartCount}
        proceedToCheckout={proceedToCheckout}
        cartItems={cartItems}
      />
      <Steps />
      <Pricing />
      <CtaSection />
    </div>
  );
};

export default HomePage;
