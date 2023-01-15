import React from "react";
import ArticleCard from "./ArticleCard";
import { allArticles } from "contentlayer/generated";
import Divider from "../../components/atoms/Divider";

const BlogIndex = () => {
  const firstArticle = allArticles[0];
  const otherArticles = allArticles.slice(1);

  return (
    <section className="rounded-t-xl bg-blue-500 text-gray-800">
      <div className="container mx-auto max-w-6xl space-y-6 p-6 sm:space-y-12">
        <Divider>Blog</Divider>
        <a
          rel="noopener noreferrer"
          href="#"
          className="group mx-auto block max-w-sm gap-3 overflow-hidden rounded-xl bg-white hover:no-underline focus:no-underline sm:max-w-full lg:grid lg:grid-cols-12"
        >
          <img
            src={firstArticle.image}
            alt=""
            className="h-64 w-full overflow-hidden rounded-l-xl bg-gray-500 object-cover sm:h-96 lg:col-span-7"
          />
          <div className="space-y-2 bg-white p-6 lg:col-span-5">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline sm:text-4xl">
              {firstArticle.title}
            </h3>
            <span className="text-xs text-gray-600">
              {firstArticle.publishedAt}
            </span>
            <p>{firstArticle.description}</p>
          </div>
        </a>
        <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherArticles.map(
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
        <div className="flex justify-center">
          <button
            type="button"
            className="rounded-md bg-gray-50 px-6 py-3 text-sm text-gray-600 hover:underline"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogIndex;
