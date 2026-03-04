import React from 'react'
import ProductGallery from '../components/global/ProductGallery'
import ProductSection from '../components/global/ProdcutSection'
import ReviewsSection from '../components/global/ReviewsSection'
import FAQSection from '../components/global/FAQS'

function page() {
  return (
    <main>
      <ProductGallery />
      <ProductSection  />
      <ReviewsSection />
      <FAQSection />
    </main>
  )
}

export default page
