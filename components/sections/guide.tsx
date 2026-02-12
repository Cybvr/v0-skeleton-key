import Image from "next/image"
import { FileText, ShieldCheck, Wallet, BookOpen } from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Loan Documents",
    description: "Drafted and approved by attorneys, including legally required disclosures.",
  },
  {
    icon: ShieldCheck,
    title: "Underwriting Services",
    description: "To make sure your buyer is trustworthy.",
  },
  {
    icon: Wallet,
    title: "Loan Servicing",
    description: "To collect the buyer's monthly payments for you.",
  },
  {
    icon: BookOpen,
    title: "Expert Guidance",
    description: "To answer your questions about the seller financing process.",
  },
]

export default function GuideSection() {
  return (
    <section className="bg-background px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl">
              <Image
                src="/images/guide-woman.jpg"
                alt="Skeleton Key guide"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Your Guide To More Money
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Skeleton Key provides all the support
            </p>
            <div className="mt-8 space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/30">
                    <feature.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
