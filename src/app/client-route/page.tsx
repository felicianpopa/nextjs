"use client";
import { serverSideFunction } from "@/utils/server-utils";
const ClientRoutePage = () => {
  const result = serverSideFunction();
  return (
    <div>
      <h1>Client route</h1>
      <p>Result: {result}</p>
    </div>
  );
};

export default ClientRoutePage;
