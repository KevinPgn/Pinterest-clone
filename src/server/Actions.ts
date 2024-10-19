"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import {cache} from "react"

export const GetPins = cache(async () => {
    const pins = await prisma.pin.findMany({
        orderBy: { createdAt: "desc" },
        select: { imageUrl: true, id: true},
        take: 15
    })

    return pins
})