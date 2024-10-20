import { getPin } from "@/features/pinPage/server/GetPin"
import { BackToHome } from "@/features/pinPage/components/BackToHome"

interface PinPageProps {
    params: {
        pinId: string
    }
}

const PinPage = async ({params}: PinPageProps) => {
  const pin = await getPin(params.pinId)
  
  return (
    <section className="max-w-[1200px] mx-auto mt-5">
        <BackToHome />
    </section>
  )
}

export default PinPage