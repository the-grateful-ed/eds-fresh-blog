import { allArticles } from 'contentlayer/generated'
import { NextSeo } from 'next-seo'
import { SingleArticle } from '../../components/molecules/SingleArticle'
import { useMDXComponent } from 'next-contentlayer/hooks'

const SinglePost = ({ article }) => {
  const MDXContent = useMDXComponent(article.body.code)

  return (
    <>
      <NextSeo title={article.title} description={article.seoDescription} />

      <SingleArticle
        image={article.image}
        title={article.title}
        category={article.category}
        author={article.author}
      >
        <MDXContent />
      </SingleArticle>
    </>
  )
}
export default SinglePost

export async function getStaticPaths() {
  return {
    paths: allArticles.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const article = allArticles.find((article) => article.slug === params.slug)

  return { props: { article } }
}
