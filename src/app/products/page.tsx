import Link from "next/link";

const Products = () => {
  const prodctId = 100;
  return (
    <div>
      <h1>Products list</h1>
      <ul>
        <li>
          <Link href="/products/1">Product 1</Link>
        </li>
        <li>
          <Link href="/products/2" replace>
            Product 2 with override history
          </Link>
        </li>
        <li>
          <Link href={`/products/${prodctId}`}>Product {prodctId}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
