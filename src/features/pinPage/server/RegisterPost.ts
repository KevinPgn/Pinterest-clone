"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import {cache} from "react"

export const registerPin = authenticatedAction
    .schema(z.object({
        postId: z.string()
    }))
    .action(async ({parsedInput:{postId}, ctx:{userId}}) => {
        const post = await prisma.pin.findUnique({
            where: {id: postId}
        })
        if(!post) throw new Error("Post not found")

        const existingRegistration = await prisma.registerPost.findUnique({
            where: {
                authorId_pinId: {
                    authorId: userId,
                    pinId: postId
                }
            }
        })

        if(existingRegistration) {
            await prisma.registerPost.delete({
                where: {
                    authorId_pinId: {
                        authorId: userId,
                        pinId: postId
                    }
                }
            })
        } else {
            await prisma.registerPost.create({
                data: {pinId: postId, authorId: userId}
            })
        }

        revalidatePath(`/pin/${postId}`)
    })