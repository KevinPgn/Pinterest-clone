import { getPin } from "@/features/pinPage/server/GetPin"

interface PinPageProps {
    params: {
        pinId: string
    }
}

const PinPage = async ({params}: PinPageProps) => {
  const pin = await getPin(params.pinId)
  
  return (
    <div>PinPage</div>
  )
}

export default PinPage