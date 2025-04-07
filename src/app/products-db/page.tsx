import { getProducts } from "@/prisma-db";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductsDBPage = async () => {
  const products: Product[] = await getProducts();
  return (
    <ul className="space-y-4 p-4">
      {products.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">
            <a href={`/products-db/${product.id}`}>{product.title}</a>
          </h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductsDBPage;
