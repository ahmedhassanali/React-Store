import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/slices/ProductsSlice";
import "./Products.css";

function Products() {
      const products = useSelector(state => state.products);
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchProducts());
      }, []);


  return (
    <>
        <div className="container-fluid">
      <div className="row ">
        {products.map((product) => (
          <div className="col-md-3 col-lg-2" key={product.id}>
            <div className="card border-0">
              <img className="card-img-top" src={product.image} alt="" />
              <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <p className="card-text">{product.description}</p>
                <div className="card-badge">{product.weight}g</div>
                <div className="card-badge">{product.quantity} pieces</div>
                <div className="card-btn">
                  <p className="">In drive or delivery</p>
                  <a href="/" className="btn btn-light">
                    Show Price
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    </>
  );
}

export default Products;
