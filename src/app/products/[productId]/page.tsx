type Props = {
  params: Promise<{ productId: string }>;
};

import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product ${productId}`,
    description: `Details about product ${productId}`,
  };
};

const ProductDetails = async ({ params }: Props) => {
  const { productId } = await params;
  return (
    <div className="product-details-page">
      <h1>Details about product {productId}</h1>
    </div>
  );
};

export default ProductDetails;
