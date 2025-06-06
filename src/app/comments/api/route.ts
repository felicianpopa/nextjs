import { NextRequest } from "next/server";
import { comments } from "../data";

export async function GET(params: NextRequest) {
  const searchParams = params.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}

export async function POST(params: Request) {
  const comment = await params.json();
  const newComment = {
    id: comments.length + 1,
    ...comment,
  };
  comments.push(newComment);
  return Response.json(newComment, { status: 201 });
}
