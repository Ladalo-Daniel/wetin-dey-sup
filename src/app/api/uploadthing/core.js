import { createUploadthing } from "uploadthing/next";
const f = createUploadthing();

export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  ProfileImage: f({ image: { maxFileSize: "1MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log("file url", file.url);
    }
  ),
  eventImage: f({ image: { maxFileSize: "2MB" } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log("file url", file.url);
    }
  ),
//   pdfUploader: f({ pdf: { maxFileSize: "4MB" } }).onUploadComplete(
//     async ({ metadata, file }) => {
//       console.log("file url", file.url);
//     }
//   ),
//   videoUploader: f({ video: { maxFileSize: "4MB" } }).onUploadComplete(
//     async ({ metadata, file }) => {
//       console.log("file url", file.url);
//     }
//   ),
};







