import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCom = (props) => {
  const navigate = useNavigate();

  const handleButton = (id) => {
    console.log("buttonName");
    console.log("View details for product:", id);
    props.action == "goBack"
      ? navigate("/products")
      : navigate(`/product/${id}`);
  };
  return (
    <div id="singleProduct" className="product flex mt-10 border">
      <div>
        <img className="  w-1/2" src={props.product?.image} />
        <h3 className=" mx-auto text-2xl">{props.product?.title}</h3>
      </div>

      <div className=" flex  flex-col justify-around">
        <h3>{props.product?.description}</h3>
        <h3>{props.product?.price} rs</h3>
        <button
          onClick={() => {
            handleButton(props.product?.id);
          }}
          className=" bg-blue-400 w-fit px-8 py-2 mx-auto "
        >
          {props.action == "goBack" ? " Back" : "view Details"}
        </button>
      </div>
    </div>
  );
};

export default ProductCom;
