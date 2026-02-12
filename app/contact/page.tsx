import Header from "@/app/common/header"
import Footer from "@/app/common/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { MapPin, Phone, Instagram, Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1">

                {/* Hero Section */}
                <section className="bg-[#EBE3E0] py-20 px-4 md:px-6">
                    <div className="container mx-auto">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-primary mb-4">Contact</h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                            Unlock the power of Skeleton Key - a game-changing way to finance your next purchase with lower monthly payments.
                        </p>
                    </div>
                </section>

                {/* Form Section */}
                <section className="py-20 px-4 md:px-6 bg-white">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                            {/* Left Column - Form */}
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Get in touch with us</h2>
                                    <p className="text-muted-foreground italic">Find the best deal on homes in your area. Let us help you.</p>
                                </div>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <Select>
                                            <SelectTrigger className="w-full bg-slate-50 border-none h-12">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="buyer">I am a Buyer</SelectItem>
                                                <SelectItem value="seller">I am a Seller</SelectItem>
                                                <SelectItem value="agent">I am an Agent</SelectItem>
                                                <SelectItem value="other">Other Inquiry</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="md:col-span-2">
                                        <Input placeholder="Name" className="bg-slate-50 border-none h-12" />
                                    </div>

                                    <div>
                                        <Input placeholder="Email" type="email" className="bg-slate-50 border-none h-12" />
                                    </div>
                                    <div>
                                        <Input placeholder="Phone" type="tel" className="bg-slate-50 border-none h-12" />
                                    </div>

                                    <div>
                                        <Input placeholder="City" className="bg-slate-50 border-none h-12" />
                                    </div>
                                    <div>
                                        <Input placeholder="Zip Code" className="bg-slate-50 border-none h-12" />
                                    </div>

                                    <div className="md:col-span-2">
                                        <Textarea
                                            placeholder="Message"
                                            className="bg-slate-50 border-none min-h-[150px] resize-none"
                                        />
                                    </div>

                                    <div className="md:col-span-2 space-y-4 pt-2">
                                        <p className="text-sm font-semibold text-primary">GDPR Agreement</p>
                                        <div className="flex items-start space-x-3">
                                            <Checkbox id="gdpr" className="mt-1" />
                                            <label
                                                htmlFor="gdpr"
                                                className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                                            >
                                                I consent to having this website store my submitted information
                                            </label>
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 lg:w-1/2 pt-4">
                                        <Button className="w-full bg-[#333333] hover:bg-[#222222] text-white h-12 text-md transition-all">
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                            </div>

                            {/* Right Column - Map & Contact Info */}
                            <div className="space-y-10 lg:pl-10">
                                {/* Map Placeholder */}
                                <div className="relative aspect-square md:aspect-video lg:aspect-square bg-muted rounded-lg overflow-hidden border border-border shadow-sm group">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.4878479361713!2d-96.77259168481545!3d32.85803898094689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9f7a9f9f9f9f%3A0x9f9f9f9f9f9f9f9f!2s4925%20Greenville%20Ave%20%23604%2C%20Dallas%2C%20TX%2075206!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Office Location"
                                    ></iframe>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-blue-900 shrink-0 mt-1" />
                                        <p className="text-blue-900 font-bold text-lg leading-tight">
                                            4925 Greenville Avenue, Suite 604 Dallas, Texas 75206
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="w-6 h-6 text-blue-900 shrink-0 mt-1" />
                                        <p className="text-blue-900 font-bold text-lg leading-tight">
                                            Phone: 214.885.3887
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-xs font-bold uppercase tracking-widest text-blue-900">Find us on</p>
                                    <div className="flex gap-4">
                                        {[Instagram, Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border border-blue-900 flex items-center justify-center cursor-pointer hover:bg-blue-900 hover:text-white transition-all text-blue-900">
                                                <Icon size={18} />
                                            </div>
                                        ))}
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
