export const dynamic = "force-static"; // Ensures the request is cached. ONLY WORKS IN PRODUCTION
export const revalitate = 10; //Revalidates every 10 seconds

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
