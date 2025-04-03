import { headers, cookies } from "next/headers";

export async function GET() {
  const headerList = await headers();
  console.warn(headerList.get("Authorization"));

  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "20");

  console.warn("cookies ", cookieStore.get("theme"));
  return new Response(
    "<h1>Profile API! stored in /api not to override the page.tsx</h1>",
    {
      headers: {
        "Content-Type": "text/html",
        "Set-Cookie": "theme=dark",
      },
    }
  );
}
