"use client";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

import { use } from "react";

export default function Users({ userdData }: { userdData: Promise<User[]> }) {
  const users = use(userdData);

  console.warn("type");

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <div className="font-bold">{user.name}</div>
          <div className="text-sm">
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
