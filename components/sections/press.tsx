const pressItems = [
  {
    name: "Bloomberg",
    quote: "Sellers are... cutting asking prices... Buyers are getting very little, if any, relief from high borrowing costs.",
  },
  {
    name: "The New York Times",
    quote: "Squeezed by high interest and record prices, property owners are frozen in place. They can't sell, let alone afford to buy.",
  },
  {
    name: "FOX Business",
    quote: "When you're seller financing, the sky is the limit.",
  },
  {
    name: "Forbes",
    quote: "One of the most popular creative financing strategies is seller financing... a win-win for both parties, as the buyer can receive regular payments with interest while the buyer can avoid the strict lending requirements of traditional banks.",
  },
  {
    name: "The Washington Post",
    quote: "Property sellers unable to find a qualified buyer may want to consider seller financing.",
  },
]

export default function PressSection() {
  return (
    <section className="border-t border-border bg-background px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-5">
          {pressItems.map((item) => (
            <div key={item.name} className="flex flex-col gap-3">
              <span className="font-serif text-lg font-bold text-foreground">{item.name}</span>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {'"'}{item.quote}{'"'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
