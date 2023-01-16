import Image from 'next/image'
import Comments from '../../pages/blog/comments'

export const SingleArticle = ({ author, image, category, title, children }) => {
  return (
    <div className="px-4 pt-16 pb-8">
      <div className="mx-auto max-w-prose">
        <div className="flex justify-center">
          <span className="rounded-lg border-2 border-blue-200 bg-blue-500 px-2.5 py-0.5 text-sm font-medium text-blue-200">
            {category}
          </span>
        </div>
        <h1 className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <br />
        <img
          className="w-full object-cover object-center md:h-36 lg:h-48"
          src={image}
          width={720}
          height={400}
          alt="blog"
        />
        <hr />
        <br />
<<<<<<< HEAD
        <div className="flex items-center">
          <img src={author.image} width={50} height={50} alt="blog" />
=======
        <div className="flex items-center space-x-2">
          <Image src={author.image} width={50} height={50} alt="blog" />
>>>>>>> 9b3840b (✨ feat: next.congif.js update)

          <div className="">
            <strong>{author.name}</strong>
            <br />
<<<<<<< HEAD
            <span>Digital Genius</span>
=======
            <span>Technical Genius</span>
>>>>>>> 9b3840b (✨ feat: next.congif.js update)
          </div>
        </div>
        <article className="prose-md prose prose-blue mx-auto py-24 text-gray-500 lg:prose-lg">
          {children}
        </article>
      </div>
    </div>
  )
}
