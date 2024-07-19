import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 lg:h-[5.5rem] w-full p-4 bg-white flex flex-col items-start justify-center gap-3 lg:gap-0 lg:p-6 dark:bg-gray-800 dark:border-gray-600">
      <hr className="w-full bg-black-primary" />
      <div className="w-full flex flex-col items-start justify-center lg:hidden px-5 mt-3">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://repos.openteams.com/" className="hover:underline">
            REPOS
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              href="/privacy-policy"
              className="hover:underline me-4 md:me-6"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full flex items-center justify-between">
        <span className="hidden lg:inline-block lg:text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://repos.openteams.com/" className="hover:underline">
            REPOS
          </a>
          . All Rights Reserved.
        </span>
        <ul className="hidden lg:flex flex-wrap items-center mt-3 lg:text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              href="/privacy-policy"
              className="hover:underline me-4 md:me-6"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
