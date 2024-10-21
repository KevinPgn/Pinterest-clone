"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import {cache} from "react"
import { getSession } from "@/components/utils/CacheSession"

export const blockTheUser = authenticatedAction
    .schema(z.object({
        userId: z.string(),
    }))
    .action(async ({parsedInput: {userId}, ctx: {userId: currentUserId}}) => {
        if (userId === currentUserId) throw new Error("You cannot block yourself")

        const user = await prisma.user.findUnique({where: {id: userId}})
        if (!user) throw new Error("User not found")

        const existingBlock = await prisma.blockUser.findFirst({
            where: {
                authorId: currentUserId,
                blockedUserId: userId,
            },
        })

        if (existingBlock) throw new Error("User already blocked")

        await prisma.blockUser.create({
            data: {
                blockedUserId: userId,
                authorId: currentUserId,
            }
        })

        revalidatePath(`/profile/${userId}`)

        return {success: true}
    })

