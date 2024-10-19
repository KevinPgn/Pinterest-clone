import Image from 'next/image';

interface ImageItem {
  src: string;
  alt: string;
}

const images: ImageItem[] = [
  { src: "https://picsum.photos/400/600?random=1", alt: "Random image 1" },
  { src: "https://picsum.photos/400/800?random=2", alt: "Random image 2" },
  { src: "https://picsum.photos/400/700?random=3", alt: "Random image 3" },
  { src: "https://picsum.photos/400/500?random=4", alt: "Random image 4" },
  { src: "https://picsum.photos/400/900?random=5", alt: "Random image 5" },
  { src: "https://picsum.photos/400/400?random=6", alt: "Random image 6" },
  { src: "https://picsum.photos/400/650?random=7", alt: "Random image 7" },
  { src: "https://picsum.photos/400/550?random=8", alt: "Random image 8" },
  { src: "https://picsum.photos/400/750?random=9", alt: "Random image 9" },
  { src: "https://picsum.photos/400/450?random=10", alt: "Random image 10" },
  { src: "https://picsum.photos/400/850?random=11", alt: "Random image 11" },
  { src: "https://picsum.photos/400/350?random=12", alt: "Random image 12" },
  { src: "https://picsum.photos/400/950?random=13", alt: "Random image 13" },
  { src: "https://picsum.photos/400/600?random=14", alt: "Random image 14" },
  { src: "https://picsum.photos/400/700?random=15", alt: "Random image 15" },
  // ... ajoutez plus d'images ici
];

export function HomeAccueil() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mx-auto p-4">
      {images.map((img, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <img
            src={img.src}
            alt={img.alt}
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