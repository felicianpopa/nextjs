import CommentsWrapper from "./CommentsWrapper";

interface Comment {
  id: number;
  text: string;
}

async function getComments(): Promise<Comment[]> {
  const res = await fetch("http://localhost:3000/comments/api", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }

  console.warn("got comments ", res);

  return res.json();
}

export default async function CommentsPage() {
  const commentsList = await getComments();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Comments Page</h1>
      <CommentsWrapper initialComments={commentsList} />
    </div>
  );
}
