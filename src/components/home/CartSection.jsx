import React from "react";

const CartSection = ({
  removeFromCart,
  totalPrice,
  proceedToCheckout,
  cartItems,
}) => {
  return (
    <>
      <div className="my-container p-10 border rounded-2xl border-[#f2f2f2]">
        <h2 className="text-2xl font-bold c-text-color">Your Cart</h2>
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="mt-6 bg-[#f9fafc] flex flex-col gap-4 md:flex-row md:justify-between md:items-center p-6 rounded-2xl"
            >
              <div className="flex gap-4">
                <div className="p-3.5 w-15.5 h-15.5 border border-[#f2f2f2] rounded-full">
                  <img className="w-8 h-8" src="/products/writing.png" alt="product-icon" />
                </div>
                <div>
                  <h2 className="lg:text-xl text-lg font-semibold c-text-color">
                    {item.name}
                  </h2>
                  <p className="text-[16px] font-medium text-[#627382]">$29</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-[16px] font-bold text-[#ff3980]"
              >
                Remove
              </button>
            </div>
          );
        })}

        {cartItems.length > 0 ? (
          <div className="mt-6">
            <div className="my-6 flex justify-between items-center">
              <p className="text-[16px]">Total:</p>
              <div className="my-6 flex justify-between items-center">
                <span className="c-text-color text-2xl font-bold">
                  ${totalPrice}
                </span>
              </div>
            </div>
            <button
              onClick={proceedToCheckout}
              className="w-full items-center py-2 px-4 c-bg text-white rounded-full c-btn-hover duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <div className="mt-6">
            <p className="text-[16px]">No items in cart</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSection;
