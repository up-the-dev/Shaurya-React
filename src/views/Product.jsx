import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCom from "../components/ProductCom";

export default function Product() {
  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      <ProductCom product={product} action="goBack" />
    </div>
  );
}
