'use client'
import Navbar              from '@/components/layout/Navbar'
import Footer              from '@/components/layout/Footer'
import HeroSection         from '@/components/sections/HeroSection'
import BusinessSection     from '@/components/sections/BusinessSection'
import PortfolioSection    from '@/components/sections/PortfolioSection'
import WhyChooseUsSection  from '@/components/sections/WhyChooseUsSection'
import ThankYouBanner      from '@/components/sections/ThankYouBanner'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BusinessSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <ThankYouBanner />
      </main>
      <Footer />
    </>
  )
}
