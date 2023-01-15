import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavLink = ({ className, href, children, passHref }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      passHref={passHref}
      className={`mb-2 rounded-lg text-center text-xl px-5 py-2.5 ${
        router.pathname === href
          ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-none"
          : "text-blue-500 hover:text-blue-800 hover:bg-gray-100"
      }`}
    >
      {children}
    </Link>
  );
};
