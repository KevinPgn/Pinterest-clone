import { GetPins } from "@/server/Actions"

export async function HomeAccueil() {
  const pins = await GetPins()

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mx-auto p-4">
      {pins.map((pin, index) => (
        <div key={index} className="mb-4 break-inside-avoid relative cursor-pointer">
          <img
            src={pin.imageUrl}
            alt={pin.imageUrl}
            loading="lazy"
            width={400}
            height={600}
            className="w-full rounded-lg"
            style={{ height: 'auto' }}
          />
        </div>
      ))}
    </div>
  );
}