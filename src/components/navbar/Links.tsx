"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
export const Links = () => {
  const pathname = usePathname()

  return <div className="flex items-center gap-2">
    <Link href="/" className={cn("p-3 hover:bg-gray-100 px-4 rounded-full duration-300", pathname === "/" && "bg-black text-white font-semibold hover:text-black hover:bg-white")}>Accueil</Link>
    <Link href="/" className={cn("p-3 hover:bg-gray-100 px-4 rounded-full duration-300", pathname === "/explorer" && "bg-black text-white font-semibold hover:text-black hover:bg-white")}>Explorer</Link>
    <Link href="/" className={cn("p-3 hover:bg-gray-100 px-4 rounded-full duration-300", pathname === "/creer" && "bg-black text-white font-semibold hover:text-black hover:bg-white")}>Créer</Link>
  </div>
}