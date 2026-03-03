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
    <footer className="fixed bottom-0 left-0 w-full min-h-[calc(90vh-60px)] bg-neutral-900 text-white">
      <div className="max-container">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 mt-12 gap-16 items-start">

          <h2 className="text-4xl md:text-5xl  font-semibold leading-tight">
            Memories are Calling,
            <br />
            <span className="text-neutral-400">
              let’s find them together!
            </span>
          </h2>

          <div>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-6">
              At Go Pravasa, we’re committed to providing stress-free travel
              experiences with a focus on comfort, safety, and convenience.
              Here’s what sets us apart:
            </p>

            <div className="flex flex-wrap gap-4">
              {Object.entries(SOCIAL_LINKS).map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-neutral-500 rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 my-16" />

        {/* Middle Links */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Office */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
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
              Govindaraja Nagar Ward, MC Layout,
              <br />
              Vijayanagar, Bengaluru,
              <br />
              Karnataka 560040
            </a>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              Company
            </h4>

            <ul className="space-y-4 text-neutral-400">
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
          <div>
            <h4 className="text-lg font-semibold mb-6">
              Policy
            </h4>

            <ul className="space-y-4 text-neutral-400">
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
        <div className="mt-20 border border-neutral-700 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-3">

            {/* Get in touch */}
            <div className="p-10 border-b md:border-b-0 md:border-r border-neutral-700">
              <h4 className="text-xl font-semibold mb-2">
                Get in Touch
              </h4>
              <p className="text-neutral-400">
                Have questions or need assistance?
              </p>
            </div>

            {/* Phone */}
            <a
              href="tel:+919901101912"
              className="p-10 border-b md:border-b-0 md:border-r border-neutral-700 flex items-center gap-6 hover:bg-neutral-800 transition"
            >
              <Headphones className="text-neutral-400" size={28} />
              <div>
                <p className="text-neutral-400 text-sm">
                  Need help? Call us
                </p>
                <p className="text-lg font-semibold">
                  +91 99011 01912
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@gopravasa.com"
              className="p-10 flex items-center gap-6 hover:bg-neutral-800 transition"
            >
              <Mail className="text-neutral-400" size={28} />
              <div>
                <p className="text-neutral-400 text-sm">
                  Need help? Email us
                </p>
                <p className="text-lg font-semibold">
                  info@gopravasa.com
                </p>
              </div>
            </a>

          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-16 text-neutral-500 text-sm">

          <p>© 2024 Travila Inc. All rights reserved.</p>

          <div className="flex flex-wrap gap-4">
            {Object.entries(SOCIAL_LINKS).map(([name, link]) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-neutral-600 rounded-full px-5 py-2 hover:bg-white hover:text-black transition"
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