
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ThemeButton from './components/ThemeButton';

function App() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">🛒 Carrito de Compras</h1>
      <ThemeButton />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
