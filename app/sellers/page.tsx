import Image from "next/image"
import Link from "next/link"
import Header from "@/app/common/header"
import Footer from "@/app/common/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Play } from "lucide-react"

export default function SellersPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1">

                {/* Hero Section */}
                <section className="bg-[#EBE3E0] py-20 px-4 md:px-6">
                    <div className="container mx-auto text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-primary">For Sellers</h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Unlock the Value of Real Estate With Our Expert Selling Solutions.
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
                                <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-2 py-1 rounded">Private Office</div>
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="font-serif text-xl font-bold">Residential Home</h3>
                                <div className="text-sm text-green-600 font-medium">Asking - Market Value</div>
                                <div className="text-3xl font-bold text-blue-900">$775,000</div>
                                <div className="text-xs text-muted-foreground uppercase">Estimated</div>

                                <div className="pt-2 border-t mt-2">
                                    <div className="text-sm text-gray-500">With Skeleton Key</div>
                                    <div className="font-bold">$790,000</div>
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
                                <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-2 py-1 rounded">Residential</div>
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="font-serif text-xl font-bold">80-Unit Apartment Complex</h3>
                                <div className="text-sm text-green-600 font-medium">Asking - Market Value</div>
                                <div className="text-3xl font-bold text-blue-900">$1,250,000</div>
                                <div className="text-xs text-muted-foreground uppercase">Estimated</div>

                                <div className="pt-2 border-t mt-2">
                                    <div className="text-sm text-gray-500">With Skeleton Key</div>
                                    <div className="font-bold">$1,350,000</div>
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
                                <div className="absolute top-4 left-4 bg-black/80 text-white text-xs px-2 py-1 rounded">Land - Commercial</div>
                            </div>
                            <div className="p-6 space-y-4">
                                <h3 className="font-serif text-xl font-bold">Raw/Ranch Land</h3>
                                <div className="text-sm text-green-600 font-medium">Asking - Market Value</div>
                                <div className="text-3xl font-bold text-blue-900">$850,000</div>
                                <div className="text-xs text-muted-foreground uppercase">Estimated</div>

                                <div className="pt-2 border-t mt-2">
                                    <div className="text-sm text-gray-500">With Skeleton Key</div>
                                    <div className="font-bold">$920,000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Questions Section */}
                <section className="py-12 px-4 md:px-6 bg-white">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-muted/50 p-6 rounded-lg text-center font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            Property not selling?
                        </div>
                        <div className="bg-muted/50 p-6 rounded-lg text-center font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            Need to discount your sale price?
                        </div>
                        <div className="bg-muted/50 p-6 rounded-lg text-center font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            Forced to make big concessions to attract buyers?
                        </div>
                        <div className="bg-muted/50 p-6 rounded-lg text-center font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            Can't get the price you want?
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-16 px-4 md:px-6 bg-white">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-center mb-10">With Skeleton Key</h2>

                        <div className="bg-[#EBE8E3] rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg relative overflow-hidden">
                            <div className="text-2xl font-serif font-bold mb-8 text-center max-w-lg mx-auto">
                                Earn as much as 10% more on the sale of your property
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-sm md:text-base border-b border-gray-400 pb-4 mb-4 font-bold text-gray-700">
                                <div className="text-center">Traditional Sale</div>
                                <div className="text-center">With Skeleton Key</div>
                            </div>

                            {/* Row 1 */}
                            <div className="grid grid-cols-2 gap-4 py-3 border-b border-gray-300">
                                <div className="text-center text-gray-600 line-through decoration-red-500">$750,000</div>
                                <div className="text-center font-bold">$850,000</div>
                            </div>
                            {/* Row 2 */}
                            <div className="grid grid-cols-2 gap-4 py-3 border-b border-gray-300">
                                <div className="text-center text-gray-600 line-through decoration-red-500">$680,000</div>
                                <div className="text-center font-bold">$780,000</div>
                            </div>
                            {/* Row 3 */}
                            <div className="grid grid-cols-2 gap-4 py-3 border-b border-gray-300">
                                <div className="text-center text-gray-600 line-through decoration-red-500">$590,000</div>
                                <div className="text-center font-bold">$650,000</div>
                            </div>
                            {/* Row 4 */}
                            <div className="grid grid-cols-2 gap-4 py-3 border-b border-gray-300">
                                <div className="text-center text-gray-600 line-through decoration-red-500">6%</div>
                                <div className="text-center font-bold">1%</div>
                            </div>
                            {/* Row 5 */}
                            <div className="grid grid-cols-2 gap-4 py-3 border-b border-gray-300">
                                <div className="text-center text-gray-600 line-through decoration-red-500">$45,000</div>
                                <div className="text-center font-bold">$8,500</div>
                            </div>
                            {/* Row 6 */}
                            <div className="grid grid-cols-2 gap-4 py-3 font-bold text-lg md:text-xl">
                                <div className="text-center text-gray-600">$705,000</div>
                                <div className="text-center text-green-700">$841,500 (+19.3%)</div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Video / Info Section */}
                <section className="py-16 px-4 md:px-6 bg-muted/20">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                Interest rates and loan costs are too high.
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Right now, it's hard to sell your property. Buyers can't qualify, banks are tightening their policies.
                            </p>
                        </div>
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl group cursor-pointer">
                            <Image
                                src="https://placehold.co/800x450/png?text=Video+Thumbnail"
                                alt="Video Poster"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Play className="fill-current text-primary w-6 h-6 ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Calculator Section */}
                <section className="py-20 px-4 md:px-6 bg-[#F5F5F0]">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold">How much could you earn?</h2>
                            <p className="text-muted-foreground">
                                These numbers indicate market estimates. Your final offer depends on property condition, market dynamics, and other factors. Use our calculator to see estimates based on your specific situation.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border border-border">
                            <h3 className="text-3xl font-serif font-bold mb-6 text-center">Seller Calculator</h3>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="selling-price">Selling Price ($)</Label>
                                    <Input id="selling-price" placeholder="e.g. 500000" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="existing-mortgage">Existing Mortgage ($)</Label>
                                    <Input id="existing-mortgage" placeholder="e.g. 300000" />
                                    <p className="text-xs text-muted-foreground">Enter remaining balance on your mortgage.</p>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                                    <Input id="interest-rate" placeholder="e.g. 3.5" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="loan-term">Loan Term (Years)</Label>
                                    <Input id="loan-term" placeholder="e.g. 30" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="property-condition">Property Condition</Label>
                                    <Select>
                                        <SelectTrigger id="property-condition">
                                            <SelectValue placeholder="Select condition" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="excellent">Excellent</SelectItem>
                                            <SelectItem value="good">Good</SelectItem>
                                            <SelectItem value="fair">Fair</SelectItem>
                                            <SelectItem value="poor">Poor</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-center space-x-2 pt-2">
                                    <Checkbox id="terms" />
                                    <label
                                        htmlFor="terms"
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

                {/* Testimonials / Info Cards */}
                <section className="py-20 px-4 md:px-6 bg-white">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            {/* Placeholder for small logo/icon */}
                            <div className="flex items-center gap-2 text-primary font-bold text-xl">
                                <span className="w-8 h-8 bg-primary rounded-full"></span> SKELETON KEY
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                                Is Skeleton Key right for me?
                            </h2>
                            <p className="text-muted-foreground">
                                See how we stack up against traditional selling methods.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Card 1 */}
                            <div className="bg-sky-100/50 p-6 rounded-lg border border-sky-200">
                                <h3 className="font-bold text-lg mb-2 text-sky-900">Property Equity</h3>
                                <p className="text-sm text-sky-800/80">
                                    Maximize your equity through our unique selling strategies. No massive fees eating into your profit.
                                </p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-sky-100/50 p-6 rounded-lg border border-sky-200">
                                <h3 className="font-bold text-lg mb-2 text-sky-900">Flexible Layouts</h3>
                                <p className="text-sm text-sky-800/80">
                                    Our terms are designed to be flexible, allowing for creative financing and easier exits if needed.
                                </p>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-sky-100/50 p-6 rounded-lg border border-sky-200">
                                <h3 className="font-bold text-lg mb-2 text-sky-900">Long Term Focus</h3>
                                <p className="text-sm text-sky-800/80">
                                    Our approach builds more money on the sale of your property by structuring deals that create long-term value.
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
