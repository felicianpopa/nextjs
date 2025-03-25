import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
    </>
  );
};

export default Home;
