"use client";

import React, { useState } from "react";
import { RiMenuFoldLine } from "react-icons/ri";

const navItems = [
  { title: "Home", href: "#" },
  { title: "About Me", href: "#about-me" },
  { title: "Projects", href: "#projects" },
  { title: "Work Experience", href: "#work-experience" },
  { title: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [active, setActive] = useState(false);
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="relative">
      <div className="switch !absolute right-2 top-2">
        <input
          type="checkbox"
          className="switch__input"
          id="switch"
          onClick={() => darkModeHandler()}
          defaultChecked={dark}
        />
        <label className="switch__label" htmlFor="switch">
          <span className="switch__decoration"></span>
          <span className="switch__indicator"></span>
        </label>
      </div>
      {/* <button
        className={`bg-white dark:bg-gray-800 rounded-full fixed z-10 ${
          active && "hidden"
        }`}
        onClick={() => setActive(!active)}
      >
        <RiMenuFold2Line
          size={32}
          className="text-black dark:text-white p-1 rounded-full"
        />
      </button> */}

      <div
        id="nav"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 -2 :rounded-full :bg-gray-100 :bg-gray-300 dark:bg-gray-700/35 dark:border-gray-700"
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
        style={{
          translate: active ? "0" : "-100%",
        }}
      >
        <div className="px-6">
          <button
            className={`dark:bg-gray-800 rounded-full`}
            onClick={() => setActive(!active)}
          >
            <RiMenuFoldLine
              size={32}
              className="text-black dark:text-white p-1 rounded-full"
            />
          </button>
        </div>
        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
          <ul className="space-y-1.5">
            {navItems.map((item) => (
              <li key={item.title}>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:bg-gray-800/35 dark:text-white"
                  href={item.href}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
