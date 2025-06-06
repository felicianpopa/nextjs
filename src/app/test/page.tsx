async function getTodos(): Promise<Comment[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
}

export default async function TestPage() {
  const todos = await getTodos();
  console.warn("got todos ", todos);
  return <h1>Test page</h1>;
}
