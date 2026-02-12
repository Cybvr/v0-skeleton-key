
import Header from "@/app/common/header"
import Footer from "@/app/common/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CtaSection from "@/components/sections/cta"
import { Phone, Mail, User } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-[#edeae6] px-4 py-20 lg:py-32 text-center">
                    <div className="container mx-auto max-w-4xl space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-serif">
                            About
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
                            Revolutionizing the Way You Buy and Sell Real Estate Through Innovative Financing Solutions
                        </p>
                    </div>
                </section>

                {/* Our Mission Cards */}
                <section className="bg-background py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">Our Mission</h2>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                            <Card className="bg-[#f2f2f2] border-none shadow-none">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold">For Buyers</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-muted-foreground text-base">
                                        Help buyers purchase real estate with more affordable monthly payments by cutting out the banks.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Card className="bg-[#f2f2f2] border-none shadow-none">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold">For Sellers</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-muted-foreground text-base">
                                        Help sellers earn more money when they sell their properties by cutting out the bank.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Card className="bg-[#f2f2f2] border-none shadow-none">
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold">For Agents</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-muted-foreground text-base">
                                        Provide innovative tools to close more deals and better serve clients in a changing market.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Company Mission Details */}
                <section className="bg-background pb-16 lg:pb-24">
                    <div className="container mx-auto px-4 text-center">
                        <div className="mx-auto max-w-4xl space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
                                We are a company with a mission
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                You are here because you want to find the best deal on homes in your area. Let us help you.
                            </p>

                            <div className="mt-12 grid gap-8 text-left text-muted-foreground md:grid-cols-2">
                                <p>
                                    Skeleton Key is revolutionizing real estate transactions by enabling direct seller financing. We cut out traditional banks, allowing buyers to secure more affordable monthly payments and sellers to potentially earn more from their property sales. Our all-in-one platform provides everything needed for these innovative transactions: legally vetted documents, underwriting services, loan servicing, and expert guidance
                                </p>
                                <p>
                                    throughout the process. Whether you're a buyer looking for more flexible terms or a seller aiming to maximize your property's value, Skeleton Key unlocks new possibilities in real estate. Join us in transforming the way real estate is bought and sold, making the process more accessible, affordable, and profitable for everyone involved.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="bg-background py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto mb-16 max-w-3xl text-center">
                            <h2 className="text-2xl font-normal leading-tight text-foreground sm:text-3xl md:text-4xl px-4">
                                We are a team of licensed, experienced agents who work together to help you find the perfect property
                            </h2>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8">
                            {/* Team Member 1 */}
                            <div className="w-full max-w-xs text-center border border-border rounded-xl p-8">
                                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-black mb-6 flex items-center justify-center">
                                    <User className="h-20 w-20 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">Maci Watson</h3>
                                <p className="text-sm font-medium text-muted-foreground">CEO</p>
                            </div>

                            {/* Team Member 2 */}
                            <div className="w-full max-w-xs text-center border border-border rounded-xl p-8">
                                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-black mb-6 flex items-center justify-center">
                                    <User className="h-20 w-20 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">David Colmar</h3>
                                <p className="text-sm font-medium text-muted-foreground">COO</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Valuation Form Section */}
                <section className="bg-[#eaf4f4] py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                            {/* Left Column: Text */}
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
                                    Request a free valuation of your property
                                </h2>
                                <div className="space-y-6 text-muted-foreground">
                                    <p>
                                        Our real estate company has a number of luxury and exclusive listings that are perfect for international clients.
                                    </p>

                                    <div className="space-y-4 pt-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background">
                                                <Mail className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-foreground">Contact us</p>
                                                <p className="text-sm text-primary underline">hello@skeletonkey.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background">
                                                <Phone className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-foreground">Call us</p>
                                                <p className="text-sm">+1 (555) 054-3210</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Form */}
                            <div className="rounded-xl bg-white p-8 shadow-sm">
                                <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-foreground">Personal Information</h3>
                                <form className="grid gap-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="col-span-2 sm:col-span-1">
                                            <Input placeholder="Street" className="bg-background" />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            {/* This could be Unit # or similar based on layout, simplified here */}
                                            <Input placeholder="Unit" className="bg-background" />
                                        </div>
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <Input placeholder="First name" className="bg-background" />
                                        <Input placeholder="Last name" className="bg-background" />
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <Input type="email" placeholder="Email address" className="bg-background" />
                                        <Input type="tel" placeholder="Phone number" className="bg-background" />
                                    </div>

                                    <Button className="mt-4 w-full bg-[#1e2b3e] hover:bg-[#2a3b55] text-white">
                                        Submit
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <CtaSection />
            </main>
            <Footer />
        </div>
    )
}
