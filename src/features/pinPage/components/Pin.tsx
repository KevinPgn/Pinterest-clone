import { ButtonFollow } from "@/components/utils/ButtonFollow"
import { ButtonRegister } from "@/components/utils/ButtonRegister"
import { Heart, Share, Ellipsis } from "lucide-react"

export const Pin = ({pin}: {pin: any}) => {
  return <div className="w-full min-h-[829px] shadow-md rounded-lg flex gap-5">
    <div className="w-[50%]">
        <img src={pin.imageUrl} alt={pin.title} className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg" />
    </div>

    <div className="w-[50%] p-5 py-7">
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

            <ButtonRegister />
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

            <ButtonFollow />
        </div>
    </div>
  </div>
}