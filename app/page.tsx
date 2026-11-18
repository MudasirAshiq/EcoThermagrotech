'use client';

import { useState, useEffect } from 'react';
import { Leaf, Flame, TreePine, Droplets, Sun, Recycle, Users, Sprout, ShieldCheck, Factory, Home, Landmark, Zap, Cloud, Timer, Phone, MessageCircle, MapPin, Linkedin, CheckCircle2, X, Package, Box, Layers, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

interface SolutionItem {
  id: string;
  title: string;
  description: string;
  previewFeatures: string[];
  moreFeaturesCount: number;
  allFeatures: string[];
  icon: React.ReactNode;
}

const sustainableSolutions: SolutionItem[] = [
  {
    id: 'premium-wood-pellets',
    title: 'Premium Wood Pellets',
    description: 'High-density biomass fuel pellets designed for maximum efficiency in domestic heating systems and pellet stoves.',
    previewFeatures: [
      'High Calorific Value (4800+ kcal/kg)',
      'Low Ash Content (<1%)',
    ],
    moreFeaturesCount: 2,
    allFeatures: [
      'High Calorific Value (4800+ kcal/kg)',
      'Low Ash Content (<1%)',
      'Zero Chemical Additives & 100% Pure Biomass',
      'Standardized 6-8mm Pellet Diameter & Consistent Flow',
      'Low Moisture Content (<8%) for High Efficiency',
    ],
    icon: <Package className="h-5 w-5" />,
  },
  {
    id: 'industrial-bio-fuel',
    title: 'Industrial Bio-Fuel',
    description: 'Sustainable thermal energy solutions for factories, brick kilns, and large-scale heating plants in the industrial sector.',
    previewFeatures: [
      'Cost Effective vs Coal',
      'Consistent Burn Rate',
    ],
    moreFeaturesCount: 2,
    allFeatures: [
      'Cost Effective vs Coal',
      'Consistent Burn Rate',
      'Eco-Compliant Emissions',
      'Bulk Delivery Available',
    ],
    icon: <Box className="h-5 w-5" />,
  },
  {
    id: 'sawdust-supply-chain',
    title: 'Sawdust Supply Chain',
    description: 'A community-driven collection model that transforms timber waste into wealth for local families and mill owners.',
    previewFeatures: [
      'Zero Waste Initiative',
      'Local Sourcing',
    ],
    moreFeaturesCount: 2,
    allFeatures: [
      'Zero Waste Initiative',
      'Local Sourcing & Fair Value',
      'Direct Economic Benefit for Sawmills & Families',
      'Decentralized Biomass Collection Network',
    ],
    icon: <Recycle className="h-5 w-5" />,
  },
  {
    id: 'eco-briquettes',
    title: 'Eco-Briquettes',
    description: 'Large compressed biomass blocks ideal for traditional fireplaces and open hearths, providing long-lasting warmth.',
    previewFeatures: [
      'Slow Burn Technology',
      'Easy Storage',
    ],
    moreFeaturesCount: 2,
    allFeatures: [
      'Slow Burn Technology',
      'Easy Storage & Stackable',
      'High Energy Density & Steady Heat',
      'Minimal Smoke & Low Ash Residue',
    ],
    icon: <Layers className="h-5 w-5" />,
  },
];

const circularSteps = [
  {
    id: 'step-1',
    title: 'Wood Waste Collection',
    description: 'Recovering sawdust and timber waste from local mills across the region.',
    icon: <Recycle className="h-6 w-6" />,
  },
  {
    id: 'step-2',
    title: 'Sustainable Processing',
    description: 'Converting raw biomass into high-density, low-moisture pellets.',
    icon: <Factory className="h-6 w-6" />,
  },
  {
    id: 'step-3',
    title: 'Clean Energy Delivery',
    description: 'Providing efficient, low-smoke fuel for households and industrial units.',
    icon: <Flame className="h-6 w-6" />,
  },
  {
    id: 'step-4',
    title: 'Community Impact',
    description: 'Creating green jobs and reducing the environmental footprint of heating.',
    icon: <Users className="h-6 w-6" />,
  },
];

export default function Page() {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedSolution(null);
    };
    if (selectedSolution) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedSolution]);
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/images/ECOTHERM.png" 
              alt="Ecotherm Agrotech Logo" 
              width={240} 
              height={60} 
              className="object-contain h-auto w-[180px] lg:w-[230px]" 
              priority
            />
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
            <Link href="#about" className="relative py-1 hover:text-emerald-600 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-300 hover:after:scale-x-100">About</Link>
            <Link href="#problem" className="relative py-1 hover:text-emerald-600 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-300 hover:after:scale-x-100">The Problem</Link>
            <Link href="#solution" className="relative py-1 hover:text-emerald-600 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-300 hover:after:scale-x-100">Our Solution</Link>
            <Link href="#products" className="relative py-1 hover:text-emerald-600 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-300 hover:after:scale-x-100">Products</Link>
            <Link href="#market" className="relative py-1 hover:text-emerald-600 transition-colors after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-300 hover:after:scale-x-100">Market</Link>
          </nav>
          <a href="#contact" className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors">
            Contact Us
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative pt-24 pb-32 overflow-hidden"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/hero-bg.jpg"
              alt="Scottish Highlands forest and sustainable biomass energy landscape"
              fill
              priority
              className="object-cover opacity-80"
            />
            {/* Center soft highlight for crisp text legibility without washing out forest */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(250,250,249,0.85)_0%,_rgba(250,250,249,0.4)_50%,_rgba(250,250,249,0.1)_100%)]"></div>
            {/* Smooth transition into next section */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-stone-50 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-stone-900 mb-6 max-w-4xl mx-auto leading-tight">
              Sustainable Fuel for <br className="hidden md:block" />
              <span className="text-emerald-600">Scotland&apos;s Future</span>
            </h1>
            <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Producing wooden pellets from woodwaste to support growing energy requirements, combat rural fuel poverty, and drive the transition to Net-Zero 2045.
            </p>
            <div className="flex justify-center">
              <a href="#about" className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
                Learn More
              </a>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-6">Who We Are & What We Do</h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Ecotherm Agrotech is a pre-trading social venture based in Scotland. We seek to produce wooden pellets from existing wood waste as a sustainable fuel to support the growing energy requirements in Scotland.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Our existing wood waste can be channelized to build a participatory model to include local communities in producing renewable bioenergy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-bold text-stone-900 text-xl mb-1">Net-Zero 2045</h4>
                  <p className="text-sm text-stone-500">Aligning with Scottish Gov goals</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h4 className="font-bold text-stone-900 text-xl mb-1">Community First</h4>
                  <p className="text-sm text-stone-500">Co-operative inspired governance</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Problem Section */}
        <motion.section 
          id="problem" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-stone-900 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenges We Face</h2>
              <p className="text-stone-400 text-lg">The current energy landscape in Scotland presents significant hurdles that demand innovative, local solutions.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Factory className="h-8 w-8 text-amber-400" />,
                  title: "Import Dependency",
                  desc: "UK imports over 65% of its wood pellets, primarily from the US and the Baltics."
                },
                {
                  icon: <TreePine className="h-8 w-8 text-amber-400" />,
                  title: "Climate Risk",
                  desc: "Forest degradation from non-regenerative harvesting undermines Net Zero goals."
                },
                {
                  icon: <Home className="h-8 w-8 text-amber-400" />,
                  title: "Rural Fuel Poverty",
                  desc: "Nearly 20% of Scottish households experience energy poverty, especially in off-grid areas."
                },
                {
                  icon: <Zap className="h-8 w-8 text-amber-400" />,
                  title: "Fragmented Approaches",
                  desc: "No scalable model exists that integrates energy crop cultivation, carbon removal, and community benefit."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-stone-800 p-8 rounded-2xl border border-stone-700 hover:border-amber-400/50 transition-colors"
                >
                  <div className="bg-stone-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-stone-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Sustainable Solutions Section */}
        <motion.section 
          id="solution" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-stone-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase mb-2 inline-block">
                WHAT WE OFFER
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 font-normal tracking-tight">
                Sustainable Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sustainableSolutions.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700 mb-5">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-stone-900 mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {item.previewFeatures.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                      <span className="text-xs text-stone-400 font-medium pl-6 block">
                        +{item.moreFeaturesCount} more features
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedSolution(item)}
                    className="w-full py-2.5 px-4 rounded-xl border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium text-sm transition-colors text-center cursor-pointer mt-6"
                  >
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Vision & Circular Economy Model Section */}
        <section id="products">
          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-24 bg-white text-center"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase mb-3 inline-block">
                OUR VISION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 font-normal tracking-tight mb-8">
                Sustainability Meets Innovation
              </h2>
              <div className="relative max-w-3xl mx-auto px-4 sm:px-8">
                <p className="text-stone-600 text-base sm:text-lg lg:text-xl leading-relaxed italic">
                  &ldquo;We envision a Scotland where natural resources power the future. By transforming wood waste into high-efficiency fuel, we create a circular economy that protects our forests while empowering local communities.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Circular Economy Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-24 bg-[#062d20] text-white relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal tracking-tight mb-4">
                  Our Circular Economy Model
                </h2>
                <p className="text-emerald-200/80 text-sm sm:text-base leading-relaxed">
                  We close the loop on waste, turning a local environmental hazard into a valuable energy resource.
                </p>
              </div>

              {/* 4 Steps Grid with connecting arrows */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative">
                {circularSteps.map((step, idx) => (
                  <div key={step.id} className="relative flex flex-col">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="h-full bg-emerald-900/30 border border-emerald-700/40 hover:border-emerald-500/60 transition-colors rounded-2xl p-6 sm:p-7 text-center backdrop-blur-sm flex flex-col items-center justify-start min-h-[220px]"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-800/80 text-emerald-300 flex items-center justify-center mb-5 shrink-0 shadow-inner">
                        {step.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2.5">
                        {step.title}
                      </h3>
                      <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>

                    {/* Arrow between cards on desktop */}
                    {idx < circularSteps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-emerald-950/80 border border-emerald-700/50 items-center justify-center text-emerald-400 pointer-events-none">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Market Section */}
        <motion.section 
          id="market" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-stone-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Market & Target Customers</h2>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                  The UK biomass market is valued at £7.76 billion, with Scotland accounting for 20-25% of demand. Our initial target is to capture 5% of Scotland&apos;s biomass market.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Domestic Heating", desc: "Off-grid rural homes, starting with the Highlands & Islands where 33-47% face high heating costs.", icon: <Home className="h-5 w-5" /> },
                    { title: "Commercial & Industrial", desc: "Whisky distilleries, food processing, and agriculture needing stable, sustainable fuel.", icon: <Factory className="h-5 w-5" /> },
                    { title: "Public Sector Buildings", desc: "Schools, hospitals, and district heating systems.", icon: <Landmark className="h-5 w-5" /> },
                    { title: "B2B Suppliers", desc: "Biomass energy suppliers looking for local, reliable sources.", icon: <Users className="h-5 w-5" /> }
                  ].map((market, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 bg-emerald-200 text-emerald-800 p-2 rounded-lg h-fit">
                        {market.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-stone-900 mb-1">{market.title}</h4>
                        <p className="text-stone-600">{market.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-200">
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Our Competitive Edge</h3>
                <p className="text-stone-600 mb-8">
                  Unlike competitors (Balcas Energy, Land Energy, UPM Biofuels) who rely on slow-growing traditional forestry or imported biomass, we offer:
                </p>
                <ul className="space-y-4">
                  {[
                    "Focus on fuel-poor, off-grid communities",
                    "Circular forestry model without deforestation",
                    "Agroforestry partnerships for farmer income"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0" />
                      <span className="text-stone-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Founder Section */}
        <motion.section 
          id="founder"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-stone-50"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200/80 shadow-xl shadow-stone-200/50">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Portrait / Image */}
                <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="https://picsum.photos/seed/kashmir-coastal/800/1000"
                    alt="Ar. Aamir Latief Wani - Founder & Principal Architect"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Right Bio & Info */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-emerald-700 uppercase">
                      Founder &amp; Principal Architect
                    </span>
                    <a 
                      href="https://www.linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors group"
                    >
                      <Linkedin className="h-4 w-4 text-emerald-700 group-hover:scale-110 transition-transform" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 font-normal tracking-tight">
                    Ar. Aamir Latief Wani
                  </h2>
                  <div className="w-16 h-1 bg-emerald-500 rounded-full mt-3 mb-6" />

                  <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8">
                    An Edinburgh-based conservation architect, Aamir works on sustainable approaches to preserving heritage structures while making them energy efficient. He designs retrofitting strategies using wood pellets as a green, net-zero carbon emission fuel. Founder of Ecotherm Agritech (Converge Initiative Top 6, 2024–25) and DesArt Studios (Kashmir, 2018), he advocates for energy literacy and the revival of vernacular earthquake-resistant systems like Dhajji Dewari.
                  </p>

                  <div className="flex items-center gap-2.5 text-stone-700 text-sm sm:text-base font-medium">
                    <MapPin className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span>Kashmir, India / Edinburgh, UK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Image 
                  src="/images/ECOTHERM.png" 
                  alt="Ecotherm Agrotech Logo" 
                  width={240} 
                  height={60} 
                  className="object-contain h-auto w-[180px] lg:w-[230px]" 
                  priority
                />
              </div>
              <p className="mb-6 max-w-md leading-relaxed text-stone-400">
                A Scotland-based social venture producing sustainable wooden pellets from existing wood waste to support Scotland&apos;s growing energy requirements.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                <li><Link href="#solution" className="hover:text-emerald-400 transition-colors">Our Solution</Link></li>
                <li><Link href="#products" className="hover:text-emerald-400 transition-colors">Products</Link></li>
                <li><Link href="#market" className="hover:text-emerald-400 transition-colors">Market</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>Inverness, Scotland</li>
                <li><a href="mailto:ecothermagrotech@gmail.com" className="hover:text-emerald-400 transition-colors">ecothermagrotech@gmail.com</a></li>
                <li><a href="tel:+447828643650" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><Phone className="h-4 w-4" /> +44 7828 643650</a></li>
                <li><a href="https://wa.me/447828643650" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><MessageCircle className="h-4 w-4" /> +44 7828 643650</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-8 text-sm">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-stone-500">
              <p>&copy; {new Date().getFullYear()} Ecotherm Agrotech. All rights reserved.</p>
              <p className="hidden md:block text-stone-700">|</p>
              <p>Patent Pending &bull; Trademark Applied</p>
            </div>
            
            <div className="mt-8 md:mt-0 flex items-center justify-center md:justify-end gap-3 group/credits">
              <span className="text-white font-bold text-xs tracking-[0.15em] uppercase">Designed By</span>
              <a 
                href="https://www.blumargins.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 px-3.5 py-1.5 bg-stone-800/80 border border-stone-700/60 rounded-full hover:bg-stone-800 hover:border-blue-500/50 hover:shadow-[0_0_12px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer group/bm no-underline"
              >
                <Image
                  src="/images/blumargins.png"
                  alt="BluMargins Logo"
                  width={111}
                  height={32}
                  className="h-6 w-auto object-contain group-hover/bm:brightness-110 transition-all duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sustainable Solution Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSolution(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-100 my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                {selectedSolution.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-normal tracking-tight mb-3">
                {selectedSolution.title}
              </h3>

              {/* Description */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                {selectedSolution.description}
              </p>

              {/* Features List */}
              <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 mb-6">
                <div className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-emerald-700 uppercase mb-3.5">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>PRODUCT FEATURES</span>
                </div>
                <ul className="space-y-2.5">
                  {selectedSolution.allFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Close Action Button */}
              <button
                onClick={() => setSelectedSolution(null)}
                className="w-full py-3.5 px-6 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-colors text-center shadow-md cursor-pointer"
              >
                Close Details
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
