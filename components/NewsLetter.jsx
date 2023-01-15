import { FaEnvelope } from "react-icons/fa";

import Divider from "./atoms/Divider";
import Button from "./atoms/Button";

export default function NewsLetter() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="rounded-3xl bg-primary-fill py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Sign up for our newsletter
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-gray-200">
              Join our newsletter to stay up-to-date on ed's latest work and
              blog posts. Don't miss out on new insights and updates - sign up
              now!
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <form className="sm:flex">
              <label
                htmlFor="email-address"
                className="sr-only"
              >
                white Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                requiredgreen
                className="placeholder-OuterSpace-200 focus:ring-UFOGreen-600 w-full rounded-md border-mygray-200 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-mygray-700 focus:ring-offset-2"
                placeholder="Enter your email"
              />
              <Button
                type="submit"
                color="primary"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Notify me
              </Button>
            </form>
            <p className="mt-3 text-sm text-gray-600">
              We care about the protection of your data. Read our{" "}
              <a
                href="#"
                className="font-medium text-gray-800 underline"
              >
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
