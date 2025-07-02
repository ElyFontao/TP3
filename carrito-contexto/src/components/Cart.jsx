import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between bg-white p-4 rounded shadow items-center">
              <div>
                {item.name} - ${item.price} x {item.quantity}
              </div>
              <div className="space-x-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-gray-300 rounded">-</button>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-300 rounded">+</button>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3 className="mt-4 text-lg font-bold">Total: ${totalPrice}</h3>
    </div>
  );
}