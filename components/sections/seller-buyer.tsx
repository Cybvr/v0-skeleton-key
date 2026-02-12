import { CheckCircle2 } from "lucide-react"

export default function SellerBuyerSection() {
  return (
    <section className="bg-background px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Seller: Higher Sales Price + Interest?
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </h2>
            <h2 className="mt-4 flex items-center gap-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Buyer: Lower Monthly Payments?
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </h2>
            <p className="mt-6 text-lg font-bold text-foreground underline decoration-secondary decoration-4 underline-offset-4">
              Only the banker loses
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Expensive bank loans cost you money when buying or selling a property. Get rid of the bank... Keep profits for yourself.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-muted">
              <svg viewBox="0 0 120 120" className="h-40 w-40 text-destructive">
                <circle cx="60" cy="40" r="16" fill="currentColor" opacity="0.2" />
                <rect x="40" y="56" width="40" height="44" rx="4" fill="currentColor" opacity="0.2" />
                <line x1="20" y1="20" x2="100" y2="100" stroke="currentColor" strokeWidth="4" />
                <line x1="100" y1="20" x2="20" y2="100" stroke="currentColor" strokeWidth="4" />
              </svg>
              <span className="absolute bottom-4 text-xs font-bold text-destructive">No More Bankers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
