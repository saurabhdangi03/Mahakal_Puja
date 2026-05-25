'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/app/components/Header'
import { useParams } from 'next/navigation'

import * as motion from 'framer-motion/client'

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaCheckCircle,
  FaStar,
  FaOm,
  FaPrayingHands,
} from 'react-icons/fa'

const pujaDetails: any = {
  'mangal-dosh': {
    title: 'Mangal Dosh Puja',
    subtitle: 'Manglik Dosh Nivaran & Vivah Sukh Puja',
    image:
      '/Mangal Dosh.png',

    desc:
      'Mangal Dosh Puja kundli mein maujood Manglik Dosh ko shant karne aur vivahik jeevan mein sukh-shanti lane ke liye ki jane wali shaktishali Vedic Puja hai.',

    whatIs:
      'Jab kundli ke kuch vishesh gharon mein Mangal grah sthit hota hai tab Mangal Dosh banta hai. Iske karan vivah mein deri, rishton mein tanav, aur jeevan mein ashanti aa sakti hai.',

    benefits: [
      'Vivah mein aa rahi rukawat door hoti hai',
      'Manglik dosh ka prabhav kam hota hai',
      'Rishton mein prem aur samajh badhti hai',
      'Negative energy aur mansik tanav kam hota hai',
      'Sukh-shanti aur stability prapt hoti hai',
    ],

    includes: [
      'Sankalp Vidhi',
      'Mangal Grah Shanti Puja',
      'Vedic Havan & Purnahuti',
      'Mangal Mantra Jaap',
      'Prasad & Ashirwad',
      'Pandit Ji Guidance',
    ],

    problems: [
      'Vivah mein deri',
      'Manglik dosh ka bhay',
      'Rishton mein tanav',
      'Bar-bar vivaah tootna',
    ],
  },

  'kaal-sarp-dosh': {
    title: 'Kaal Sarp Dosh Puja',
    subtitle: 'Rahu-Ketu Shanti & Kaal Sarp Yog Nivaran',
    image:
      '/kaal sarp dosh.png',

    desc:
      'Kaal Sarp Dosh Puja Rahu-Ketu ke ashubh prabhav ko shant karne aur jeevan ki badhaon ko door karne ke liye ki jati hai.',

    whatIs:
      'Jab saare grah Rahu aur Ketu ke beech aa jate hain tab Kaal Sarp Dosh banta hai. Isse career, health aur mansik sthiti par bura prabhav pad sakta hai.',

    benefits: [
      'Career aur business mein sudhar',
      'Mansik shanti aur confidence milta hai',
      'Rahu-Ketu ka prabhav kam hota hai',
      'Jeevan ki badha aur rukawat door hoti hai',
      'Bhagya aur safalta ka saath milta hai',
    ],

    includes: [
      'Rahu-Ketu Shanti',
      'Kaal Sarp Yog Nivaran',
      'Vedic Havan',
      'Mantra Jaap',
      'Purnahuti',
      'Prasad & Ashirwad',
    ],

    problems: [
      'Career mein rukawat',
      'Bar-bar asafalta',
      'Mansik stress',
      'Financial instability',
    ],
  },

  rudrabhishek: {
    title: 'Rudrabhishek Puja',
    subtitle: 'Mahakal Rudra Abhishek Anushthan',
    image:
      '/Rudrabhishek.png',

    desc:
      'Rudrabhishek Bhagwan Shiv ko prasann karne aur sukh, shanti, samriddhi prapt karne ke liye ki jane wali pavitra Shiv Puja hai.',

    whatIs:
      'Rudrabhishek mein Shivling par jal, doodh, belpatra, dahi aur Vedic mantraon ke saath abhishek kiya jata hai jisse Shiv kripa prapt hoti hai.',

    benefits: [
      'Bhagwan Shiv ki kripa prapt hoti hai',
      'Negative energy door hoti hai',
      'Swasthya aur sukh-shanti milti hai',
      'Man ki shanti aur positivity badhti hai',
      'Bhay aur rog se raksha hoti hai',
    ],

    includes: [
      'Rudra Path',
      'Shiv Abhishek',
      'Vedic Havan',
      'Purnahuti',
      'Prasad',
      'Pandit Seva',
    ],

    problems: [
      'Stress aur negativity',
      'Health issues',
      'Mansik ashanti',
      'Bhagya mein rukawat',
    ],
  },

  mahamrityunjay: {
    title: 'Mahamrityunjay Puja',
    subtitle: 'Aayu, Swasthya Aur Raksha Anushthan',
    image:
      '/Mahamrityunjay.png',

    desc:
      'Mahamrityunjay Puja akaal mrityu, rog aur bhay se raksha ke liye ki jane wali shaktishali Shiv Puja hai.',

    whatIs:
      'Mahamrityunjay Mantra Bhagwan Shiv ka divya mantra hai jo swasthya, lambi aayu aur raksha ke liye bahut prabhavi mana jata hai.',

    benefits: [
      'Swasthya mein sudhar hota hai',
      'Rog aur bhay door hote hain',
      'Positive energy badhti hai',
      'Mansik shanti milti hai',
      'Aayu vriddhi ka ashirwad milta hai',
    ],

    includes: [
      'Mahamrityunjay Jaap',
      'Rudra Havan',
      'Shiv Puja',
      'Purnahuti',
      'Prasad',
      'Pandit Ji Guidance',
    ],

    problems: [
      'Health problems',
      'Fear aur anxiety',
      'Negative thoughts',
      'Jeevan mein asuraksha',
    ],
  },

  'mangal-bhat-puja': {
    title: 'Mangal Bhat Puja',
    subtitle: 'Vivah Badha Nivaran Puja',
    image:
      '/Mangal Bhat Puja.png',

    desc:
      'Mangal Bhat Puja Manglik Dosh ko shant karne aur shighra vivah ke yog banane ke liye ki jane wali vishesh Vedic Puja hai.',

    whatIs:
      'Yeh Puja vivaah mein deri, rishton ki rukawat aur Manglik Dosh ke nivaran ke liye vidhi-vidhan se karayi jati hai.',

    benefits: [
      'Shighra vivah ke yog bante hain',
      'Manglik dosh shant hota hai',
      'Rishton mein madhurta badhti hai',
      'Parivarik sukh aur samriddhi milti hai',
    ],

    includes: [
      'Sankalp Vidhi',
      'Mangal Shanti',
      'Vedic Havan',
      'Mantra Jaap',
      'Prasad',
      'Ashirwad',
    ],

    problems: [
      'Vivah mein delay',
      'Manglik dosh',
      'Rishton mein rukawat',
      'Parivarik tanav',
    ],
  },

  'kumbh-ark-vivah': {
    title: 'Kumbh / Ark Vivah',
    subtitle: 'Manglik Dosh Nivaran Sanskar',
    image:
      '/KumbhArk Vivah.png',

    desc:
      'Kumbh Vivah aur Ark Vivah Manglik Dosh ke nivaran aur safal vivahik jeevan ke liye kiya jane wala pavitra Vedic Sanskar hai.',

    whatIs:
      'Is Puja mein Manglik Dosh ke ashubh prabhav ko kam karne ke liye vishesh Vedic Vivah Vidhi karayi jati hai.',

    benefits: [
      'Manglik dosh ka nivaran hota hai',
      'Vivah yog majboot hote hain',
      'Parivarik sukh badhta hai',
      'Negative prabhav kam hota hai',
    ],

    includes: [
      'Vivah Vidhi',
      'Mangal Shanti',
      'Vedic Havan',
      'Pandit Ji Seva',
      'Prasad',
      'Ashirwad',
    ],

    problems: [
      'Manglik dosh',
      'Vivah mein badha',
      'Delay in marriage',
      'Relationship issues',
    ],
  },

  'guru-chandal-dosh': {
    title: 'Guru Chandal Dosh Puja',
    subtitle: 'Guru-Rahu Dosh Shanti Anushthan',
    image:
      '/Guru Chandal Dosh.png',

    desc:
      'Guru Chandal Dosh Puja Guru aur Rahu ke ashubh yog ko shant karne aur jeevan mein safalta lane ke liye ki jati hai.',

    whatIs:
      'Jab kundli mein Guru aur Rahu ek saath hote hain tab Guru Chandal Dosh banta hai. Isse confusion, galat faisle aur career rukawat badh sakti hai.',

    benefits: [
      'Sahi faisle lene ki shakti badhti hai',
      'Career aur education mein safalta milti hai',
      'Bhagya strong hota hai',
      'Negative soch door hoti hai',
      'Guru-Rahu dosh shant hota hai',
    ],

    includes: [
      'Sankalp Vidhi',
      'Guru Chandal Shanti',
      'Brihaspati Shanti',
      'Rahu Shanti',
      'Hawan & Purnahuti',
      'Prasad & Ashirwad',
    ],

    problems: [
      'Career confusion',
      'Education mein focus ki kami',
      'Bar-bar galat faisle',
      'Bhagya ka saath na milna',
    ],
  },

  'angarak-dosh': {
    title: 'Angarak Dosh Puja',
    subtitle: 'Mangal-Rahu Dosh Nivaran Puja',
    image:
      '/Angarak Dosh.png',

    desc:
      'Angarak Dosh Puja Mangal aur Rahu ke ashubh yog ko shant karne aur jeevan mein shanti lane ke liye ki jati hai.',

    whatIs:
      'Angarak Dosh Mangal aur Rahu ke yog se banta hai jo gussa, vivaad, mansik tanav aur durghatna ke yog ko badha sakta hai.',

    benefits: [
      'Krodh control hota hai',
      'Accident yog kam hote hain',
      'Mansik shanti milti hai',
      'Rishton mein sudhar hota hai',
      'Stress aur negativity kam hoti hai',
    ],

    includes: [
      'Rahu-Mangal Shanti',
      'Vedic Havan',
      'Mantra Jaap',
      'Purnahuti',
      'Prasad',
      'Pandit Ji Seva',
    ],

    problems: [
      'Bahut zyada gussa',
      'Family disputes',
      'Durghatna ka bhay',
      'Mental stress',
    ],
  },
}

