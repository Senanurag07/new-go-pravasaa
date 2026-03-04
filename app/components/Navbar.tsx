"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/20 backdrop-blur-md
      "
    >
      <div
        className="
max-container          flex items-center justify-between
        "
      >

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-40 h-20">
            <Image
              src="/assets/logo-white.png"
              alt="Go Pravasa"
              fill
              className="object-contain"
            />
          </div>
   
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-white">

          <Link href="/about" className="hover:opacity-80">
            About Us
          </Link>

          <Link
            href="/login"
            className="
              flex items-center gap-2
              border border-white/60
              px-5 py-2 rounded-full
              hover:bg-white hover:text-black
              transition
            "
          >
            Login
          </Link>

          {/* Hamburger (Desktop also visible like screenshot) */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="
                  w-10 h-10
                  rounded-lg
                  border border-white/60
                  flex items-center justify-center
                  hover:bg-white hover:text-black
                  transition
                "
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-white">
              <nav className="flex flex-col gap-6 mt-10 text-lg">

                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/packages">Packages</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/login">Login</Link>

              </nav>
            </SheetContent>
          </Sheet>

        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="
                  w-10 h-10
                  rounded-lg
                  border border-white/60
                  flex items-center justify-center
                  text-white
                "
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-white">
              <nav className="flex flex-col gap-6 mt-10 text-lg">

                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/packages">Packages</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/login">Login</Link>

              </nav>
            </SheetContent>
          </Sheet>

        </div>

      </div>
    </header>
  );
}