import React from "react";

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="product-details-layout">
      <h2>Featured Products</h2>
      {/* Children gets the content from page.tsx */}
      {children}
    </div>
  );
};

export default ProductDetailsLayout;
