import React from "react";

function SiteLink(props) {
  function handleClick(event) {
    const isExternal = props.href.startsWith("http");
    if (isExternal) {
      event.preventDefault();
      window.open(props.href, "_blank");
    }
  }

  return (
    <a
      href={props.href}
      onClick={handleClick}
      className={`relative font-medium text-primary-base before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-primary-base before:transition hover:before:scale-100 ${
        props.isActive ? "bg-primary-highlight py-2 px-3 font-bold text-gray-900" : ""
      }`}
    >
      {props.children}
    </a>
  );
}

export default SiteLink;
