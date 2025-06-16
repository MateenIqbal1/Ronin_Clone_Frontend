'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, User, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-[#4a4a4a] text-white px-4 sm:px-10 py-3">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        <div className="hidden lg:flex gap-10 text-lg font-medium">
          <Link href="/buds" className="hover:underline">AirBuds</Link>
          <Link href="/handfree" className="hover:underline">Handsfree</Link>
          <Link href="/neck" className="hover:underline">Neck</Link>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-2xl">
          <Link href="/wishlist"><ShoppingCart /></Link>
          <Link href="/profile"><User /></Link>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#4a4a4a] text-white px-6 py-4 flex flex-col">
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
              <X size={30} />
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-6 text-xl font-medium">
            <Link href="/buds" onClick={() => setMenuOpen(false)}>AirBuds</Link>
            <Link href="/handfree" onClick={() => setMenuOpen(false)}>Handsfree</Link>
            <Link href="/neck" onClick={() => setMenuOpen(false)}>Neck</Link>
            <Link href="/wishlist" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
              <ShoppingCart size={22} /> Wishlist
            </Link>
            <Link href="/profile" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
              <User size={22} /> Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
