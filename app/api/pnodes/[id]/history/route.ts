import { NextResponse } from "next/server";
import { fetchPnodeHistory } from "@/lib/data-service";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params }: Params) {
  const history = await fetchPnodeHistory(params.id);
  return NextResponse.json({ history });
}
