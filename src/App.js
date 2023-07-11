import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const closeModal = () => {
    setCartIsShown(false);
  };
  const openModal = () => {
    setCartIsShown(true);
  };
  return (
    <>
      <ToastContainer autoClose={1000} />
      {cartIsShown && <Cart closeModal={closeModal} />}
      <Header openModal={openModal} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
