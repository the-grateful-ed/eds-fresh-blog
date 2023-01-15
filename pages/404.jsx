import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center"></div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-base font-semibold text-blue-600">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn&#39;t find the page you&#39;re looking for.
              </p>
              <div className="mt-6">
                <Link
                  href="/"
                  className="text-base font-medium text-blue-600 hover:text-blue-500"
                >
                  👷‍♀️ 🚧 Go back home 🚧 👷
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <a
              href="mailto:edndacomputer@riseup.net"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Email
            </a>
            <span
              className="inline-block border-l border-gray-300"
              aria-hidden="true"
            />
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Contact
            </Link>
            <span
              className="inline-block border-l border-gray-300"
              aria-hidden="true"
            />
            <a
              href="https://www.twitter.com/edndacomputer"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Twitter
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}
