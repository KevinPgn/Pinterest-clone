"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import {cache} from "react"
import { getSession } from "@/components/utils/CacheSession"

export const GetPins = cache(async () => {
    const session = await getSession()
    const userId = session?.user?.id

    const pins = await prisma.pin.findMany({
        orderBy: { createdAt: "desc" },
        select: {
            id: true,
            imageUrl: true,
            registerPosts: {
                where: { authorId: userId ?? '' },
                select: { id: true },
            },
        },
        take: 15
    })
    return pins.map((pin) => ({
        ...pin,
        isRegistered: pin.registerPosts.length > 0,
    }))
})