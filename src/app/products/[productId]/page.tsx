import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const { productId } = await params;
  return (
    <div className="product-details-page">
      <h1>Details about product {productId}</h1>
    </div>
  );
};

export default ProductDetails;
