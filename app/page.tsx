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
import ReelsSection from './components/global/ReelsSection'
import UpcomingToursSlider from './components/global/UpcomingToursSlider'
import DestinationsSlider from './components/global/DestinationSlider'


function page() {
  return (
    <main>
      <Hero />
      <ServiceCards />
      <UpcomingToursSlider />
      <div className='overflow-hidden'> 
<DestinationsSlider />

      </div>
      <OfferBanner />
      <div className='overflow-hidden'>
      <ReelsSection />

      </div>
      <WhyChooseUs />
      <div className='overflow-hidden'>
      <ReviewsSection />

      </div>
      <FaqSection />
      <div className='overflow-hidden'>
      <BlogSection />

      </div>
    </main>
  )
}

export default page
