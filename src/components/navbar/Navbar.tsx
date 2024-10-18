import Link from "next/link"
import Image from "next/image"
import { Links } from "./Links"

export const Navbar = () => {
  return <header className="w-full p-3 h-14">
    <nav className="flex items-center gap-1">
        <Link href="/">
            <Image src="/Pinterest-logo.png" alt="logo" width={50} height={50} className="cursor-pointer object-cover p-3 hover:bg-gray-100 rounded-full duration-300" />
        </Link>
        <Links />
    </nav>
  </header>
}