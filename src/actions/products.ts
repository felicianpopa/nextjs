"use server";

import { addProduct, updateProduct, deleteProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

export const createProduct = async (
  prevState: FormState,
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }
  if (!price) {
    errors.price = "price is required";
  }
  if (!description) {
    errors.description = "description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  await addProduct(title, parseInt(price), description);
  redirect("/products-db");
};

export const editProduct = async (
  id: number,
  prevState: FormState,
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const errors: Errors = {};

  if (!title) {
    errors.title = "Title is required";
  }
  if (!price) {
    errors.price = "price is required";
  }
  if (!description) {
    errors.description = "description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  await updateProduct(id, title, parseInt(price), description);
  redirect("/products-db");
};

export async function removeProduct(id: number) {
  await deleteProduct(id);
  revalidatePath("/products-db");
}
