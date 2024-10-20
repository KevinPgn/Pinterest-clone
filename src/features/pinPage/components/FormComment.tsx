"use client"
import { Input } from "@/components/ui/input"
import {useForm} from "react-hook-form"
import { createNewComment } from "../server/CreateComment"

export const FormComment = ({pinId}: {pinId: string}) => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm()

  const onSubmit = async (data: any) => {
    try {
      await createNewComment({content: data.content, pinId})
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return <>
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 border border-gray-300 rounded-full p-2 absolute bottom-5 w-[90%] px-3">
        <Input type="text" placeholder="Ajouter un commentaire" {...register("content")} className="bg-transparent border-none" />
        {errors.content && <p className="text-red-500 text-sm">{errors.content.message as string}</p>}
        <span className="text-xl cursor-pointer">😊</span>
        <button type="submit" hidden>Add</button>
    </form>
  </>
}