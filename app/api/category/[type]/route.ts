import { getAllCategoryByType, ICategory } from "@/lib/categoryService";
import { Type } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

async function GET(req:NextRequest,{ params }: { params: { type: string } }) {
  try {
    const type = params.type;
    let categories: ICategory[] = [];

    switch (type) {
      case "ARTICLE": {
        categories = await getAllCategoryByType(Type.ARTICLE);
        break;
      }
      case "PROJECT": {
        categories = await getAllCategoryByType(Type.PROJECT);
        break;
      }
      default: {
        break;
      }
    }
    if (categories.length==0) {
      return NextResponse.json({ message: "Not found" }, { status: 401 });
    }
    return NextResponse.json({ message: "success", data: categories });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
