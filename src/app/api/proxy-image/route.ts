import { NextRequest, NextResponse } from "next/server";
import https from "https";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return new NextResponse("Missing url parameter", { status: 400 });
  }

  // Security: only allow proxying from the official nehruportal.nic.in domain
  if (!url.startsWith("https://nehruportal.nic.in/") && !url.startsWith("http://nehruportal.nic.in/")) {
    return new NextResponse("Forbidden target URL", { status: 403 });
  }

  return new Promise<NextResponse>((resolve) => {
    https.get(url, { rejectUnauthorized: false }, (res) => {
      if (res.statusCode !== 200) {
        resolve(new NextResponse(`Failed to fetch image from target: ${res.statusCode}`, { status: res.statusCode || 500 }));
        return;
      }

      const chunks: Buffer[] = [];
      res.on("data", (chunk) => {
        chunks.push(chunk);
      });

      res.on("end", () => {
        const buffer = Buffer.concat(chunks);
        const headers = new Headers();
        headers.set("Content-Type", res.headers["content-type"] || "image/jpeg");
        headers.set("Cache-Control", "public, max-age=86400, must-revalidate");
        resolve(new NextResponse(buffer, { status: 200, headers }));
      });
    }).on("error", (err) => {
      resolve(new NextResponse(`Proxy error: ${err.message}`, { status: 500 }));
    });
  });
}
