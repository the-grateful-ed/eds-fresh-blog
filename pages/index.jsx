import Head from "next/head";
import ArticleCard from "./blog/ArticleCard";
import { allArticles } from "contentlayer/generated";
import { select } from "../utils/select";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";
import Divider from "components/atoms/Divider";
import Button from "../components/atoms/Button";

export default function Home({ articles }) {
  return (
    <div className="bg-white ">
      <Head>
        <title>edndacomputer | Welcome!</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Hero />
      <main className="bg-gradient-to-b from-blue-500 via-blue-500 to-white py-12">
        <div className="container mx-auto max-w-6xl space-y-6 p-6 sm:space-y-12">
          <Divider>Blog</Divider>
          <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map(
              ({
                title,
                description,
                slug,
                image,
                category,
                publishedAt,
                readingTime,
              }) => (
                <ArticleCard
                  key={slug}
                  title={title}
                  description={description}
                  slug={slug}
                  image={image}
                  category={category}
                  dateTime={publishedAt}
                  date={publishedAt}
                  readingTime={readingTime.text}
                />
              )
            )}
          </div>
          {articles.length > 3 && (
            <div className="mt-4 flex justify-center">
              <Button
                href="/posts"
                color="primary"
              >
                More Posts
              </Button>
            </div>
          )}
        </div>
      </main>
      <NewsLetter />
    </div>
  );
}

export function getStaticProps() {
  const articles = allArticles
    .map((article) =>
      select(article, [
        "slug",
        "title",
        "description",
        "publishedAt",
        "readingTime",
        "author",
        "category",
        "image",
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { articles } };
}
