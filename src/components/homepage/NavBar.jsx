"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  const routes = [
    { name: "Home", path: "/" },
    { name: "Items", path: "/items" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              SoftIo
            </Link>
          </div>

          {/* Desktop main menu */}
          <div className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === route.path
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {route.name}
              </Link>
            ))}
          </div>

          {/* Desktop auth menu */}
          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === "/login"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700 font-medium">
                  Hi, {user.displayName || user.email.split("@")[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === route.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
              <div className="border-t pt-2 mt-2">
                {!user ? (
                  <>
                    <Link
                      href="/login"
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname === "/login"
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="px-3 py-2 text-sm text-gray-500 italic">
                      Logged in as {user.email}
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
