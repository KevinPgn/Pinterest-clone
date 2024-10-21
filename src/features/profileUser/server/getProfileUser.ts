"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import {cache} from "react"
import { getSession } from "@/components/utils/CacheSession"

export const getProfileUser = cache(async (userId: string) => {
    const session = await getSession()
    const userIdSession = session?.user?.id
    
    const user = await prisma.user.findUnique({
        where: {id: userId},
        select: {
            id: true,
            name: true,
            image: true,
            _count: {
                select: {
                    followers: true,
                    following: true,
                }
            },
            ...(userIdSession && {
                followers: {
                    where: {
                        followingId: userIdSession
                    }
                }    
            })
        }
    })

    if (!user) throw new Error("User not found")

    return {
        ...user,
        isFollowing: user.followers.length > 0,
    }
})
