import React from "react";
import ImageSlider from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

const ServerRoutePage = () => {
  const result = serverSideFunction();
  return (
    <>
      <ImageSlider />
      <p>Result: {result}</p>
    </>
  );
};

export default ServerRoutePage;
