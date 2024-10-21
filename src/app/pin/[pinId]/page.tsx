import { getPin } from "@/features/pinPage/server/GetPin"
import { BackToHome } from "@/features/pinPage/components/BackToHome"
import { Pin as PinComponent } from "@/features/pinPage/components/Pin"

interface PinPageProps {
    params: Promise<{
        pinId: string
    }>
}

const PinPage = async (props: PinPageProps) => {
    const params = await props.params;
    const pin = await getPin(params.pinId)

    return (
      <section className="max-w-[1000px] mx-auto mt-7">
          <BackToHome />
          <PinComponent pin={pin} />
      </section>
    )
}

export default PinPage