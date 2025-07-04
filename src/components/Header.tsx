'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CiButton } from './ui/CiButton'
import CiImage from '@/components/ui/CiImage'

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'Réserver', href: '/book' },
  { label: 'A propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="py-4 px-6 shadow-lg/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <CiImage
            imageClassName="rounded-full"
            src="/ciliano.png"
            alt="ciliano"
            className="w-16 h-16 relative cursor-pointer"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className="ci-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <CiButton>Réserver</CiButton>

        {/* Mobile burger button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu mobile"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-6 pb-4 flex flex-col items-center justify-center">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-lg ci-link"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
