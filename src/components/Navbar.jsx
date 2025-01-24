"use client";

import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Home, User } from "lucide-react";
import Link from "next/link";

export default function Navbar({ isAuthenticated }) {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800">
            BlogVault
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-colors"
            >
              <Home size={20} />
              <span className="font-medium">Home</span>
            </Link>
            <Link 
              href="/profile" 
              className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-colors"
            >
              <User size={20} />
              <span className="font-medium">Profile</span>
            </Link>
          </div>

          {/* Authentication Links */}
          <div>
            {isAuthenticated ? (
              <LogoutLink className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors">
                Logout
              </LogoutLink>
            ) : (
              <LoginLink className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Login
              </LoginLink>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
