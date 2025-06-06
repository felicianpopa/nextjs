"use client";

import { useState } from "react";

interface Comment {
  id: number;
  text: string;
}

interface AddCommentFormProps {
  onCommentAdded: (comment: Comment) => void;
}

async function addComment(text: string): Promise<Comment> {
  const res = await fetch("/comments/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    throw new Error("Failed to add comment");
  }

  return res.json();
}

export default function AddCommentForm({
  onCommentAdded,
}: AddCommentFormProps) {
  const [newComment, setNewComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setSubmitting(true);
    setError(null);

    try {
      const comment = await addComment(newComment);
      onCommentAdded(comment);
      setNewComment("");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
      console.error("Error adding comment:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Add a Comment</h2>

      {error && (
        <div
          style={{
            color: "red",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ff6b6b",
            borderRadius: "5px",
            backgroundColor: "#ffe0e0",
          }}
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Enter your comment..."
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "300px",
              marginRight: "10px",
            }}
            disabled={submitting}
          />
          <button
            type="submit"
            disabled={submitting || !newComment.trim()}
            style={{
              padding: "10px 15px",
              backgroundColor: submitting ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: submitting ? "not-allowed" : "pointer",
            }}
          >
            {submitting ? "Adding..." : "Add Comment"}
          </button>
        </div>
      </form>
    </div>
  );
}
