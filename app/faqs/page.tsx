import Header from "@/app/common/header"
import Footer from "@/app/common/footer"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqsPage() {
    const faqs = [
        {
            question: "Can Skeleton Key help with marketing properties?",
            answer: "Yes, Skeleton Key can be a valuable marketing tool for your listings. The potential for seller financing can attract a wider pool of buyers and make your listings stand out in a competitive market. Skeleton Key provides materials to help you promote this financing option to potential buyers."
        },
        {
            question: "How does Skeleton Key affect my commissions?",
            answer: "Skeleton Key is designed to work within existing real estate commission structures. Our platform often helps close deals faster and at higher prices, ensuring agents receive their full commissions while providing more value to their clients."
        },
        {
            question: "Do I need special training to use Skeleton Key?",
            answer: "While our platform is intuitive, we provide comprehensive onboarding and resources for agents to ensure you can confidently explain and utilize our solutions for your clients."
        },
        {
            question: "How can Skeleton Key help me close more deals?",
            answer: "By solving the affordability gap for buyers and the price expectations for sellers, Skeleton Key removes the most common friction points in real estate transactions, leading to a higher closing rate."
        },
        {
            question: "How does Skeleton Key handle the loan servicing?",
            answer: "Skeleton Key partners with professional third-party loan servicers to handle all payment collections, tax reporting, and administrative tasks, ensuring a hands-off experience for both parties."
        },
        {
            question: "What happens if the buyer stops making payments?",
            answer: "We have robust legal frameworks and protections in place. Our agreements include clear guidelines on default and repossession, protecting the seller's interests just like a traditional mortgage lender."
        },
        {
            question: "Is it safe to act as a lender?",
            answer: "When properly structured through Skeleton Key, acting as a lender is a time-tested strategy used by wealthy investors for decades. We provide the legal security and professional management to make it safe for everyday sellers."
        },
        {
            question: "How can I earn more as a seller with Skeleton Key?",
            answer: "Sellers often earn more by capturing the interest that would otherwise go to a bank, and by selling at a more favorable price point without having to make desperate price cuts."
        },
        {
            question: "How do credit checks work with Skeleton Key?",
            answer: "We perform thorough background and financial checks on all buyers. However, we look at the 'full picture' including income and reliability, often allowing great buyers who might be 'nickeled and dimed' by traditional banks to qualify."
        },
        {
            question: "What if I want to sell the home before I've paid it off?",
            answer: "Skeleton Key has specific protocols for handling existing underlying mortgages (often referred to as 'Subject-To' or wrap-around transactions) to ensure all parties are protected and compliant."
        },
        {
            question: "Do I still need a down payment with Skeleton Key?",
            answer: "Yes, most Skeleton Key transactions require a down payment. This ensures 'skin in the game' for the buyer and provides immediate liquidity to the seller."
        },
        {
            question: "How can I save money as a buyer with Skeleton Key?",
            answer: "Buyers save by avoiding high bank fees, potentially lower interest rates than current market peaks, and the ability to get into a home without traditional financing hurdles."
        },
        {
            question: "How does Skeleton Key make money?",
            answer: "We charge a transparent platform fee for structuring the deal, performing due diligence, and providing the ongoing management and legal framework for the transaction."
        },
        {
            question: "Is Skeleton Key legal?",
            answer: "Absolutely. Our model is built on established property law and financial regulations. We work with legal experts in every jurisdiction we operate in to ensure full compliance."
        },
        {
            question: "How does Skeleton Key work?",
            answer: "Skeleton Key facilitates direct transactions between buyers and sellers where the seller effectively acts as the bank, or where we bridge the gap between traditional and creative financing."
        },
        {
            question: "What is Skeleton Key?",
            answer: "Skeleton Key is a real estate technology platform that enables 'The New Way to Real Estate'—making property ownership accessible through creative, secure, and professional financing solutions."
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1">

                {/* Hero Section */}
                <section className="bg-[#EBE3E0] py-24 px-4 md:px-6">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-primary text-center">
                            Frequently Asked Questions
                        </h1>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-4 md:px-6 bg-white">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                            {/* Left Column - Large Title */}
                            <div className="lg:col-span-4 space-y-4">
                                <p className="text-sm font-bold uppercase tracking-widest text-[#B49E94]">General</p>
                                <h2 className="text-4xl font-serif font-bold text-primary leading-tight">
                                    Frequently Asked Questions
                                </h2>
                            </div>

                            {/* Right Column - Accordion */}
                            <div className="lg:col-span-8">
                                <Accordion type="single" collapsible className="w-full space-y-2">
                                    {faqs.map((faq, index) => (
                                        <AccordionItem key={index} value={`item-${index}`} className="border-none">
                                            <AccordionTrigger className="text-left text-lg font-bold py-4 px-0 hover:no-underline hover:text-primary/60 transition-colors border-t border-gray-100">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-6 pt-2">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-[#EBE3E0] py-24 px-4 md:px-6 text-center">
                    <div className="container mx-auto space-y-6">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                            Are you ready to work with Skeleton Key?
                        </h2>
                        <div className="pt-4">
                            <Button variant="outline" className="h-12 px-8 text-lg border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-full">
                                Book a Consultation Call
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
