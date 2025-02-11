"use client";

import axios from "axios";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/features/user/userSlice";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const isActive = (href) => pathname === href;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3001/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          dispatch(login(response.data));
        })
        .catch((err) => {
          console.error("Error fetching user data:", err);
        });
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    dispatch(logout()); 
    router.push("/"); 
  };

  return (
    <header className="sticky top-0 z-50 bg-[#181818]">
      <nav className="max-w-screen-xl mx-auto px-5 py-6 bg-[#181818]">
        <div className="flex justify-between items-center bg-[#181818]">
          <Link href="/">
            <img width="150px" src="/aperture.png" alt="" />
          </Link>
          <ul className="flex gap-5 text-lg">
            <li>
              <Link
                href="/gallery"
                className={`relative group transition duration-300 tracking-widest ${
                  isActive("/gallery") ? "text-[#CCAC86]" : "text-white"
                } hover:text-[#CCAC86]`}
              >
                Gallerie |
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
                A propos |
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
                Contact |
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
                Outils |
                <span
                  className={`absolute left-0 bottom-0 h-[2px] ${
                    isActive("/outils") ? "w-full" : "w-0"
                  } bg-[#CCAC86] group-hover:w-full transition-all duration-300`}
                ></span>
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    href="/add-photo"
                    className={`relative group transition duration-300 tracking-widest ${
                      isActive("/add-photo") ? "text-[#CCAC86]" : "text-white"
                    } hover:text-[#CCAC86]`}
                  >
                    Ajouter photo |
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] ${
                        isActive("/add-photo") ? "w-full" : "w-0"
                      } bg-[#CCAC86] group-hover:w-full transition-all duration-300`}
                    ></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin"
                    className={`relative group transition duration-300 tracking-widest ${
                      isActive("/admin") ? "text-[#CCAC86]" : "text-white"
                    } hover:text-[#CCAC86]`}
                  >
                   Voir les messages |
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] ${
                        isActive("/admin") ? "w-full" : "w-0"
                      } bg-[#CCAC86] group-hover:w-full transition-all duration-300`}
                    ></span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className={`relative group transition duration-300 tracking-widest ${
                      isActive("/logout") ? "text-[#CCAC86]" : "text-white"
                    } hover:text-[#CCAC86]`}
                  >
                    Se déconnecter
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] ${
                        isActive("/logout") ? "w-full" : "w-0"
                      } bg-[#CCAC86] group-hover:w-full transition-all duration-300`}
                    ></span>
                  </button>
                </li>
              </>
            ) : (
              <div></div>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}