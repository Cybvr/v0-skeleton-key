import Header from "@/app/common/header"
import Footer from "@/app/common/footer"
import HeroSection from "@/components/sections/hero"
import PressSection from "@/components/sections/press"
import SellerBuyerSection from "@/components/sections/seller-buyer"
import WhatWeDoSection from "@/components/sections/what-we-do"
import GuideSection from "@/components/sections/guide"
import ComingSoonSection from "@/components/sections/coming-soon"
import FaqSection from "@/components/sections/faq"
import CtaSection from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PressSection />
        <SellerBuyerSection />
        <WhatWeDoSection />
        <GuideSection />
        <ComingSoonSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
