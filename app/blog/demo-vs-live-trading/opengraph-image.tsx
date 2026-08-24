import { ogImageSize as size, ogImageContentType as contentType, renderBlogOgImage } from "@/lib/blogOgImage";

export { size, contentType };

export default function Image() {
  return renderBlogOgImage("Demo vs Live: When to Move Real Money Into Gold Trading");
}
