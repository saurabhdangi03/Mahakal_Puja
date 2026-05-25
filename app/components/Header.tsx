'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type HeaderProps = {
  showFaq?: boolean
}

export default function Header({
  showFaq = true,
}: HeaderProps) {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Puja Services', href: '/#services' },
    { name: 'Gallery', href: '/#gallery' },
    ...(showFaq
      ? [{ name: 'FAQs', href: '/#faqs' }]
      : []),
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50 border-b border-orange-200 bg-gradient-to-r from-[#1a0f0f] via-[#2d1414] to-[#3b1818] shadow-2xl backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link
            href="/"
            className="text-3xl font-black tracking-wide bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent"
          >
            🛕 Puja in Ujjain
          </Link>
        </motion.div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-white">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <Link
                href={item.href}
                className="relative group transition duration-300"
              >
                {item.name}

                {/* Hover underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <motion.a
          href="https://wa.me/7746894292"
          target="_blank"
          whileHover={{
            scale: 1.08,
            boxShadow: '0px 0px 20px rgba(255,140,0,0.6)',
          }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300"
        >
          Book Puja
        </motion.a>
      </div>
    </motion.nav>
  )
}