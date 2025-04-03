import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === Number(id));
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = await params;
  const { text } = await request.json();
  const index = comments.findIndex((comment) => comment.id === Number(id));
  comments[index].text = text;
  return Response.json(comments[index]);
}
