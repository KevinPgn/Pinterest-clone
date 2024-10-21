"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import {cache} from "react"
import { getSession } from "@/components/utils/CacheSession"

export const editProfileUser = authenticatedAction
    .schema(z.object({
        name: z.string().optional(),
        image: z.string().optional(),
    }))
    .action(async ({parsedInput: {name, image}, ctx: {userId}}) => {
        const session = await getSession()
        const sessionUserId = session?.user?.id
        
        const user = await prisma.user.findUnique({
            where: {id: userId}
        })

        if (!user) throw new Error("User not found")
        if (sessionUserId !== userId) throw new Error("You are not authorized to edit this profile")
        
        await prisma.user.update({
            where: {id: userId},
            data: {
                name,
                image,
            }
        })

        revalidatePath(`/${userId}`)
        return user
    })

