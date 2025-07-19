import { NextResponse, NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import { uploadOnCloudinary } from "@/cloudinary/config";

const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? "", "public/uploads");

export async function POST(req) {
  const formData = await req.formData();
  const body = Object.fromEntries(formData);
  const file = body.file || null;

  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    if (!fs.existsSync(UPLOAD_DIR)) {
      fs.mkdirSync(UPLOAD_DIR);
    }

    fs.writeFileSync(path.resolve(UPLOAD_DIR, `${body.file.name}`), buffer);
  } else {
    return NextResponse.json({ success: false });
  }

  const imageUri = await uploadOnCloudinary(`public/uploads/${body.file.name}`);

//   console.log(imageUri);

  return NextResponse.json({
    success: true,
    name: `${body.file.name}`,
    cloudinary_uri: imageUri.url,
  });
}
