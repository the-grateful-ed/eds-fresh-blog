import { forwardRef } from "react";

const Button = forwardRef(({ color, className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={`${style.default} ${style.color[color]} ${className}`}
    {...props}
  >
    {children}
  </button>
));

const style = {
  default: `focus:outline-none text-center shadow-lg rounded-lg px-6 py-2 font-medium transition ease-in duration-200 focus:ring-4`,
  color: {
    gradient: `bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-blue-500/50 hover:bg-gradient-to-br focus:ring-blue-300`,
    primary: `bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:ring-offset-blue-100 text-white`,
    success: `bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:ring-offset-green-100 text-gray-300`,
    danger: `bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-red-100 text-white`,
    dark: `bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-100 text-white`,
    warning: `bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-yellow-100`,
    indigo: `bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 focus:ring-offset-indigo-100`,
  },
};

export default Button;
