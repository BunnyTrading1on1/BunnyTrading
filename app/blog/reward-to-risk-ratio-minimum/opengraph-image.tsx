import { ogImageSize as size, ogImageContentType as contentType, renderBlogOgImage } from "@/lib/blogOgImage";

export { size, contentType };

export default function Image() {
  return renderBlogOgImage("Why 1:2 Reward-to-Risk Is a Minimum, Not a Suggestion");
}
