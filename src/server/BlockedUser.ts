"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import {cache} from "react"

export const BlockUser = authenticatedAction
    .schema(z.object({
        userId: z.string()
    }))
    .action(async ({parsedInput:{userId}, ctx:{userId: currentUserId}}) => {
        const existingBlockedUser = await prisma.blockUser.findUnique({
            where: {
                authorId_blockedUserId: {
                    authorId: currentUserId,
                    blockedUserId: userId
                }
            }
        })
        
        if(existingBlockedUser){
            await prisma.blockUser.delete({
                where: {
                    id: existingBlockedUser.id
                }
            })
        }else{
            await prisma.blockUser.create({
                data: {
                    authorId: currentUserId,
                    blockedUserId: userId
                }
            })
        }

        revalidatePath("/")
    })

export const GetBlocketUsers = cache(authenticatedAction
    .schema(z.object({}))
    .action(async ({ctx:{userId: currentUserId}}) => {
        const blockedUsers = await prisma.blockUser.findMany({
            where: {
                authorId: currentUserId
            },
            select: {
                blockedUser: {
                    select: {
                        id: true,
                        name: true,
                        image: true
                    }
                }
            }
        })

        return blockedUsers
    }))