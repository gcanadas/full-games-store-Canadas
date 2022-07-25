import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';
import Products from './pages/Products';
import DetailPage from './pages/DetailPage';
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="category/consoles" element={<Products category={'Consolas'} />} />
            <Route path="category/games" element={<Products category={'Juegos'} />} />
            <Route path="category/accessories" element={<Products category={'Accesorios'} />} />
            <Route path="category/giftcards" element={<Products category={'Gift Cards'} />} />
            <Route path="product/:id" element={<DetailPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
