import { Home } from "./components/Home";
import { CartContext } from "./context/CartContext";

function App() {
  return (
    <CartContext>
      <Home/>
    </CartContext>
  );
}

export default App;
