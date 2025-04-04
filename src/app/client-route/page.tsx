"use client";

import { useTheme } from "@/components/theme-provider";

import React from "react";
import ImageSlider from "@/components/ImageSlider";

const ClientRoutePage = () => {
  const theme = useTheme();
  return (
    <>
      <ImageSlider />
      <h1 style={{ color: theme.colors.primary }}>Theme </h1>
    </>
  );
};

export default ClientRoutePage;
