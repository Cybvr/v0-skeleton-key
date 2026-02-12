import Image from "next/image"
import Header from "@/app/common/header"
import Footer from "@/app/common/footer"
import { Button } from "@/components/ui/button"

export default function AgentsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1">

                {/* Hero Section */}
                <section className="bg-[#EBE3E0] py-20 px-4 md:px-6">
                    <div className="container mx-auto text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-primary">For Agents</h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Unlock more and better deals for your clients
                        </p>
                    </div>
                </section>

                {/* Listing Agents Section */}
                <section className="py-20 px-4 md:px-6 bg-white">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">Listing Agents</h2>
                                <div className="space-y-4">
                                    <p className="text-xl font-bold text-primary">No more price cuts, no more sitting on the market</p>
                                    <p className="text-muted-foreground text-lg">
                                        Is your listing still sitting on the market? Tired of price cuts?
                                        Attract buyers and get your clients the price they want!
                                        Skeleton Key will get your client&apos;s property sold, and get you paid.
                                    </p>
                                </div>
                            </div>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/agents-listing-strategy.jpg"
                                    alt="Listing Agent looking at tablet"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Listing Performance Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1: Residential Home */}
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border group">
                                <div className="relative h-48 bg-gray-200">
                                    <Image
                                        src="/images/agents-residential-home.jpg"
                                        alt="Residential Home"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-2 py-1 rounded">Listed for: 120 Days</div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <h3 className="font-serif text-xl font-bold">Residential Home</h3>
                                    <div className="space-y-1">
                                        <div className="text-sm text-green-600 font-medium">Sale price with Skeleton Key</div>
                                        <div className="text-3xl font-bold text-blue-900">$775,000</div>
                                        <div className="text-xs text-muted-foreground">+ interest</div>
                                    </div>
                                    <div className="pt-2 border-t text-sm">
                                        <span className="text-muted-foreground">List Price:</span>
                                        <span className="ml-2 font-medium">$700,000</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: 80 Unit Apartment Complex */}
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border group">
                                <div className="relative h-48 bg-gray-200">
                                    <Image
                                        src="/images/agents-apartment-complex.jpg"
                                        alt="80 Unit Apartment Complex"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-2 py-1 rounded">Listed for: 45 Days</div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <h3 className="font-serif text-xl font-bold text-wrap">80 Unit Apartment Complex</h3>
                                    <div className="space-y-1">
                                        <div className="text-sm text-green-600 font-medium">Sale price with Skeleton Key</div>
                                        <div className="text-3xl font-bold text-blue-900">$1,250,000</div>
                                        <div className="text-xs text-muted-foreground">+ interest</div>
                                    </div>
                                    <div className="pt-2 border-t text-sm">
                                        <span className="text-muted-foreground">List Price:</span>
                                        <span className="ml-2 font-medium">$1,145,000</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Raw/Ranch Land */}
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border group">
                                <div className="relative h-48 bg-gray-200">
                                    <Image
                                        src="/images/agents-ranch-land.jpg"
                                        alt="Raw/Ranch Land"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">Price Cut: $50,000 (July 1st)</div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <h3 className="font-serif text-xl font-bold">Raw/Ranch Land</h3>
                                    <div className="space-y-1">
                                        <div className="text-sm text-green-600 font-medium">Sale price with Skeleton Key</div>
                                        <div className="text-3xl font-bold text-blue-900">$850,000</div>
                                        <div className="text-xs text-muted-foreground">+ interest</div>
                                    </div>
                                    <div className="pt-2 border-t text-sm">
                                        <span className="text-muted-foreground">List Price:</span>
                                        <span className="ml-2 font-medium">$770,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Buyers' Agents Section */}
                <section className="py-20 px-4 md:px-6 bg-muted/30">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                                <Image
                                    src="/images/agents-buyers-meeting.jpg"
                                    alt="Buyers Agent meeting with client"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-6 order-1 lg:order-2">
                                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">Buyers&apos; Agents</h2>
                                <div className="space-y-4">
                                    <p className="text-xl font-bold text-primary">Help your clients find a property the can afford.</p>
                                    <p className="text-muted-foreground text-lg">
                                        Interest rates making real estate too expensive for your buyers?
                                        Help them save on monthly payments!
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Buyer Savings Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1: Residential Home */}
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border group">
                                <div className="relative h-48 bg-gray-200">
                                    <Image
                                        src="/images/agents-residential-home.jpg"
                                        alt="Residential Home"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 space-y-4">
                                    <h3 className="font-serif text-xl font-bold">Residential Home</h3>
                                    <div className="space-y-1">
                                        <div className="text-sm text-green-600 font-medium">Mortgage Payment with Skeleton Key</div>
                                        <div className="text-3xl font-bold text-blue-900">$2,397/mo</div>
                                        <div className="text-xs text-muted-foreground">Estimated</div>
                                    </div>
                                    <div className="pt-2 border-t text-sm">
                                        <div className="text-muted-foreground">Mortgage Payment with Bank Loan</div>
                                        <div className="font-medium">$3,527/mo</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: 80 Unit Apartment Complex */}
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border group">
                                <div className="relative h-48 bg-gray-200">
                                    <Image
                                        src="/images/agents-apartment-complex.jpg"
                                        alt="80 Unit Apartment Complex"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 space-y-4">
                                    <h3 className="font-serif text-xl font-bold text-wrap">80 Unit Apartment Complex</h3>
                                    <div className="space-y-1">
                                        <div className="text-sm text-green-600 font-medium">Mortgage Payment with Skeleton Key</div>
                                        <div className="text-3xl font-bold text-blue-900">$3,987/mo</div>
                                        <div className="text-xs text-muted-foreground">Estimated</div>
                                    </div>
                                    <div className="pt-2 border-t text-sm">
                                        <div className="text-muted-foreground">Mortgage Payment with Bank Loan</div>
                                        <div className="font-medium">$4,402/mo</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Raw/Ranch Land */}
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border group">
                                <div className="relative h-48 bg-gray-200">
                                    <Image
                                        src="/images/agents-ranch-land.jpg"
                                        alt="Raw/Ranch Land"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 space-y-4">
                                    <h3 className="font-serif text-xl font-bold">Raw/Ranch Land</h3>
                                    <div className="space-y-1">
                                        <div className="text-sm text-green-600 font-medium">Mortgage Payment with Skeleton Key</div>
                                        <div className="text-3xl font-bold text-blue-900">$2,694/mo</div>
                                        <div className="text-xs text-muted-foreground">Estimated</div>
                                    </div>
                                    <div className="pt-2 border-t text-sm">
                                        <div className="text-muted-foreground">Mortgage Payment with Bank Loan</div>
                                        <div className="font-medium">$3,410/mo</div>
                                    </div>
                                </div>
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
                                Get Started
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
