import Link from "next/link";
import { useRouter } from "next/router";
import { NavLink } from "./NavMenu";
import { FaBars } from "react-icons/fa";

const pages = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 sm:px-4">
      <div className="mx-auto flex flex-wrap items-center justify-between">
        <a
          href="/"
          className="flex items-center"
        >
          <div className="rotate-[-4deg] bg-blue-500 py-4 px-3 shadow-xl">
            <h1 className="rotate-[4deg] text-5xl font-extrabold tracking-tighter text-white">
              edndacomputer
            </h1>
          </div>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <FaBars />
        </button>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="">
            <nav className="rounded-lg0 mt-4 flex flex-col p-4 sm:flex-row md:mt-0 md:space-x-1 md:border-0 md:bg-white">
              {pages.map((page) => (
                <NavLink
                  href={page.href}
                  key={page.title}
                >
                  {page.name}
                </NavLink>
              ))}
            </nav>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
