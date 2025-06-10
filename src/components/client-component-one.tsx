"use client";
import { useState } from "react";
import { ClientComponentTwo } from "./client-component-two";
export const ClientComponentOne = ({ children }) => {
  const [name, setName] = useState("Batman");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>
        Client component one <strong>{name}</strong>
      </h1>
      <ClientComponentTwo />
      {children}
    </>
  );
};
