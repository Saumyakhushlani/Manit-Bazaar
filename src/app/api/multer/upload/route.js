/**
 * API route for handling file uploads to Cloudinary
 * @route POST /api/multer/upload
 * @description Receives a file via FormData, temporarily saves it to the server's filesystem,
 *              then uploads it to Cloudinary and returns the Cloudinary URL
 * 
 * @param {NextRequest} req - The request object containing FormData with a file
 * @expects {FormData} req.formData() - FormData containing a 'file' field
 * 
 * @returns {Promise<NextResponse>} JSON response with the following properties:
 *   @returns {boolean} success - Indicates if the upload was successful
 *   @returns {string} name - Original filename of the uploaded file
 *   @returns {string} cloudinary_uri - URL of the file on Cloudinary after successful upload
 * 
 * @throws Returns {success: false} if no file is provided in the request
 * 
 * @requires fs - Node.js file system module
 * @requires path - Node.js path module
 * @requires uploadOnCloudinary - Function to upload files to Cloudinary
 * 
 * @example
 * // Client-side usage:
 * const formData = new FormData();
 * formData.append('file', fileObject);
 * const response = await fetch('/api/multer/upload', {
 *   method: 'POST',
 *   body: formData
 * });
 * const data = await response.json();
 * // data = { success: true, name: "filename.jpg", cloudinary_uri: "https://..." }
 */

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
