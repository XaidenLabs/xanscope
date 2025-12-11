import { NextResponse } from "next/server";
import { fetchFsOperations } from "@/lib/data-service";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params }: Params) {
  const operations = await fetchFsOperations(params.id);
  return NextResponse.json({ operations });
}
