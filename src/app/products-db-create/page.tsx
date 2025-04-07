"use client";
import Submit from "@/components/submit";
import { useActionState } from "react";
import { FormState, createProduct } from "@/actions/products";

const AddProductPage = () => {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <label className="text-black">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
        />
      </label>
      {state.errors.title && <p>{state.errors.title}</p>}
      <label className="text-black">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          name="price"
        />
      </label>
      {state.errors.price && <p>{state.errors.price}</p>}
      <label className="text-black">
        Description
        <textarea
          className="block w-full p-2 text-black border rounded"
          name="description"
        />
      </label>
      {state.errors.description && <p>{state.errors.description}</p>}
      <Submit />
    </form>
  );
};

export default AddProductPage;
