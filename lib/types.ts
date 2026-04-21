import type { PageId } from "./pages";

export type CarouselImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ChatAction =
  | { type: "navigate"; pageId: PageId; reason?: string }
  | { type: "highlight"; pageId: PageId; sectionId: string };

export type Reference = {
  id: string;
  title: string;
  url: string;
  description: string;
  source: "fasoo" | "sparrow";
  category: string[];
  keywords: string[];
};
