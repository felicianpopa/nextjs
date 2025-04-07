"use client";

import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

import React from "react";
import ImageSlider from "@/components/ImageSlider";

const ClientRoutePage = () => {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <>
      <ImageSlider />
      <h1 style={{ color: theme.colors.primary }}>Theme </h1>
      <p>{result}</p>
    </>
  );
};

export default ClientRoutePage;
