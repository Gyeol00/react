import React from "react";

import Link from "next/link";

function Navbar() {
  return (
    // prettier-ignore
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link href="/" className="hover:underline">홈</Link>
      <Link href="/counter" className="hover:underline">카운터</Link>
      <Link href="/todo" className="hover:underline">투두</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
    </nav>
  );
}

export default Navbar;
