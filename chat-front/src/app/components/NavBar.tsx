export default function NavBar() {
  return (
    <nav className="w-full p-4 bg-gray-800 text-white flex items-center justify-between px-8">
      <a href="/" className="text-2xl font-bold">Home</a>
      <ul className="flex space-x-4 float-right ml-4">
        <li className="mr-4 "><a href="/contact">Contact</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/contact">Contact</a></li>
        <div className="float-right ml-4">
            <img className="w-10 h-10 rounded-full" src="/user-profile.jpg" alt="Profile" />
        </div>
      </ul>
    </nav>
  );
}