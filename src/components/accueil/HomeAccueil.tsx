// generate 20 random images
const randomImages = Array.from({ length: 20 }, () => ({
  id: Math.random().toString(),
  url: `https://picsum.photos/200/300?random=${Math.random()}`
}));

export const HomeAccueil = () => {
  return <>
    <div className="flex flex-wrap justify-center gap-4 mt-5">
      {randomImages.map((image) => (
        <img key={image.id} src={image.url} alt="random" width={250} height={300} className="rounded-xl object-cover" />
      ))}
    </div>
  </>
}