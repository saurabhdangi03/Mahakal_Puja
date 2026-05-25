'use client'

import Image from 'next/image'
import type { IconType } from 'react-icons'
import Link from 'next/link'
import Header from './components/Header'
import { motion } from 'framer-motion'
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaUsers,
  FaBook,
  FaCalendarCheck,
  FaPrayingHands,
  FaStarAndCrescent,
} from 'react-icons/fa'
import { useState } from 'react'


const astrologyServices = [
  {
    title: 'Lagan Kundli',
    slug: 'lagan-kundli',
    desc: 'Shaadi, career aur jeevan sambandhit detailed kundli analysis.',
    image:
      '/Lagan Kundli.png',
  },

  {
    title: 'Hast Rekha',
    slug: 'hast-rekha',
    desc: 'Haath ki rekhao se future aur personality ka vishleshan.',
    image:
      '/Hast Rekha.png',
  },

  {
    title: 'Ratna Jyotish',
    slug: 'ratna-jyotish',
    desc: 'Jeevan mein positivity aur safalta ke liye sahi ratna salah.',
    image:
      '/Ratna Jyotish.png',
  },

  {
    title: 'Falit Jyotish',
    slug: 'falit-jyotish',
    desc: 'Grah dasha aur bhavishya ki ghatnao ka satik prediction.',
    image:
      '/Falit Jyotish.png',
  },
]

const pujas = [
  {
    title: 'Mangal Dosh',
    slug: 'mangal-dosh',
    desc: 'Manglik dosh shanti aur sukhad vivah ke liye.',
    image:
      '/Mangal Dosh.png',
  },
  {
    title: 'Kaal Sarp Dosh',
    slug: 'kaal-sarp-dosh',
    desc: 'Jeevan ki rukawato ko door karne hetu shanti puja.',
    image:'/kaal sarp dosh.png',
  },
  {
    title: 'Rudrabhishek',
    slug: 'rudrabhishek',
    desc: 'Mahakal ki vishesh kripa aur kalyan ke liye abhishek.',
    image:
      '/Rudrabhishek.png',
  },
  {
    title: 'Mahamrityunjay',
    slug: 'mahamrityunjay',
    desc: 'Akaal mrityu bhay mukti aur swasthya labh ke liye.',
    image:
      '/Mahamrityunjay.png',
  },

  // NEW 4 CARDS

  {
    title: 'Mangal Bhat Puja',
    slug: 'mangal-bhat-puja',
    desc: 'Mangalnath mandir mein vishesh bhat pujan.',
    image: '/Mangal Bhat Puja.png',
  },
  {
    title: 'Kumbh/Ark Vivah',
    slug: 'kumbh-ark-vivah',
    desc: 'Manglik dosh nivaran hetu vivah se purv ki vidhi.',
    image:
      '/KumbhArk Vivah.png',
  },
  {
    title: 'Guru Chandal Dosh',
    slug: 'guru-chandal-dosh',
    desc: 'Guru aur Rahu ki yuti se banne wale dosh ki shanti.',
    image:
      '/Guru Chandal Dosh.png',
  },
  {
    title: 'Angarak Dosh',
    slug: 'angarak-dosh',
    desc: 'Krodh aur durghatna se bachne ke liye vishesh puja.',
    image:
      '/Angarak Dosh.png',
  },
]

