"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();
  const handleResetError = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={handleResetError}
      >
        Reset Error
      </button>
      <h1 className="text-red-500">{error.message}</h1>
    </>
  );
};

export default ErrorBoundary;
