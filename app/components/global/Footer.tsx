"use client";

import Link from "next/link";
import { Headphones, Mail } from "lucide-react";

const SOCIAL_LINKS = {
  Facebook: "https://facebook.com",
  Instagram: "https://instagram.com",
  Linkedin: "https://linkedin.com",
  Twitter: "https://twitter.com",
};

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-neutral-900 text-white h-[92vh] pb-12   overflow-hidden">

      <div className="max-container mx-auto px-5 md:px-10 h-full flex flex-col justify-between">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 mt-6 md:mt-12 items-start">

          <h2 className="text-2xl md:text-5xl font-semibold leading-tight">
            Memories are Calling,
            <br />
            <span className="text-neutral-400">
              let’s find them together!
            </span>
          </h2>

          <div>
            <p className="text-neutral-400 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
              At Go Pravasa, we’re committed to providing stress-free travel
              experiences with a focus on comfort, safety, and convenience.
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4">
              {Object.entries(SOCIAL_LINKS).map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-neutral-500 rounded-full px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm hover:bg-white hover:text-black transition"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 my-6 md:my-12" />

        {/* Middle Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 text-sm md:text-base">

          {/* Office */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-6">
              Office Address
            </h4>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 leading-relaxed hover:text-white transition"
            >
              867/79, 4th Cross Rd,
              <br />
              Vijayanagar,
              <br />
              Bengaluru 560040
            </a>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-6">
              Company
            </h4>

            <ul className="space-y-2 md:space-y-4 text-neutral-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition">
                  Our Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-6">
              Policy
            </h4>

            <ul className="space-y-2 md:space-y-4 text-neutral-400">
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="/payment-policy" className="hover:text-white transition">
                  Payment Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cancellation-policy" className="hover:text-white transition">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Contact Strip */}
        <div className="mt-6 md:mt-16 border border-neutral-700 rounded-2xl overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-3 text-sm md:text-base">

            <div className="p-4 md:p-10 border-b md:border-b-0 md:border-r border-neutral-700">
              <h4 className="text-lg font-semibold mb-1">
                Get in Touch
              </h4>
              <p className="text-neutral-400 text-sm">
                Have questions?
              </p>
            </div>

            <a
              href="tel:+919901101912"
              className="p-4 md:p-10 border-b md:border-b-0 md:border-r border-neutral-700 flex items-center gap-4 md:gap-6 hover:bg-neutral-800 transition"
            >
              <Headphones className="text-neutral-400" size={22} />
              <div>
                <p className="text-neutral-400 text-xs md:text-sm">
                  Call us
                </p>
                <p className="font-semibold">
                  +91 99011 01912
                </p>
              </div>
            </a>

            <a
              href="mailto:info@gopravasa.com"
              className="p-4 md:p-10 flex items-center gap-4 md:gap-6 hover:bg-neutral-800 transition"
            >
              <Mail className="text-neutral-400" size={22} />
              <div>
                <p className="text-neutral-400 text-xs md:text-sm">
                  Email us
                </p>
                <p className="font-semibold">
                  info@gopravasa.com
                </p>
              </div>
            </a>

          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 mt-4 md:mt-10 text-neutral-500 text-xs md:text-sm">

          <p>© 2024 Travila Inc.</p>

          <div className="flex flex-wrap gap-2 md:gap-4">
            {Object.entries(SOCIAL_LINKS).map(([name, link]) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-neutral-600 rounded-full px-3 md:px-5 py-1 md:py-2 hover:bg-white hover:text-black transition"
              >
                {name}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}