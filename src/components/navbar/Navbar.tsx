import Link from "next/link"
import Image from "next/image"
import { Links } from "./Links"
import { Searchbar } from "./Searchbar"
import { Informations } from "./Informations"
import { getSession } from "../utils/CacheSession"

export const Navbar = async () => {
  const session = await getSession()

  return <header className="w-full p-3 h-14">
    <nav className="flex items-center gap-1">
        <Link href="/">
            <Image src="/Pinterest-logo.png" alt="logo" width={65} height={65} className="cursor-pointer object-cover p-3 hover:bg-gray-100 rounded-full duration-300" />
        </Link>
        <Links />
        <Searchbar />
        <Informations currentSession={session}/>
    </nav>
  </header>
}