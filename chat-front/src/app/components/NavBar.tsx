import Links from "./Links";
import Link from "next/link"; 

export default function NavBar() {
  const navLinks = [
      { label: "FAQ", href: "/faq" },
      { label: "À propos", href: "/about" },
      { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full p-4 bg-gray-800 text-white flex items-center justify-between px-8">
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