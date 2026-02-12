"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Skeleton Key make money?",
    answer:
      "Skeleton Key charges a small fee for facilitating transactions and providing services such as document preparation, underwriting, and payment processing. These fees are typically lower than traditional real estate and mortgage fees.",
  },
  {
    question: "What is Skeleton Key?",
    answer:
      "Skeleton Key is an all-in-one platform that enables seller financing for real estate transactions, cutting out traditional bank lending to benefit both buyers and sellers.",
  },
  {
    question: "How does Skeleton Key work?",
    answer:
      "Skeleton Key connects buyers and sellers directly, facilitating seller-financed transactions with professional loan documents, underwriting, and servicing.",
  },
  {
    question: "Is Skeleton Key legal?",
    answer:
      "Yes, seller financing is completely legal. Skeleton Key ensures all transactions comply with federal and state regulations, with documents reviewed by licensed attorneys.",
  },
]

export default function FaqSection() {
  return (
    <section id="faqs" className="bg-background px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-2 text-xs font-semibold text-muted-foreground">General</div>
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mb-8 mt-4">
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground">
            See all
          </span>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-sm font-medium text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
