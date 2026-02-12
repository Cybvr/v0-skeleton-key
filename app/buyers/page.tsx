import Image from "next/image"
import Header from "@/app/common/header"
import Footer from "@/app/common/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Play, HelpCircle } from "lucide-react"

export default function BuyersPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1">

                {/* Hero Section */}
                <section className="bg-[#EBE3E0] py-20 px-4 md:px-6">
                    <div className="container mx-auto text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-primary">For Buyers</h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Skeleton Key&apos;s solutions make real estate buying accessible and affordable, making property ownership more attainable than ever.
                        </p>
                    </div>
                </section>

                {/* Property Listings Section */}
                <section className="py-16 px-4 md:px-6 bg-muted/30">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Residential Home */}
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border">
                            <div className="relative h-48 bg-gray-200">
                                <Image
                                    src="https://placehold.co/600x400/png?text=Residential+Home"
                                    alt="Residential Home"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-2 py-1 rounded">Residential Home</div>
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="font-serif text-xl font-bold font-sans">Residential Home</h3>
                                <div className="text-sm text-green-600 font-medium">Monthly payment estimated as low as:</div>
                                <div className="text-3xl font-bold text-blue-900">$2,397/mo</div>
                                <div className="text-xs text-muted-foreground uppercase leading-relaxed">
                                    Based on current market estimates for this property type and location.
                                </div>
                            </div>
                        </div>

                        {/* Card 2: 80-Unit Apartment Complex */}
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border">
                            <div className="relative h-48 bg-gray-200">
                                <Image
                                    src="https://placehold.co/600x400/png?text=Apartment+Complex"
                                    alt="80-Unit Apartment Complex"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-2 py-1 rounded">80 Unit Apartment Complex</div>
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="font-serif text-xl font-bold font-sans">80 Unit Apartment Complex</h3>
                                <div className="text-sm text-green-600 font-medium">Monthly payment estimated as low as:</div>
                                <div className="text-3xl font-bold text-blue-900">$3,987/mo</div>
                                <div className="text-xs text-muted-foreground uppercase leading-relaxed">
                                    Based on current market estimates for this property type and location.
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Raw/Ranch Land */}
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-border">
                            <div className="relative h-48 bg-gray-200">
                                <Image
                                    src="https://placehold.co/600x400/png?text=Raw+Ranch+Land"
                                    alt="Raw/Ranch Land"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-2 py-1 rounded">Raw/Ranch Land</div>
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="font-serif text-xl font-bold font-sans">Raw/Ranch Land</h3>
                                <div className="text-sm text-green-600 font-medium">Monthly payment estimated as low as:</div>
                                <div className="text-3xl font-bold text-blue-900">$2,694/mo</div>
                                <div className="text-xs text-muted-foreground uppercase leading-relaxed">
                                    Based on current market estimates for this property type and location.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem Statement Section */}
                <section className="py-12 px-4 md:px-6 bg-white text-center">
                    <div className="container mx-auto space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Can&apos;t afford to buy?</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Interest rates and loan costs are too high. Get a discount on payments.
                        </p>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-16 px-4 md:px-6 bg-white">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-center mb-10">With Skeleton Key</h2>

                        <div className="bg-[#F5B05D] rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg relative overflow-hidden text-white">
                            <div className="text-2xl font-serif font-bold mb-8 text-center max-w-lg mx-auto">
                                Save thousands on loan costs and monthly payments
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm md:text-base border-b border-white/40 pb-4 mb-4 font-bold">
                                <div className="text-center">Traditional Loan</div>
                                <div className="text-center">With Skeleton Key</div>
                            </div>

                            {/* Rows */}
                            {[
                                { trad: "$10,000", key: "$1,500" },
                                { trad: "$3,500", tradThrough: true, key: "$1,200", keyBold: true },
                                { trad: "$2,800", tradThrough: true, key: "$2,200", keyBold: true },
                                { trad: "7.5%", key: "4.5%" },
                                { trad: "$45,000", key: "$8,500" },
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-2 gap-4 py-3 border-b border-white/20 last:border-0">
                                    <div className={`text-center ${row.tradThrough ? 'line-through decoration-red-500' : ''}`}>{row.trad}</div>
                                    <div className={`text-center ${row.keyBold ? 'font-bold' : ''}`}>{row.key}</div>
                                </div>
                            ))}

                            <div className="grid grid-cols-2 gap-4 py-3 font-bold text-lg md:text-xl pt-6">
                                <div className="text-center opacity-80">$705,000</div>
                                <div className="text-center text-white">$841,500 (+19.3%)</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="py-16 px-4 md:px-6 bg-muted/20">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                Why Choose Skeleton Key?
                            </h2>
                            <p className="text-muted-foreground text-lg uppercase font-semibold text-sm tracking-wider">
                                Traditional Loans Are Costly and Out of Reach
                            </p>
                            <p className="text-muted-foreground text-lg">
                                Skeleton Key helps you get a more affordable monthly payment.
                            </p>
                        </div>
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl group cursor-pointer">
                            <Image
                                src="https://placehold.co/800x450/png?text=Why+Choose+Skeleton+Key+Video"
                                alt="Video Poster"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Play className="fill-current text-[#F5B05D] w-6 h-6 ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Calculator Section */}
                <section className="py-20 px-4 md:px-6 bg-[#F5F5F0]">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold">How much could you save?</h2>
                            <p className="text-muted-foreground">
                                Try our custom calculator to find out how Skeleton Key can help you save thousand on your property purchase. Enter your details to see a breakdown of potential savings.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border border-border">
                            <h3 className="text-3xl font-serif font-bold mb-6 text-center">Buyer Calculator</h3>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="purchase-price">Purchase Price ($)</Label>
                                    <Input id="purchase-price" placeholder="e.g. 500000" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="down-payment">Down Payment ($)</Label>
                                    <Input id="down-payment" placeholder="e.g. 100000" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="loan-term">Loan Term (Years)</Label>
                                    <Select>
                                        <SelectTrigger id="loan-term">
                                            <SelectValue placeholder="Select term" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="15">15 Years</SelectItem>
                                            <SelectItem value="30">30 Years</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="interest-rate">Target Interest Rate (%)</Label>
                                    <Input id="interest-rate" placeholder="e.g. 4.5" />
                                </div>

                                <div className="flex items-center space-x-2 pt-2">
                                    <Checkbox id="terms-buyers" />
                                    <label
                                        htmlFor="terms-buyers"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        I agree to the Terms of Service
                                    </label>
                                </div>

                                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4 h-12 text-lg">
                                    Calculate
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-4 md:px-6 bg-white">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-6">
                                <HelpCircle className="w-full h-full text-muted/30 absolute -top-4 -left-4" />
                                <div className="relative z-10 text-8xl md:text-9xl font-serif text-primary/10">?</div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                Is Skeleton Key right for me?
                            </h2>
                            <p className="text-muted-foreground">
                                See how we make property ownership more accessible.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-2 items-start text-sm text-muted-foreground">
                                    <span className="w-2 h-2 mt-1.5 rounded-full bg-primary shrink-0" />
                                    Struggling to secure traditional loans but have high income and good track record.
                                </li>
                                <li className="flex gap-2 items-start text-sm text-muted-foreground">
                                    <span className="w-2 h-2 mt-1.5 rounded-full bg-primary shrink-0" />
                                    Looking for flexibility in your payment structure and lower upfront loan costs.
                                </li>
                                <li className="flex gap-2 items-start text-sm text-muted-foreground">
                                    <span className="w-2 h-2 mt-1.5 rounded-full bg-primary shrink-0" />
                                    Want to maximize your buying power and get into a home sooner through creative financing.
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            {/* Card 1 */}
                            <div className="bg-sky-100/50 p-6 rounded-lg border border-sky-200">
                                <h3 className="font-bold text-lg mb-2 text-sky-900">Low Costs</h3>
                                <p className="text-sm text-sky-800/80">
                                    Our structure eliminates high upfront fees and allows for lower interest rates through community participation.
                                </p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-sky-100/50 p-6 rounded-lg border border-sky-200">
                                <h3 className="font-bold text-lg mb-2 text-sky-900">Flexibility</h3>
                                <p className="text-sm text-sky-800/80">
                                    Adjust payments as your financial situation changes. We offer more options than any traditional lender.
                                </p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-sky-100/50 p-6 rounded-lg border border-sky-200">
                                <h3 className="font-bold text-lg mb-2 text-sky-900">Simplicity</h3>
                                <p className="text-sm text-sky-800/80">
                                    A streamlined application process focused on your future potential, not just your past credit history.
                                </p>
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