export default function Home() {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [city, setCity] = useState('')
  const [puja, setPuja] = useState('')

   const handleWhatsApp = () => {
    const message = `
    🙏 Jai Shri Mahakal

    *New Puja Inquiry*

    👤 Name: ${name}
    📞 Mobile: ${mobile}
    🏙️ City: ${city}
    🛕 Puja: ${puja}
        `

        const whatsappUrl = `https://wa.me/917746894292?text=${encodeURIComponent(message)}`

        window.open(whatsappUrl, '_blank')
      }
  return (
    <main className="bg-[#0b0b0b] text-white overflow-hidden">
      {/* Topbar */}
      <div className="bg-[#000000] text-[#f5c15c] text-center py-3 font-semibold">
        🙏 Jai Shri Mahakal - Welcome to Ujjain
      </div>

      {/* Navbar */}
      <Header showFaq={false} />

      {/* Hero */}
     <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1606298855672-3efb63017be8?q=80&w=1600&auto=format&fit=crop"
          alt="bg"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover scale-105"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 py-20 items-center w-full">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-xl px-6 py-3 rounded-full font-bold mb-8">
            <span className="text-2xl">🙏</span>

            <span className="text-yellow-300">
              Jai Shri Mahakal
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-cinzel)] text-5xl md:text-7xl leading-[1.1] tracking-tight font-black mb-8">
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
              Book Authentic
            </span>

            <br />

            <span className="text-white">
              Puja in Ujjain
            </span>
          </h1>

          <p className="text-xl md:text-2xl leading-relaxed text-gray-200 mb-10 max-w-2xl">
            Mangal Dosh, Kaal Sarp Puja, Rudrabhishek,
            Mahamrityunjay & More.
          </p>

          <div className="flex flex-wrap gap-5">

            {/* CALL */}
            <a
              href="tel:+917746894292"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-5 rounded-full text-xl font-bold flex items-center gap-4 hover:scale-105 transition duration-300"
            >
              <FaPhoneAlt />

              Call Now
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/917746894292"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-5 rounded-full text-xl font-bold flex items-center gap-4 hover:scale-105 transition duration-300"
            >
              <FaWhatsapp />

              WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl border border-white/10"
        >
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">
              🛕
            </div>

            <h3 className="font-[family-name:var(--font-cinzel)] text-4xl font-black text-[#f5c15c] mb-3">
              Get Free Consultation
            </h3>

            <p className="text-gray-300 text-lg">
              Apni details fill karein aur expert guidance lein
            </p>
          </div>

          <div className="space-y-5">

            {/* NAME */}
            <input
              type="text"
              placeholder="Aapka Naam"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition"
            />

            {/* MOBILE */}
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition"
            />

            {/* CITY */}
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition"
            />

            {/* SELECT */}
            <select
              value={puja}
              onChange={(e) => setPuja(e.target.value)}
              className="w-full bg-white/10 border border-white/10 text-white rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition"
            >
              <option className="text-black">
                Select Puja Required
              </option>

              <option className="text-black">
                Mangal Dosh
              </option>

              <option className="text-black">
                Rudrabhishek
              </option>

              <option className="text-black">
                Kaal Sarp Dosh
              </option>

              <option className="text-black">
                Mahamrityunjay
              </option>
            </select>

            {/* BUTTON */}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:scale-[1.03] transition duration-300 text-white py-5 rounded-2xl text-2xl font-black shadow-2xl flex items-center justify-center gap-3"
            >
              <FaWhatsapp />

              Get Details on WhatsApp
            </button>
          </div>

          <div className="mt-8 text-center text-gray-300 text-sm">
            🔒 Your information is completely safe & secure
          </div>
        </motion.div>
      </div>
    </section>

      {/* About */}
      {/* About Section */}
<section
  id="about"
  className="relative overflow-hidden bg-gradient-to-b from-[#120909] via-[#1a0d0d] to-black py-28 text-white"
>
  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-red-500/10 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    
    {/* Heading */}
    {/* Heading */}
