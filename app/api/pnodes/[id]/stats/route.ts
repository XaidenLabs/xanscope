import { NextResponse } from "next/server";
import { fetchPnodeStats } from "@/lib/data-service";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params }: Params) {
  const stats = await fetchPnodeStats(params.id);
  return NextResponse.json({ stats });
}
