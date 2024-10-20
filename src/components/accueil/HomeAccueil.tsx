import { GetPins } from "@/server/Actions"
import { Button } from "../ui/button";
import {Share, Ellipsis} from "lucide-react"
import Link from "next/link"
import { ButtonRegister } from "../utils/ButtonRegister";

export async function HomeAccueil() {
  const pins = await GetPins()

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mx-auto p-4">
      {pins.map((pin, index) => (
        <div key={index} className="mb-4 break-inside-avoid relative cursor-pointer group">
            <Link href={`/pin/${pin.id}`}>
              <img
                src={pin.imageUrl}
                alt={pin.imageUrl}
                loading="lazy"
                width={400}
                height={600}
                className="w-full rounded-lg"
              style={{ height: 'auto' }}
            />
            </Link>
            
          <div className="hidden group-hover:block w-full h-full duration-75">
            <div className="absolute top-5 right-5">
              <ButtonRegister postId={pin.id} isRegistered={pin.isRegistered} />
            </div>
            <div className="absolute bottom-5 right-5 flex items-center gap-3">
              <div className="bg-white rounded-full p-2 hover:bg-gray-200 duration-75">
                <Share size={20} />
              </div>
              <div className="bg-white rounded-full p-2 hover:bg-gray-200 duration-75">
                <Ellipsis size={20} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}