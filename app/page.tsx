import React from 'react'
import Hero from './components/HeroSection'
import ServiceCards from './components/ServiceCards'
import PackageCard from './components/PackageCard'
import DestinationCard from './components/global/DestinationCard'
import OfferBanner from './components/global/OfferBanner'
import WhyChooseUs from './components/global/WhyChooseUs'
import ReviewsSection from './components/global/ReviewsSection'
import FaqSection from './components/global/FaqSection'
import BlogSection from './components/global/BlogSection'

function page() {
  return (
    <main>
      <Hero />
      <ServiceCards />
      <PackageCard />
      <DestinationCard  />
      <OfferBanner />
      <WhyChooseUs />
      <ReviewsSection />
      <FaqSection />
      <BlogSection />
    </main>
  )
}

export default page
