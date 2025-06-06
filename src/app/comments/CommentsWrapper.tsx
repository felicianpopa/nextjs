"use client";

import { useState } from "react";
import AddCommentForm from "./AddCommentForm";

interface Comment {
  id: number;
  text: string;
}

interface CommentsWrapperProps {
  initialComments: Comment[];
}

export default function CommentsWrapper({
  initialComments,
}: CommentsWrapperProps) {
  const [commentsList, setCommentsList] = useState<Comment[]>(initialComments);

  const handleCommentAdded = (newComment: Comment) => {
    setCommentsList((prev) => [...prev, newComment]);
  };

  return (
    <div>
      <AddCommentForm onCommentAdded={handleCommentAdded} />

      {/* Comments List */}
      <div>
        <h2>Comments ({commentsList.length})</h2>
        {commentsList.map((comment) => (
          <div
            key={comment.id}
            className="comment"
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <p>
              <strong>Comment #{comment.id}:</strong> {comment.text}
            </p>
          </div>
        ))}

        {commentsList.length === 0 && (
          <p style={{ color: "#666", fontStyle: "italic" }}>
            No comments yet. Be the first to add one!
          </p>
        )}
      </div>
    </div>
  );
}
