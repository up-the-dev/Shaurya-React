import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCom from "../components/ProductCom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("component mounted( started)");

    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className=" text-3xl">Product list</h1>
      {loading && <h1 className=" text-2xl">Loading...</h1>}
      {!loading && (
        <div id="productlist">
          {products.map((product) => {
            return <ProductCom product={product} buttonName="view Detail" />;
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
