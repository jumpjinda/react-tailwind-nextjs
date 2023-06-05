import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex bg-gray-500 px-3 items-center justify-between h-20">
      <div>
        <Image src="/logo.png" width={50} height={50} alt="logo" />
      </div>
      <ul className="flex gap-10 text-white">
        <li className="hover:text-sky-300"><Link href="/">Home page</Link></li>
        <li className="hover:text-sky-300"><Link href="/about">About</Link></li>
        <li className="hover:text-sky-300"><Link href="/products">Products</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;