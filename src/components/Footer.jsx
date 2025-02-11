import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-300 py-12  border-t border-gray-500 ">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col gap-5 text-center">
          <h1
            className="text-3xl text-white font-bold mb-5"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            Djamel Ramdani
          </h1>

          <div className="mb-6">
           
            <Link href="https://www.facebook.com/djamel.ramdani.9250" className="text-gray-300 hover:text-white mx-3">
              Facebook |
            </Link>
            <a href="#" className="text-gray-300 hover:text-white mx-3">
              Instagram
            </a>
          </div>

          <div className="mb-6 text-sm">
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <p>
                Created by{" "}
                <span className="font-semibold text-[#CCAC86]">
                  Adel RAMDANI
                </span>
              </p>
              <span>|</span>
              <p>
                Powered by{" "}
                <span className="font-semibold text-[#CCAC86]">
                  Adel RAMDANI
                </span>
              </p>
              <span>|</span>
              <p>Licenses</p>
              <span>|</span>
              <p>Style Guide</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
