"use client"
import { ChevronsRight, Plus } from "lucide-react"
import { useState } from "react"
import { ButtonCreateNewPin } from "./ButtonCreateNewPin"

export const SidebarLeft = () => {
  const [isOpen, setIsOpen] = useState(false)
  return <div className={`${isOpen ? "w-[400px]" : "w-[85px]"} border-r border-gray-400 h-full flex flex-col items-center py-5 gap-9`}>
    <div className="flex items-center justify-between w-full px-5">
        {isOpen && <p className="text-xl font-medium">Brouillons d'Épingle</p>}
        <ChevronsRight size={32} className={`cursor-pointer hover:text-blue-400 duration-75 ${isOpen ? "rotate-180" : ""}`} onClick={() => setIsOpen(!isOpen)} />
    </div>
    {isOpen ? (
        <ButtonCreateNewPin />
    ) : (
        <Plus size={32} className="cursor-pointer hover:text-blue-400 duration-75"/>
    )}
    <div className="w-full h-[1px] bg-gray-400"></div>
  </div>
}