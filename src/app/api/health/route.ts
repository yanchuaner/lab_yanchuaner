export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({ status: "ok", service: "yanzhong-lab" }, { headers: { "Cache-Control": "no-store" } });
}
