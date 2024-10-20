"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import {cache} from "react"
import { getSession } from "@/components/utils/CacheSession"

export const getPin = cache(async (pinId: string) => {
    const session = await getSession()
    const currentUser = session?.user?.id

    const pin = await prisma.pin.findUnique({
        where: {id: pinId},
        select: {
            id: true,
            imageUrl: true,
            title: true,
            description: true,
            createdAt: true,
            comments: {
                select: {
                    id: true,
                    content: true,
                    createdAt: true,
                    author: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        }
                    }
                },
                orderBy: {createdAt: "desc"},
                take: 20
            },
            _count: {
                select: {
                    likes: true,
                    comments: true,
                }
            },
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                    _count: {
                        select: {
                            followers: true,
                        }
                    }
                }
            },
            ...(currentUser ? {
                likes: {
                    where: {userId: currentUser}
                }
            } : {})
        }
    })

    return {
        ...pin,
        isLiked: currentUser && pin?.likes && pin.likes.length > 0
    }
})
