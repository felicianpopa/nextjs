import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === Number(id));
  return Response.json(comment);
}
