import { useEffect } from "react";
import { fetchProducts } from "../../rtk/slices/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
function Header() {

  const products = useSelector(state => state.products); 

  return (
    <>
      <div className="slider">
        <ol className="breadcrumb breadcrumb-rang"></ol>
        <div className="row">
            <h1>American grocery store and cuisine</h1>
            <p>{products.length} products</p>
        </div>
      </div>
    </>
  );
}

export default Header;
