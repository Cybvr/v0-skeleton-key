"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "For Sellers", href: "#sellers" },
  { label: "For Buyers", href: "#buyers" },
  { label: "For Agents", href: "#agents" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#blog" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-foreground">
              <rect width="28" height="28" rx="4" fill="currentColor" />
              <path d="M8 8h4v12H8V8zm8 0h4v12h-4V8z" fill="hsl(var(--background))" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-foreground">SkeletonKey</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
            Contact Us
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-2 w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