<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="text-center mb-20"
>
  <div className="inline-block px-6 py-3 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
    <span className="text-yellow-400 text-lg font-semibold tracking-widest">
      ✨ SPIRITUAL BACKGROUND
    </span>
  </div>

  {/* FIRST NAME */}
  <h3 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-5xl font-black text-[#f5c15c] leading-tight">
    ज्योतिष आचार्य पंडित पुराण शर्मा
  </h3>
  

  <p className="text-2xl text-yellow-100 font-semibold mb-10">
    आचार्य कर्मकांड एवं ज्योतिष विशेषज्ञ
  </p>

  {/* Divider */}
  <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-10"></div>

  {/* SECOND NAME */}
  <h3 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-5xl font-black text-[#f5c15c] leading-tight">
    ज्योतिष विशेषज्ञ पंडित रवि जोशी
  </h3>

  <p className="text-2xl text-yellow-100 font-semibold mb-10">
    10+ वर्षों से वैदिक पूजा एवं अनुष्ठान विशेषज्ञ
  </p>
</motion.div>

    {/* Main Content */}
    <div className="grid lg:grid-cols-2 gap-12">

      {/* LEFT CARD */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="bg-white/5 border border-yellow-500/20 backdrop-blur-2xl rounded-[40px] p-10 shadow-[0_0_50px_rgba(255,193,7,0.1)]"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-5xl mb-8 shadow-2xl">
          🛕
        </div>

        <h3 className="text-4xl font-black text-[#f5c15c] mb-6">
          About Our Spiritual Mission
        </h3>

        <p className="text-xl leading-loose text-gray-300 mb-8">
          Baba Mahakal ki pavitra nagari Ujjain mein hum
          varsho se shastriya vidhi ke anusaar puja,
          anushthan aur jyotish paramarsh pradan kar rahe hain.
        </p>

        <p className="text-lg leading-loose text-gray-400">
          Hamara uddeshya sirf puja karwana nahi,
          balki bhakto ko adhyatmik shanti,
          grah dosh nivaran aur jeevan mein positivity
          pradan karna hai.
        </p>
      </motion.div>

      {/* RIGHT FEATURES */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-8"
      >
        {[
          {
            icon: '📿',
            title: '10+ Years Experience',
            desc: 'Ved, Jyotish aur Karmakand mein gahra anubhav',
          },

          {
            icon: '🕉️',
            title: 'Authentic Vedic Vidhi',
            desc: '100% shastriya aur paramparik paddhati',
          },

          {
            icon: '🌍',
            title: '10000+ Devotees',
            desc: 'India aur abroad se santusht bhakt',
          },

          {
            icon: '📞',
            title: 'Online Consultation',
            desc: 'Video call aur WhatsApp par bhi seva uplabdh',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              boxShadow:
                '0px 0px 40px rgba(245,193,92,0.15)',
            }}
            className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500"
          >
            <div className="text-5xl mb-6">
              {item.icon}
            </div>

            <h4 className="text-2xl font-black text-[#f5c15c] mb-4">
              {item.title}
            </h4>

            <p className="text-gray-300 leading-loose">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Bottom CTA */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-24 text-center"
    >
      <a
        href="https://wa.me/917746894292"
        target="_blank"
        className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 hover:scale-105 transition duration-500 text-black px-10 py-5 rounded-full text-2xl font-black shadow-2xl"
      >
        <FaWhatsapp className="text-3xl" />

        Talk To Expert Astrologer
      </a>
    </motion.div>
  </div>
</section>

      {/* Services */}
      <section id="services" className="py-24 bg-[#0b0b0b] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className=" font-[family-name:var(--font-cinzel)] text-center text-6xl font-black text-[#f5c15c] ">
            Our Sacred Puja Services
          </h2>

          <p className="text-center text-2xl text-gray-300 mb-16">
            Apni jarurat ke anusaar Puja select karein.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pujas.map((item, i) => (
              <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className=" bg-white/5 backdrop-blur-xl rounded-[32px] overflow-hidden border border-white/10 shadow-2xl hover:-translate-y-3 transition duration-500 "
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-3xl font-bold text-[#f5c15c] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mb-8 text-lg">
                    {item.desc}
                  </p>

                  <Link
                  href={`/puja/${item.slug}`}
                    className="block w-full border border-[#f5c15c] text-[#f5c15c] py-3 rounded-lg mb-4 font-semibold hover:bg-red-50 transition"
                  >
                    View Details
                  </Link>

                  <a
                    href="https://wa.me/7746894292"
                    target="_blank"
                    className="block w-full bg-gradient-to-r from-[#ff6b00] to-[#f5c15c] text-white py-3 rounded-lg font-bold text-lg text-center"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Astrology Section */}
<section className="py-24 bg-[#120909] text-white">
  <div className="max-w-7xl mx-auto px-6">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/20 px-6 py-3 rounded-full mb-6">
        <FaStarAndCrescent className="text-yellow-400 text-2xl" />

        <span className="text-yellow-400 font-semibold text-lg">
          Astrology Services
        </span>
      </div>

      <h2 className="font-[family-name:var(--font-cinzel)] text-6xl font-black text-[#f5c15c] mb-6">
        Astrology Consultation
      </h2>

      <p className="text-2xl text-gray-300">
        Kundli, Hast Rekha aur Jyotish sambandhit vishesh sevaayein
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {astrologyServices.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ y: -12 }}
          className="bg-white/5 backdrop-blur-xl rounded-[32px] overflow-hidden border border-white/10 shadow-2xl"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover hover:scale-110 transition duration-700"
            />
          </div>

          <div className="p-6 text-center">
            <h3 className="text-3xl font-bold text-[#f5c15c] mb-4">
              {item.title}
            </h3>

            <p className="text-gray-300 mb-8 text-lg">
              {item.desc}
            </p>

            <a
              href="https://wa.me/917746894292"
              target="_blank"
              className="block w-full bg-gradient-to-r from-[#ff6b00] to-[#f5c15c] text-white py-3 rounded-lg font-bold text-lg text-center hover:scale-105 transition"
            >
              Consult Now
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-20 bg-[#1a0d0d]">
        <div className="max-w-4xl mx-auto bg-gradient-to-r text-white rounded-[30px] p-12 text-center shadow-2xl">
          <h2 className=" font-[family-name:var(--font-cinzel)] text-center text-6xl font-black text-[#f5c15c] ">
            Book Your Puja Today - Limited Slots Available
          </h2>

          <p className="text-3xl font-semibold">
            Turant booking ke liye Call karein: 📞 7746894292
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-[#120909] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className=" font-[family-name:var(--font-cinzel)] text-center text-6xl font-black text-[#f5c15c] ">
            How We Work
          </h2>

          <p className="text-center text-2xl text-gray-300 mb-20">
            Sirf 3 aasan steps mein apni Puja book karein
          </p>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-28 h-28 rounded-full border-2 border-yellow-400 mx-auto flex items-center justify-center text-5xl text-yellow-400 mb-6">
                <FaPrayingHands />
              </div>

              <h3 className="text-4xl font-bold mb-4">
                1. Select Your Puja
              </h3>

              <p className="text-xl text-gray-200">
                Hamein apni requirements aur pareshani batayein.
              </p>
            </div>

            <div>
              <div className="w-28 h-28 rounded-full border-2 border-yellow-400 mx-auto flex items-center justify-center text-5xl text-yellow-400 mb-6">
                <FaPhoneAlt />
              </div>

              <h3 className="text-4xl font-bold mb-4">
                2. Free Consultation
              </h3>

              <p className="text-xl text-gray-200">
                Experts se baat karein aur shubh Muhurat janein.
              </p>
            </div>

            <div>
              <div className="w-28 h-28 rounded-full border-2 border-yellow-400 mx-auto flex items-center justify-center text-5xl text-yellow-400 mb-6">
                <FaCalendarCheck />
              </div>

              <h3 className="text-4xl font-bold mb-4">
                3. Schedule & Book
              </h3>

              <p className="text-xl text-gray-200">
                Apni date confirm karein aur Ujjain aakar Puja karein.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center mt-24 border-t border-white/20 pt-16">
            <div>
              <h4 className="text-7xl text-yellow-400 font-black mb-3">
                35+
              </h4>
              <p className="text-2xl font-semibold">YEARS EXPERIENCE</p>
            </div>

            <div>
              <h4 className="text-7xl text-yellow-400 font-black mb-3">
                10000+
              </h4>
              <p className="text-2xl font-semibold">SATISFIED DEVOTEES</p>
            </div>

            <div>
              <h4 className="text-7xl text-yellow-400 font-black mb-3">
                25+
              </h4>
              <p className="text-2xl font-semibold">TYPES OF PUJAS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
<section id="gallery" className="py-24 bg-[#0b0b0b]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className=" font-[family-name:var(--font-cinzel)] text-center text-6xl font-black text-[#f5c15c] ">
      Puja Photo Gallery
    </h2>

    <p className="text-center text-2xl text-gray-300 mb-16">
      Glimpses of authentic Anushthans performed by us
    </p>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {[
        '/1.jpeg',
        '/2.jpeg',
        '/3.jpeg',
        '/4.jpeg',
        '/5.jpeg',
        '/6.jpeg',
        '/7.png',
        '/8.jpeg',
        '/9.png',
        '/10.png',
      ].map((img, i) => (
        <div
          key={i}
          className="relative h-72 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
        >
          <Image
            src={img}
            alt="gallery"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</section>

{/* Reviews Section */}
<section className="py-24 bg-[#120909]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className=" font-[family-name:var(--font-cinzel)] text-center text-6xl font-black text-[#f5c15c] ">
      Real Google Reviews
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: 'Rahul Sharma',
          review:
            'Bahut hi shuddh vidhi se Puja sampann hui. Pandit ji ka vyavahar bahut accha tha.',
        },
        {
          name: 'Neha Verma',
          review:
            'Kaal Sarp Dosh Puja perfectly organized thi. Highly recommended in Ujjain.',
        },
        {
          name: 'Amit Patel',
          review:
            'Rudrabhishek ka anubhav adbhut raha. Proper arrangements and guidance.',
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl border border-gray-100"
        >
          <div className="flex items-center gap-1 text-yellow-500 text-2xl mb-5">
            ⭐ ⭐ ⭐ ⭐ ⭐
          </div>

          <p className="text-gray-700 text-lg leading-loose mb-8">
            "{item.review}"
          </p>

          <div className="font-bold text-2xl text-[#f5c15c]">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-24 bg-[#0b0b0b]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <div>
        <h2 className=" font-[family-name:var(--font-cinzel)] text-center text-6xl font-black text-[#f5c15c] ">
          Contact Information
        </h2>

        <div className="space-y-10 text-xl">
          <div className="flex gap-5">
            <div className="text-yellow-500 text-4xl mt-1">📍</div>

            <div>
              <h4 className="font-bold text-3xl mb-2">Address:</h4>

              <p className="text-gray-700 leading-loose">
                Mangalnath Mandir, Ankpat Marg, Mangalnath Mandir, Agar Rd, Ujjain, Madhya Pradesh 456006
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="text-yellow-500 text-4xl mt-1">
              <FaPhoneAlt />
            </div>

            <div>
              <h4 className="font-bold text-3xl mb-2">Call Us:</h4>

              <a
                href="tel:+917746894292"
                className="text-red-600 font-bold text-4xl"
              >
                7746894292
              </a>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="text-yellow-500 text-4xl mt-1">✉️</div>

            <div>
              <h4 className="font-bold text-3xl mb-2">Email:</h4>

              <p className="text-gray-700">
                pp7746894292@gmail.com
              </p>
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/917746894292"
          target="_blank"
          className="mt-10 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff6b00] to-[#f5c15c] hover:bg-green-700 transition text-white px-10 py-5 rounded-xl text-2xl font-bold"
        >
          <FaWhatsapp />
          WhatsApp Message Karein
        </a>
      </div>

      {/* Right */}
      <div className="rounded-[30px] overflow-hidden shadow-2xl border-4 border-white">
      <iframe
        src="https://www.google.com/maps?q=Mangalnath+Mandir,+Ankpat+Marg,+Agar+Rd,+Ujjain,+Madhya+Pradesh+456006&output=embed"
        width="100%"
        height="500"
        loading="lazy"
        className="w-full"
      />
    </div>
    </div>
  </div>
</section>

      {/* Footer */}
<footer className="bg-[#050505] text-white pt-24 pb-10 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">
      {/* Brand */}
      <div>
        <h2 className="text-4xl font-black text-yellow-400 mb-6">
        ज्योतिष आचार्य पंडित पुराण शर्मा
        </h2>

        <p className="text-gray-300 text-lg leading-loose">
          विश्व प्रसिद्ध ज्योतिष एवं कर्मकांड विशेषज्ञ।  
महाकाल की पावन नगरी उज्जैन में वर्षों से वैदिक पूजा,
अनुष्ठान, ग्रह दोष निवारण एवं ज्योतिष परामर्श सेवाएं प्रदान कर रहे हैं।  
शास्त्रोक्त विधि, पूर्ण श्रद्धा और आध्यात्मिक ऊर्जा के साथ
हर पूजा संपन्न कराई जाती है।
        </p>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-3xl font-bold mb-8">
          Our Services
        </h3>

        <ul className="space-y-5 text-gray-300 text-lg">
          <li className="hover:text-yellow-400 transition cursor-pointer">
            Mangal Dosh
          </li>

          <li className="hover:text-yellow-400 transition cursor-pointer">
            Kaal Sarp Dosh
          </li>

          <li className="hover:text-yellow-400 transition cursor-pointer">
            Rudrabhishek
          </li>

          <li className="hover:text-yellow-400 transition cursor-pointer">
            Mahamrityunjay
          </li>

          <li className="hover:text-yellow-400 transition cursor-pointer">
            Kumbh / Ark Vivah
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-3xl font-bold mb-8">
          Quick Links
        </h3>

        <ul className="space-y-5 text-gray-300 text-lg">
          <li>
            <a href="#" className="hover:text-yellow-400 transition">
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-yellow-400 transition"
            >
              About Us
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className="hover:text-yellow-400 transition"
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="hover:text-yellow-400 transition"
            >
              Puja Services
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Important Links */}
      <div>
        <h3 className="text-3xl font-bold mb-8">
          Important Links
        </h3>

        <ul className="space-y-5 text-gray-300 text-lg mb-10">
          {/* <li className="hover:text-yellow-400 transition cursor-pointer">
            FAQs
          </li> */}

          <li className="hover:text-yellow-400 transition cursor-pointer">
            Help & Support
          </li>

          <li className="hover:text-yellow-400 transition cursor-pointer">
            Terms & Services
          </li>

          <li className="hover:text-yellow-400 transition cursor-pointer">
            Privacy Policy
          </li>
        </ul>

        <div className="space-y-4">
          <div className="bg-white/10 border border-white/10 rounded-xl px-5 py-4 flex items-center gap-3">
            <span className="text-green-400 text-2xl">🔒</span>

            <span className="font-semibold">
              Secure Booking
            </span>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-xl px-5 py-4 flex items-center gap-3">
            <span className="text-cyan-400 text-2xl">🎧</span>

            <span className="font-semibold">
              24x7 Support
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-gray-400 text-lg text-center md:text-left">
        © 2026 All Rights Reserved ज्योतिष आचार्य पंडित पुराण शर्मा
      </p>

      
    </div>
  </div>
</footer>

      {/* Floating Buttons */}
      <a
        href="#"
        className="fixed bottom-8 left-6 w-20 h-20 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#f5c15c] text-white flex items-center justify-center text-4xl shadow-2xl z-50"
      >
        <FaPhoneAlt />
      </a>

      <a
        href="#"
        className="fixed bottom-8 right-6 w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center text-4xl shadow-2xl z-50"
      >
        <FaWhatsapp />
      </a>
    </main>
  )
}
