import { ogImageSize as size, ogImageContentType as contentType, renderBlogOgImage } from "@/lib/blogOgImage";

export { size, contentType };

export default function Image() {
  return renderBlogOgImage("Rules, Not Predictions.");
}
