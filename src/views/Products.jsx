import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("component mounted( started)");

    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h1 className=" text-3xl">Product list</h1>

      <div id="productlist">
        {products.map((product) => {
          return (
            <div className="product flex mt-10 border">
              <div>
                <img className="  w-1/2" src={product?.image} />
                <h3 className=" mx-auto text-2xl">{product?.title}</h3>
              </div>

              <div className=" flex  flex-col justify-around">
                <h3>{product?.description}</h3>
                <h3>{product?.price} rs</h3>
                <button className=" bg-blue-400 w-fit px-8 py-2 mx-auto ">
                  view detail
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
