import React from 'react';

const ProductReview = async ({ params }: { params: { productId: string; reviewId: string } }) => {
    const { productId, reviewId } = await params;

    return (
        <div>
            <h1>You are visiting product {productId}, review {reviewId}</h1>
        </div>
    );
};

export default ProductReview;
