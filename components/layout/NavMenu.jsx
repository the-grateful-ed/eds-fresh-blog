import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavLink = ({ className, href, children, passHref }) => {
  const router = useRouter()
  return (
    <Link
      href={href}
      passHref={passHref}
      className={`mb-2 rounded-lg px-5 py-2.5 text-center text-xl ${
        router.pathname === href
          ? 'focus:ring-none bg-gradient-to-r from-blue-500 via-blue-600  to-blue-700 text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none'
          : 'text-blue-500 hover:bg-gray-100 hover:text-blue-800'
      }`}
    >
      {children}
    </Link>
  )
}
