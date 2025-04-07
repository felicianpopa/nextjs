import "client-only";

export const clientSideFunction = () => {
  console.warn("use window object, use localStorage");
  return "client result";
};
