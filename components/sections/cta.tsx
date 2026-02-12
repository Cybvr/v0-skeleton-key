import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="bg-foreground px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold text-background md:text-4xl lg:text-5xl text-balance">
          Are you ready to work with Skeleton Key?
        </h2>
        <div className="mt-8">
          <Button
            variant="outline"
            className="rounded-full border-background/30 bg-transparent px-8 text-sm font-semibold text-background hover:bg-background hover:text-foreground"
          >
            Book a Consultation Call
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl border-t border-background/20 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="max-w-xs text-xs leading-relaxed text-background/70">
            For inquiries, consultations, or to schedule viewings, please feel free to reach out to us using the contact information below.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-background/80">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-background/80">
              <Mail className="h-4 w-4" />
              <span>hello@skeletonkey.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
