import {Search} from "lucide-react"
import { Input } from "@/components/ui/input"

export const Searchbar = () => {
  return <div className="w-full bg-gray-100 rounded-full flex items-center px-3 py-1">
    <Search size={20} className="font-bold text-gray-500"/>
    <Input type="text" placeholder="Rechercher" className="bg-transparent outline-none border-none" />
  </div>
}