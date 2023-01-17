function Divider({ children, ...props }) {
  return (
    <div className="relative py-4">
      <div
        className="absolute inset-0 flex items-center"
        aria-hidden="true"
      >
        <div className="mr-8 w-full border-t border-white" />
      </div>
      <div className="relative flex justify-start">
        <span
          className="bg-blue-500 px-4 pr-3 text-2xl font-bold text-gray-50 md:text-6xl"
          {...props}
        >
          {children}
        </span>
      </div>
    </div>
  );
}

export default Divider;
