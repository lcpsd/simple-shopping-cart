import { Home } from "./components/Home";
import { CartContextProvider } from "./context/CartContext";
import '../src/styles/global.scss'

function App() {
  return (
    <CartContextProvider>
      <Home/>
    </CartContextProvider>
  );
}

export default App;
