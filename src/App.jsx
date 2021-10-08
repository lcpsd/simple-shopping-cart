import { Home } from "./components/Home";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Home/>
    </CartContextProvider>
  );
}

export default App;
