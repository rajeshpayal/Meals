import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

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
      {cartIsShown && <Cart closeModal={closeModal} />}
      <Header openModal={openModal} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
