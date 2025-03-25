"use client";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handlePlaceOrder = () => {
    console.warn("Placing order");
    router.push("/");
  };
  return (
    <div>
      <button onClick={handlePlaceOrder}>Place order</button>
    </div>
  );
};

export default OrderProduct;
