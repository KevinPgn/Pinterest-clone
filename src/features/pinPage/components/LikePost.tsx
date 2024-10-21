"use client"
import { Heart } from "lucide-react"
import { likePost } from "../server/LikePost"
import { useOptimistic } from "react"
import {cn} from "@/lib/utils"

export const LikePost = ({pinId, isLiked}: {pinId: string, isLiked: boolean}) => {
  const [optimisticIsLiked, updateOptimisticIsLiked] = useOptimistic(isLiked, (prev: boolean, newIsLiked: boolean) => newIsLiked)
  return <>
    <Heart size={21} className={cn("cursor-pointer", optimisticIsLiked && "fill-red-500 text-red-500")} onClick={() => {
      likePost({pinId})
      updateOptimisticIsLiked(!optimisticIsLiked)
    }}/>
  </>
}