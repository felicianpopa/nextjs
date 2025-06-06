import CommentsWrapper from "./CommentsWrapper";

interface Comment {
  id: number;
  text: string;
}

async function getComments(): Promise<Comment[]> {
  // Dynamic URL construction that works with any port
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const host = process.env.VERCEL_URL || "localhost";
  const port = process.env.PORT || "3000";

  // In development, include port; in production, don't
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? `${protocol}://${host}:${port}`
      : `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/comments/api`, {
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
