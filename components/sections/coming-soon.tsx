import { MapPin, SlidersHorizontal, Bell } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Interactive Map Search",
    description: "Explore neighborhoods and properties with our intuitive Google Maps integration.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customizable Filters",
    description: "Narrow down your search with specific criteria like price range, number of bedrooms, and more.",
  },
  {
    icon: Bell,
    title: "Real-Time Updates",
    description: "Be the first to know about new listings that match your preferences.",
  },
]

export default function ComingSoonSection() {
  return (
    <section className="bg-muted px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-secondary/30 px-4 py-1 text-xs font-semibold text-foreground">
          Coming Soon
        </span>
        <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Find Your Dream Property
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {"Imagine a world where finding your perfect property is as easy as a few clicks. That's the future we're building at SkeletonKey, and it's coming to you soon!"}
        </p>
        <div className="mt-10 grid gap-8 text-left sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title}>
              <feature.icon className="mb-3 h-6 w-6 text-foreground" />
              <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
