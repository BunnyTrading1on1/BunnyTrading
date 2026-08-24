import { ogImageSize as size, ogImageContentType as contentType, renderBlogOgImage } from "@/lib/blogOgImage";

export { size, contentType };

export default function Image() {
  return renderBlogOgImage("Revenge Trading: The Pattern I Catch Most in Reviews");
}
