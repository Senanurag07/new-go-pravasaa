"use client";

import Image from "next/image";
import Link from "next/link";

import { MapPin, Clock, Calendar, Phone, MessageCircle } from "lucide-react";
import VisaGallery from "../components/VisaGallery";
import FAQSection from "../components/global/FAQS";

export default function VisaDetailsPage() {
  return (
    <section className="w-full bg-[#f3e8e2] pb-20">

<div className=" max-container pt-6 sm:pt-8 lg:pt-12 ">
      <div className="relative w-full h-[40vh] md:h-[55vh]  rounded-2xl overflow-hidden">
        <Image
          src="/assets/all-treks.jpg"
          alt="Dubai Visa"
          fill
          priority
          className="object-cover"
        />
      </div></div>


      <div className="max-container mt-16">

        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">


          <div className="space-y-10">

            <div className="bg-white rounded-3xl p-10 shadow-sm">

              <h1 className="text-3xl md:text-4xl font-semibold mb-6">
                Dubai (UAE) Visa for Indians
              </h1>

              <div className="border-t border-orange-300 mb-8" />

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                <Feature icon={<MapPin />} label="Visa Type" value="Pickup & Drop" />
                <Feature icon={<Clock />} label="Visa Duration" value="30 Days" />
                <Feature icon={<Calendar />} label="Visa Validity" value="60 Days" />
                <Feature icon={<MapPin />} label="Entry Type" value="Single Entry" />
                <Feature icon={<Clock />} label="Processing Time" value="3-4 Days" />

              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm">

              <h2 className="text-2xl font-semibold mb-4">
                Dubai Visa Overview:
              </h2>

              <p className="text-neutral-600 leading-relaxed">
                Embark on a journey through Dubai’s stunning landscapes and vibrant cityscapes.
                From the iconic Burj Khalifa to the bustling souks, each stop offers a unique
                blend of luxury and tradition.
              </p>

              <button className="text-orange-500 font-medium mt-6 hover:underline">
                View More
              </button>

            </div>
<VisaGallery />
<FAQSection />
          </div>

<div className="relative">

  <div className="sticky top-24">

    <div className="bg-white rounded-3xl shadow-md p-8 space-y-10">
      <div>

        <h3 className="text-2xl font-semibold">
          30 Days Visa
        </h3>

        <p className="text-neutral-500 mb-6">
          Start Your Application Now
        </p>

        <div className="flex gap-4">

          <Link
            href="/apply"
            className="
              flex-1
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-medium
              rounded-xl
              text-center
              py-4
              transition
            "
          >
            Start Application
          </Link>

          <a
            href="https://wa.me/919900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-green-500
              hover:bg-green-600
              text-white
              rounded-xl
              flex items-center justify-center
              w-14
              transition
            "
          >
            <MessageCircle size={22} />
          </a>

        </div>

      </div>

      <div className="border-t border-neutral-200" />

      <div>

        <h4 className="text-lg font-semibold mb-4">
          Why Choose Go-Pravasa?
        </h4>

        <ul className="space-y-3 text-neutral-600">
          <li>• Quick & Easy Process</li>
          <li>• Fast Documentation</li>
          <li>• Trusted Support</li>
        </ul>

      </div>

    </div>

  </div>

</div>

        </div>

      </div>

    </section>
  );
}


function Feature({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">

      <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
        {icon}
      </div>

      <div>
        <p className="text-sm text-neutral-500">
          {label} :
        </p>
        <p className="font-semibold">
          {value}
        </p>
      </div>

    </div>
  );
}