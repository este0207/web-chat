"use client";

import { useEffect, useState } from "react";
import Links from "./Links";
import Link from "next/link"; 

export default function NavBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const navLinks = [
      { label: "FAQ", href: "/faq" },
      { label: "À propos", href: "/about" },
      { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`w-full-10 p-4 bg-white/10 backdrop-blur-md text-white flex items-center justify-between px-8 m-8 rounded-full transition-all duration-700 ease-out
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
    >
      <Link href="/" className="text-2xl font-bold">Home</Link>
      <ul className="flex space-x-4 float-right ml-4">
        <Links links={navLinks} />
        <div className="float-right ml-4">
          <Link href="/profile">
            <img className="w-10 h-10 rounded-full" src="/user-profile.jpg" alt="Profile" />
          </Link>
        </div>
      </ul>
    </nav>
  );
}