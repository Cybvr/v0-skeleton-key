import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  About: [
    { label: "For Sellers", href: "/sellers" },
    { label: "For Buyers", href: "/buyers" },
    { label: "For Agents", href: "/agents" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <Image
                src="/images/sklogo.svg"
                alt="Skeleton Key Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Skeleton Key revolutionizes real estate buying and selling by removing traditional banks, allowing sellers to earn more and buyers to pay less monthly.
            </p>
            <div className="flex gap-3">
              {["X", "In", "f", "ig"].map((icon) => (
                <Link key={icon} href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs text-muted-foreground hover:text-foreground transition-colors">
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">About</h4>
            <ul className="space-y-2">
              {footerLinks.About.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold text-foreground">Subscribe to our newsletter</h4>
            <p className="mb-4 text-sm text-muted-foreground">
              Stay tuned with our latest news, properties and future discounts.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="max-w-xs" />
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            All rights reserved &copy; 2024, SkeletonKey. For further details see our Legal Disclosures. By using this website, you accept our{" "}
            <Link href="#" className="underline hover:text-foreground">Terms</Link> and{" "}
            <Link href="#" className="underline hover:text-foreground">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </footer>
  )
}
