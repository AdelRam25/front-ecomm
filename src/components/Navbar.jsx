"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Get the current route

  // Function to determine if a link is active
  const isActive = (href) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-[#181818]">
      <nav className="max-w-screen-xl mx-auto px-5 py-6 bg-[#181818]">
        <div className="flex justify-between items-center bg-[#181818]">
          <Link href="/">
            <img width="150px" src="/aperture.png" alt="" />
          </Link>
          <ul className="flex gap-6 text-lg">
            <li>
              <Link
                href="/gallery"
                className={`relative group transition duration-300 tracking-widest ${
                  isActive("/gallery") ? "text-[#CCAC86]" : "text-white"
                } hover:text-[#CCAC86]`}
              >
                Gallerie
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive("/gallery") ? "w-full" : "w-0"
                  } bg-[#CCAC86] group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`relative group transition duration-300 tracking-widest ${
                  isActive("/about") ? "text-[#CCAC86]" : "text-white"
                } hover:text-[#CCAC86]`}
              >
                A propos
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive("/about") ? "w-full" : "w-0"
                  } bg-[#CCAC86] group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`relative group transition duration-300 tracking-widest ${
                  isActive("/contact") ? "text-[#CCAC86]" : "text-white"
                } hover:text-[#CCAC86]`}
              >
                Contact
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive("/contact") ? "w-full" : "w-0"
                  } bg-[#CCAC86] group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            </li>
            <li>
              <Link
                href="/outils"
                className={`relative group transition duration-300 tracking-widest ${
                  isActive("/outils") ? "text-[#CCAC86]" : "text-white"
                } hover:text-[#CCAC86]`}
              >
                Outils
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive("/outils") ? "w-full" : "w-0"
                  } bg-[#CCAC86] group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
