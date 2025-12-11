import { NextResponse } from "next/server";
import { fetchFsTree } from "@/lib/data-service";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params }: Params) {
  const tree = await fetchFsTree(params.id);
  return NextResponse.json({ tree });
}
