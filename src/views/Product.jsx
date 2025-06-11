import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();
  return (
    <div>
      <h1>Product Page</h1>
      <h3>{params.name}</h3>
    </div>
  );
}
