import { CartProvider } from "../context/CartContext";
import CardData from "../components/EyeData";

function Cart() {
  return (
    <CartProvider>
      <CardData />
    </CartProvider>
  );
}

export default Cart;
