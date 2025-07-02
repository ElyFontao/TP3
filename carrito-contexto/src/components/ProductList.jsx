import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Computadora portátil", price: 1000 },
  { id: 2, name: "Auriculares", price: 200 },
  { id: 3, name: "Ratón", price: 50 },
];

export default function ProductList() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Productos</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="flex justify-between bg-white p-4 rounded shadow">
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Agregar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}