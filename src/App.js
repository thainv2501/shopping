import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { productsActions } from "./reducers/productsSlice";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Nav from "./components/Nav/Nav";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const fetchProducts = async () => {
    const respond = await fetch("https://dummyjson.com/products");
    const data = await respond.json();
    console.log(data.products);
    dispatch(productsActions.addToProducts(data.products));
  };
  useEffect(() => {
    fetchProducts();
    return () => {
      console.log("function clear was run , now run effect");
    };
  }, []);
  return (
    <div className="App">
      <Nav></Nav>
      <Products></Products>
      {showCart && <Cart></Cart>}
    </div>
  );
}

export default App;
