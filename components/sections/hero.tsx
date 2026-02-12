import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const properties = [
  {
    title: "Residential Home",
    image: "/images/residential-home.jpg",
    withSK: { price: "$650,000", rate: "5%", mortgage: "$2,917.08" },
    withBank: { price: "$700,000", rate: "None", mortgage: "$4,400.00" },
  },
  {
    title: "50 Unit Apartment Complex",
    image: "/images/apartment-complex.jpg",
    withSK: { price: "$500,000", rate: "4%", mortgage: "$2,917.39" },
    withBank: { price: "$475,000", rate: "N/A", mortgage: "$4,607.94" },
  },
  {
    title: "Raw/Ranch Land",
    image: "/images/ranch-land.jpg",
    withSK: { price: "$675,000", rate: "3.5%", mortgage: "$2,914.27" },
    withBank: { price: "$600,000", rate: "5%", mortgage: "$4,449.00" },
  },
]

export default function HeroSection() {
  return (
    <section className="bg-background px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
          Buy and Sell Like The 1%
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground lg:text-lg">
          The brand new, all-in-one platform to help you sell for more and buy for less
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {properties.map((property) => (
            <div key={property.title} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative h-48 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-3 text-left text-sm font-semibold text-card-foreground">{property.title}</h3>
                <div className="grid grid-cols-2 gap-4 text-left text-xs">
                  <div>
                    <div className="mb-2 flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="font-semibold text-card-foreground">With SK</span>
                    </div>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Price: <span className="font-medium text-card-foreground">{property.withSK.price}</span></p>
                      <p>Rate: <span className="font-medium text-card-foreground">{property.withSK.rate}</span></p>
                      <p>Mortgage: <span className="font-medium text-card-foreground">{property.withSK.mortgage}</span></p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-1">
                      <Check className="h-3 w-3 text-muted-foreground" />
                      <span className="font-semibold text-card-foreground">With Bank Loan</span>
                    </div>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Price: <span className="font-medium text-card-foreground">{property.withBank.price}</span></p>
                      <p>Rate: <span className="font-medium text-card-foreground">{property.withBank.rate}</span></p>
                      <p>Mortgage: <span className="font-medium text-card-foreground">{property.withBank.mortgage}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-secondary-foreground hover:bg-secondary/90">
            Sell For More Money
          </Button>
          <Button className="rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background hover:bg-foreground/90">
            Buy With a Lower Monthly Payment
          </Button>
        </div>
      </div>
    </section>
  )
}
