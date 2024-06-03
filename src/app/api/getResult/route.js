import { NextResponse } from "next/server";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const result = searchParams.get("result");

  console.log("Request received for result:", result);

  if (!result) {
    console.log("Missing result parameter");
    return NextResponse.json(
      { error: "Missing result parameter" },
      { status: 400 }
    );
  }

  const directoryPath = path.join(process.cwd(), "src", "personalityTypes");
  const filePath = path.join(directoryPath, `${result}.md`);

  console.log("Looking for directory at:", directoryPath);
  console.log("Looking for file at:", filePath);

  const directoryExists = fs.existsSync(directoryPath);
  console.log("Directory exists:", directoryExists);

  const fileExists = fs.existsSync(filePath);
  console.log("File exists:", fileExists);

  if (!fileExists) {
    console.log("File not found:", filePath);
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  console.log("File found. Reading file...");
  const source = fs.readFileSync(filePath, "utf8");
  try {
    console.log("Serializing content...");
    const mdxSource = await serialize(source);
    return NextResponse.json({ mdxSource }, { status: 200 });
  } catch (error) {
    console.error("Error serializing MDX content:", error);
    return NextResponse.json(
      { error: "Failed to serialize MDX content" },
      { status: 500 }
    );
  }
}
