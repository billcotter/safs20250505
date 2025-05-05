import Image from "next/image"
import { siteImages } from "@/lib/images"

export default function TestImagesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-8">Image Test Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl mb-4">Direct Image Test</h2>
          <div className="space-y-4">
            <div>
              <p className="mb-2">Image 1 (/images/film1.jpg):</p>
              <Image src="/images/film1.jpg" alt="Test image 1" width={400} height={300} className="rounded" />
            </div>
            <div>
              <p className="mb-2">Image 2 (/images/film2.jpg):</p>
              <Image src="/images/film2.jpg" alt="Test image 2" width={400} height={300} className="rounded" />
            </div>
            <div>
              <p className="mb-2">Image 3 (/images/film3.jpg):</p>
              <Image src="/images/film3.jpg" alt="Test image 3" width={400} height={300} className="rounded" />
            </div>
            <div>
              <p className="mb-2">Image 4 (/images/film4.jpg):</p>
              <Image src="/images/film4.jpg" alt="Test image 4" width={400} height={300} className="rounded" />
            </div>
            <div>
              <p className="mb-2">Image 5 (/images/film5.jpg):</p>
              <Image src="/images/film5.jpg" alt="Test image 5" width={400} height={300} className="rounded" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-4">Background Image Test</h2>
          <div className="space-y-4">
            {siteImages.map((image, index) => (
              <div key={index} className="h-40 relative rounded overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${image.src}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <p className="text-white">{image.src}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
