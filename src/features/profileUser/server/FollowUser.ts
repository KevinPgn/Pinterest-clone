"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import {cache} from "react"
import { getSession } from "@/components/utils/CacheSession"

export const followUser = authenticatedAction
    .schema(z.object({
        userToFollowId: z.string(),
    }))
    .action(async ({parsedInput: {userToFollowId}, ctx: {userId}}) => {
        if (userToFollowId === userId) throw new Error("You cannot follow yourself")

        const existingFollow = await prisma.follow.findFirst({
            where: {
                followerId: userToFollowId,
                followingId: userId,
            }
        })

        if (existingFollow){
            await prisma.follow.delete({
                where: {id: existingFollow.id}
            })
        } else {
            await prisma.follow.create({
                data: {followerId: userToFollowId, followingId: userId}
            })
        }

        revalidatePath(`/profile/${userToFollowId}`)

        return {success: true}
    })
