import Image from "next/image"
import { Play } from "lucide-react"

const videos = [
  { src: "/images/what-we-do-1.jpg", alt: "Real estate transaction process" },
  { src: "/images/what-we-do-2.jpg", alt: "Home for sale showcase" },
]

export default function WhatWeDoSection() {
  return (
    <section className="bg-foreground px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-background md:text-4xl">
          What We Do
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl">
              <div className="relative aspect-video w-full">
                <Image
                  src={video.src}
                  alt={video.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/30">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 text-foreground" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
