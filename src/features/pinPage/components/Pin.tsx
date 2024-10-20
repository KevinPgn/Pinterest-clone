import { ButtonFollow } from "@/components/utils/ButtonFollow"
import { ButtonRegister } from "@/components/utils/ButtonRegister"
import { Heart, Share, Ellipsis, ChevronUp } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { FormComment } from "./FormComment"
import { getSession } from "@/components/utils/CacheSession"

export const Pin = async ({pin}: {pin: any}) => {
  const session = await getSession()
  const userId = session?.user?.id
  const isRegistered = pin.isRegistered
  console.log(isRegistered)
  return <div className="w-full min-h-[829px] shadow-md rounded-lg flex gap-5">
    <div className="w-[50%]">
        <img src={pin.imageUrl} alt={pin.title} className="w-full object-cover rounded-lg" />
    </div>

    <div className="w-[50%] p-5 py-7 relative">
    {/* Haut */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <Heart size={21} className="cursor-pointer"/>
                    <p className="text-md font-semibold">{pin._count.likes}</p>
                </div>
                <Share size={21} className="cursor-pointer"/>
                <Ellipsis size={21} className="cursor-pointer"/>
            </div>

            <ButtonRegister postId={pin.id} isRegistered={isRegistered} />
        </div>

        {/* title and description */}
        <div className="mt-5">
            <p className="text-xl font-semibold">{pin.title}</p>
            <p className="text-sm mt-2">{pin.description}</p>
        </div>

        {/* User Informations */}
        <div className="flex items-center justify-between mt-10">
            <div className="flex items-center gap-3">
                <img src={pin.author.image} alt={pin.author.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="flex flex-col">
                    <p className="text-sm font-medium">{pin.author.name}</p>
                    <p className="text-sm">{pin.author._count.followers} abonnés</p>
                </div>
            </div>

            {pin.author.id === userId ? null : <ButtonFollow />}
        </div>

        {/* Comments */}
        <div className="flex items-center justify-between mt-10">
            <p className="text-md font-medium">{pin._count.comments} commentaires</p>
            <ChevronUp size={30} className="cursor-pointer"/>
        </div>
        {pin._count.comments === 0 ? <div className="mt-5"><p className="text-sm text-gray-500">Aucun commentaire pour le moment</p></div>:null}
    
        <div className="mt-5 overflow-y-auto max-h-[300px]">
            {pin.comments.map((comment: any) => (
                <div key={comment.id} className="flex flex-col gap-3 mb-5">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <img src={comment.author.image} alt={comment.author.name} className="w-8 h-8 rounded-full object-cover" />
                            <span className="text-sm font-medium">{comment.author.name}</span>
                        </div>
                        <p className="text-sm">{comment.content}</p>
                        <p className="text-sm text-gray-500">{formatDistanceToNow(comment.createdAt, {addSuffix: true})}</p>
                    </div>
                </div>
            ))}
        </div>

        <FormComment pinId={pin.id} />
    </div>
  </div>
}