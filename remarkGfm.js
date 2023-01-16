const remarkGfm = require("remark-gfm");
const createMDX = require("@next/mdx");

/** @type {import('next').NextConfig} */
const remarkGfmConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

module.exports = withMDX(remarkGfmConfig);
