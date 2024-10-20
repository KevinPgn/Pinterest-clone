"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import {cache} from "react"

export const createNewComment = authenticatedAction
    .schema(z.object({
        content: z.string().min(1, {message: "Le commentaire ne peut pas être vide"}),
        pinId: z.string().min(1, {message: "Le pinId est requis"})
    }))
    .action(async ({parsedInput:{content, pinId}, ctx:{userId}}) => {
        const comment = await prisma.comment.create({
            data: {
                content,
                authorId: userId,
                pinId
            }
        })
        revalidatePath(`/pin/${pinId}`)
        return comment
    })
