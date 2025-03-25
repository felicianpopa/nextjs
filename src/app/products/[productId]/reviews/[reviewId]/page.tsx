import React from "react";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
const ProductReview = async ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }

  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        You are visiting product {productId}, review {reviewId}
      </h1>
    </div>
  );
};

export default ProductReview;
