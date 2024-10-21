"use client"
import { Button } from "@/components/ui/button"
import { followUser } from "../server/FollowUser"
export const FollowButton = ({userToFollowId, isFollowing}: {userToFollowId: string, isFollowing: boolean}) => {
  const handleFollow = async () => {
    await followUser({userToFollowId})
  }
  
  return <>
    <Button
    onClick={handleFollow}
    variant="outline" className="rounded-full bg-[#E60023] text-white text-md py-6 px-5 hover:bg-[#E60023]/80 hover:text-white">
      {isFollowing ? "Désabonner" : "S'abonner"}
    </Button>
  </>
}