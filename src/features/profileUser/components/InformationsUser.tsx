import { Share, Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSession } from "@/components/utils/CacheSession";
import { FollowButton } from "./FollowButton";

export const InformationsUser = async ({userDetails}: {userDetails: any}) => {
  const session = await getSession();
  const sessionUserId = session?.user?.id;
  const isFollowing = userDetails.isFollowing;
  console.log(isFollowing)
  
  return <div className="max-w-[650px] mx-auto flex flex-col mt-5">
    <div className="w-full h-[350px] bg-blue-500 rounded-[30px] relative">
      <img src={userDetails.image} alt="user image" className="w-[110px] absolute h-[110px] rounded-full bottom-[-50px] left-[50%] translate-x-[-50%] border-2 border-white object-cover" />
    </div>
  
    <span className="text-3xl font-semibold text-center mt-16 mb-3">{userDetails.name}</span>
    <span className="text-sm text-gray-500 text-center">@{userDetails.name}</span>

    <div className="flex justify-center gap-5 mt-5">
      <span className="text-md"><span className="font-semibold">{userDetails._count.followers}</span> Abonnés</span>
      <span className="text-md"><span className="font-semibold">{userDetails._count.following}</span> Abonnements</span>
    </div>

    <div className="flex justify-center items-center gap-7 mt-7">
      <Share className="w-7 h-7 cursor-pointer" />
      {sessionUserId === userDetails.id ? (
        <div>
           <Button variant="outline" className="rounded-full bg-[#E60023] text-white text-md py-6 px-5 hover:bg-[#E60023]/80 hover:text-white">Modifier Profile</Button>
        </div>
      ): (
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-full bg-gray-200 text-black text-md py-6 px-5 hover:bg-gray-100">Message</Button>
          <FollowButton userToFollowId={userDetails.id} isFollowing={isFollowing} />
        </div>
      )}
      <Ellipsis className="w-7 h-7 cursor-pointer" />
    </div>
  </div>
}