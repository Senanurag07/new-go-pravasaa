import React from 'react'
import DestinationHero from '../components/global/DestinationHero'
import { Package } from 'lucide-react'
import PackagesGrid from '../components/global/DestinationCardgrid'
import WhyChooseUs from '../components/global/WhyChooseUs'
import DestinationsSlider from '../components/global/DestinationSlider'
import ReviewsSection from '../components/global/ReviewsSection'
import FaqSection from '../components/global/FaqSection'
function DestinationPage() {
  return (
    <div>
      <DestinationHero />
      <PackagesGrid />
      <WhyChooseUs />
      <DestinationsSlider />
      <ReviewsSection />
      <FaqSection />
    </div>
  )
}

export default DestinationPage
