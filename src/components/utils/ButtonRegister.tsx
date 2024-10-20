"use client"
import { Button } from "@/components/ui/button"
import { registerPin } from "@/features/pinPage/server/RegisterPost"
import { useOptimistic } from "react"

export const ButtonRegister = ({postId, isRegistered}: {postId: string, isRegistered: boolean}) => {
  const [optimisticIsRegistered, setOptimisticIsRegistered] = useOptimistic(isRegistered)
  const handleRegister = async () => {
    await registerPin({postId})
    setOptimisticIsRegistered(true)
  }
  
  if(!optimisticIsRegistered) {
    return <Button className="bg-red-500 rounded-full hover:bg-red-600 py-6 text-md" onClick={handleRegister}>Enregistrer</Button>
  }

  return <>
    <Button className="bg-red-500 rounded-full hover:bg-red-600 py-6 text-md" onClick={handleRegister}>Remove Favorite</Button>
  </>
}