export default function Page() {
  const params = useParams()

  const slug = params.slug as string

  const puja = pujaDetails[slug]

  if (!puja) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-4xl font-bold">
        Page Not Found
      </div>
    )
  }

  return (
    <main className="bg-[#060606] text-white">
      {/* NAVBAR */}
      <Header showFaq={false} />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG IMAGE */}
        <div className="absolute inset-0">
          <Image
            src={puja.image}
            alt={puja.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority
            className="object-cover scale-110"
          />

          <div className="absolute inset-0 bg-black/80" />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#2b0000]/70 to-black" />
        </div>

        {/* GLOW */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/20 blur-[80px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/20 blur-[80px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 bg-yellow-400 text-black px-6 py-3 rounded-full font-black text-lg mb-8 shadow-2xl">
              <FaOm />
              Mahakal Nagari Ujjain
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500">
              {puja.title}
            </h1>

            <p className="text-2xl text-yellow-300 font-semibold mb-8">
              {puja.subtitle}
            </p>

            <p className="text-xl text-gray-300 leading-loose mb-10">
              {puja.desc}
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="tel:7746894292"
                className="bg-gradient-to-r from-red-600 to-orange-500 hover:scale-105 transition duration-300 text-white px-10 py-5 rounded-full text-xl font-bold flex items-center gap-3 shadow-2xl"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href={`https://wa.me/917746894292?text=Namaste Pandit Ji, mujhe ${puja.title} ke baare mein jankari chahiye.`}
                target="_blank"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 transition duration-300 text-white px-10 py-5 rounded-full text-xl font-bold flex items-center gap-3 shadow-2xl"
              >
                <FaWhatsapp />
                WhatsApp Now
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-14">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center">
                <h3 className="text-4xl font-black text-yellow-400">
                  10+
                </h3>

                <p className="text-gray-300 mt-2">
                  Years Experience
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center">
                <h3 className="text-4xl font-black text-yellow-400">
                  10K+
                </h3>

                <p className="text-gray-300 mt-2">
                  Happy Devotees
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center">
                <h3 className="text-4xl font-black text-yellow-400">
                  100%
                </h3>

                <p className="text-gray-300 mt-2">
                  Vedic Vidhi
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-[0_0_60px_rgba(255,180,0,0.2)]"
          >
            <h2 className="text-4xl font-black text-center text-yellow-400 mb-6">
              🛕 Book Puja
            </h2>

            <p className="text-center text-gray-300 text-lg mb-10">
              Expert guidance ke saath apni Puja book karein
            </p>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-5 outline-none text-lg"
              />

              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-5 outline-none text-lg"
              />

              <input
                type="text"
                placeholder="City"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-5 outline-none text-lg"
              />

              <button className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 py-5 rounded-2xl text-2xl font-black hover:scale-[1.02] transition duration-300 shadow-2xl">
                Get Details on WhatsApp
              </button>
            </div>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-green-400 text-2xl" />
                <p className="text-lg">
                  Same Day Booking Available
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-green-400 text-2xl" />
                <p className="text-lg">
                  Video Call Puja Option
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-green-400 text-2xl" />
                <p className="text-lg">
                  Experienced Pandit Ji
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,180,0,0.08),transparent_40%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-10">
            {/* ABOUT */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10"
            >
              <h2 className="text-5xl font-black text-yellow-400 mb-8">
                🕉️ {puja.title} Kya Hai?
              </h2>

              <p className="text-xl leading-loose text-gray-300 mb-8">
                {puja.whatIs}
              </p>

              <p className="text-xl leading-loose text-gray-400">
                {puja.desc}
              </p>

              <div className="mt-10 bg-gradient-to-r from-yellow-500/20 to-red-500/20 border border-yellow-500/30 rounded-3xl p-6">
                <p className="text-2xl font-bold text-yellow-300">
                  👉 Yeh Puja jeevan ki badha aur grah dosh
                  nivaran ke liye bahut prabhavi mani jati hai.
                </p>
              </div>
            </motion.div>

            {/* BENEFITS */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10"
            >
              <h2 className="text-5xl font-black text-yellow-400 mb-10">
                💯 Puja Ke Fayde
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {puja.benefits.map(
                  (item: string, index: number) => (
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      key={index}
                      className="bg-black/30 border border-white/10 rounded-3xl p-6 flex items-start gap-4"
                    >
                      <FaStar className="text-yellow-400 text-2xl mt-1" />

                      <p className="text-xl text-gray-200">
                        {item}
                      </p>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* INCLUDED */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10"
            >
              <h2 className="text-5xl font-black text-yellow-400 mb-10">
                🪔 Puja Includes
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {puja.includes.map(
                  (item: string, index: number) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -10,
                      }}
                      className="bg-gradient-to-b from-yellow-500/10 to-red-500/10 border border-yellow-500/20 rounded-3xl p-8 text-center"
                    >
                      <FaPrayingHands className="text-5xl text-yellow-400 mx-auto mb-5" />

                      <h3 className="text-2xl font-bold">
                        {item}
                      </h3>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* PROBLEMS */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-900/30 to-orange-600/20 border border-red-500/20 rounded-[35px] p-10"
            >
              <h2 className="text-5xl font-black text-red-400 mb-10">
                ⚠️ In Samasyaon Se Pareshan?
              </h2>

              <div className="space-y-6">
                {puja.problems.map(
                  (item: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >
                      <div className="w-4 h-4 rounded-full bg-red-500" />

                      <p className="text-2xl text-gray-200">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>

              <div className="mt-10 bg-red-600 rounded-3xl p-6 text-center">
                <p className="text-3xl font-black">
                  👉 {puja.title} ek prabhavi Vedic upay hai
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-8">
            {/* CONTACT */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="sticky top-24 bg-gradient-to-b from-[#1a1a1a] to-black border border-yellow-500/20 rounded-[35px] p-8 shadow-2xl"
            >
              <h3 className="text-4xl font-black text-yellow-400 mb-6">
                📿 Book Now
              </h3>

              <p className="text-gray-300 text-lg mb-8">
                Limited slots available. Aaj hi booking karein.
              </p>

              <a
                href={`https://wa.me/917746894292?text=Namaste Pandit Ji, mujhe ${puja.title} book karni hai.`}
                target="_blank"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 transition py-5 rounded-2xl text-2xl font-black mb-5"
              >
                <FaWhatsapp />
                WhatsApp Booking
              </a>

              <a
                href="tel:7746894292"
                className="flex items-center justify-center gap-3 border-2 border-yellow-500 text-yellow-400 py-5 rounded-2xl text-2xl font-black"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </motion.div>

            {/* OTHER SERVICES */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] overflow-hidden"
            >
              <div className="bg-gradient-to-r from-yellow-500 to-red-600 p-5 text-black text-2xl font-black">
                🕉️ Other Services
              </div>

              <div className="divide-y divide-white/10">
                {Object.entries(pujaDetails).map(
                  ([key, value]: any) => (
                    <Link
                      key={key}
                      href={`/puja/${key}`}
                      className={`block px-6 py-5 text-lg transition hover:bg-white/10 ${
                        slug === key
                          ? 'bg-yellow-500/10 text-yellow-400 font-bold'
                          : 'text-gray-300'
                      }`}
                    >
                      {value.title}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-black via-[#2b0000] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,180,0,0.15),transparent_50%)]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8">
            🔥 Aaj Hi Puja Book Karein
          </h2>

          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Mahakal ki kripa se jeevan mein sukh, shanti aur
            safalta paayein.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              href="tel:7746894292"
              className="bg-white text-black px-10 py-5 rounded-full text-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition duration-300"
            >
              <FaPhoneAlt />
              Call Pandit Ji
            </a>

            <a
              href="https://wa.me/917746894292"
              target="_blank"
              className="bg-green-600 px-10 py-5 rounded-full text-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition duration-300"
            >
              <FaWhatsapp />
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-10 text-center">
        <h3 className="text-3xl font-black text-yellow-400 mb-4">
          ज्योतिष आचार्य पंडित पुराण शर्मा
        </h3>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-loose px-6">
          विश्व प्रसिद्ध ज्योतिष एवं कर्मकांड विशेषज्ञ।
          महाकाल की पावन नगरी उज्जैन में वर्षों से वैदिक
          पूजा, अनुष्ठान एवं ग्रह दोष निवारण सेवाएं प्रदान
          कर रहे हैं।
        </p>

        <p className="text-gray-500 mt-8">
          © 2026 All Rights Reserved
        </p>
      </footer>

      {/* FLOATING BUTTONS */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="tel:7746894292"
        className="fixed bottom-6 left-6 bg-gradient-to-r from-red-600 to-orange-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50"
      >
        <FaPhoneAlt />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/917746894292"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-2xl z-50"
      >
        <FaWhatsapp />
      </motion.a>
    </main>
  )
}