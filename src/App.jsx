import { Suspense, useMemo, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./components/home/HomePage";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

const fetchData = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

function App() {
  const productsPromise = useMemo(() => fetchData(), []);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    toast.success("Product added to cart");
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.success("Product removed from cart");
  };
  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared");
  };
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const cartCount = cartItems.length;
  const proceedToCheckout = () => {
    clearCart();
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Suspense
        fallback={
          <div className="min-h-screen pt-15 flex justify-center items-center">
            <span className="loading loading-ring loading-xl"></span>
          </div>
        }
      >
        <HomePage
          productsPromise={productsPromise}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          totalPrice={totalPrice}
          cartCount={cartCount}
          proceedToCheckout={proceedToCheckout}
          cartItems={cartItems}
        />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
