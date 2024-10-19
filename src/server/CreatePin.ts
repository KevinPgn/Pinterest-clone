"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import {cache} from "react"
import { redirect } from "next/navigation"

export const createPin = authenticatedAction
    .schema(z.object({
        title: z.string().min(1, {message: "Le titre est requis"}),
        description: z.string().min(1, {message: "La description est requise"}),
        imageUrl: z.string().min(1, {message: "L'image est requise"}),
        link: z.string().min(1, {message: "Le lien est requis"}).optional(),
    }))
    .action(async ({parsedInput:{title, description, imageUrl, link}, ctx: {userId}}) => {
        await prisma.pin.create({
            data: {
                title,
                description,
                imageUrl,
                link,
                authorId: userId
            }
        })
       
        revalidatePath("/")
        redirect("/")
    })