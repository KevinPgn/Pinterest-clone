"use client"
import { Button } from "../ui/button"
import {useRouter} from "next/navigation"
export const ButtonCreateNewPin = () => {
  const router = useRouter()
  return <>
    <Button className="w-[90%] rounded-full" onClick={() => router.push("/creer")}>Créer une nouvelle Épingle</Button>
  </>
}