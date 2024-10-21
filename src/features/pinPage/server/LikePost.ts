"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import {cache} from "react"

export const likePost = authenticatedAction
    .schema(z.object({
        pinId: z.string().min(1, {message: "Le pinId est requis"})
    }))
    .action(async ({parsedInput:{pinId}, ctx:{userId}}) => {
        const post = await prisma.pin.findUnique({
            where: {id: pinId}
        })
        if(!post) throw new Error("Post not found")

        const existingLike = await prisma.like.findUnique({
            where: {
                userId_pinId: {
                    userId,
                    pinId
                }
            }
        })

        if(existingLike) {
            await prisma.like.delete({
                where: {id: existingLike.id}
            })
        } else {
            await prisma.like.create({
                data: {
                    userId,
                    pinId
                }
            })
        }
        revalidatePath(`/pin/${pinId}`)
    })
