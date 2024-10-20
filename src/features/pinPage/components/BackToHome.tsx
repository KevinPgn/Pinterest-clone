"use client"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export const BackToHome = () => {
  const router = useRouter()

  return <div className="flex items-center gap-4 absolute top-32 left-5">
    <div
    onClick={() => router.back()}
    className="p-3 hover:bg-gray-200 rounded-full duration-75 cursor-pointer">
        <ArrowLeft className="w-6 h-6 font-bold" />
    </div>
    <span className="text-lg font-semibold">Pour <br /> vous</span>
  </div>
}