import Users from "./users";
import { Suspense } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
  } catch (err) {
    console.error(err);
    return []; // Return empty array as fallback
  }
}

export default async function Page() {
  // Don't await the data fetching function - pass the promise directly
  const usersPromise = getUsers();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Users userdData={usersPromise} />
    </Suspense>
  );
}
