"use client"
import { Bell, MessageCircleMore, UserPlus } from "lucide-react"
import { signIn } from "next-auth/react"

export const Informations = ({currentSession}: {currentSession: any}) => {
  return <div className="flex items-center gap-2">
    <Bell size={40} className="cursor-pointer hover:bg-gray-100 rounded-full duration-300 p-2"/>
    <MessageCircleMore size={40} className="cursor-pointer hover:bg-gray-100 rounded-full duration-300 p-2"/>
    {currentSession ? (
        <img src={currentSession.user.image} alt="profile" width={45} height={45} className="cursor-pointer hover:bg-gray-100 rounded-full duration-300 p-2"/>
    ) : (
        <UserPlus
        onClick={() => signIn("github")}
        size={40} className="cursor-pointer hover:bg-gray-100 rounded-full duration-300 p-2"/>
    )}
  </div>
}