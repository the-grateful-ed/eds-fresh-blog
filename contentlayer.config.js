import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";
import { remarkCodeHike } from "@code-hike/mdx";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const theme = require("shiki/themes/dark-plus.json");

const Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    image: { type: "string", required: true },
  },
}));

const computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};


const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "articles/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string", required: true },
    seoDescription: { type: "string", required: true },
    category: { type: "string", required: true },
    author: {
      type: "nested",
      of: Author,
    },
    image: { type: "string", required: true },
  },
  computedFields,
}));


const contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Article],

  mdx: { remarkPlugins: [[remarkCodeHike, { theme }]] },
});

export default contentLayerConfig;
