/**
 * IMATEC SOLUTIONS — Business Services Page
 * Design: Rural Professional | Navy + Lime Green
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone, Shield, Settings, Wifi, Server, Cloud, Monitor,
  CheckCircle, ArrowRight, Star
} from "lucide-react";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const services = [
  {
    icon: Settings,
    title: "Managed IT Support",
    desc: "We proactively monitor and maintain your IT systems so problems get fixed before they affect your business. Monthly plans available for 1–50+ PCs.",
    features: ["24/7 system monitoring", "Regular maintenance", "Priority support", "Monthly reporting"],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Antivirus",
    desc: "Protect your business from ransomware, phishing, and data breaches. We implement and manage professional-grade security solutions.",
    features: ["Business antivirus & endpoint protection", "Email security & spam filtering", "Security audits", "Staff awareness training"],
  },
  {
    icon: Cloud,
    title: "Microsoft 365 & Cloud",
    desc: "Setup, migration, and ongoing support for Microsoft 365. Email, Teams, OneDrive, SharePoint — we handle it all.",
    features: ["Microsoft 365 licensing", "Email migration", "Teams setup & training", "OneDrive & SharePoint"],
  },
  {
    icon: Server,
    title: "Servers & Infrastructure",
    desc: "Server installation, configuration, and maintenance. From small business file servers to multi-server environments.",
    features: ["Server installation & setup", "Active Directory & domain", "Virtualisation", "Server maintenance"],
  },
  {
    icon: Wifi,
    title: "Networking & Internet",
    desc: "Reliable business networking, Wi-Fi, and internet solutions. We design and install networks that work.",
    features: ["Business Wi-Fi design & install", "Firewall & router setup", "VPN for remote workers", "Network troubleshooting"],
  },
  {
    icon: Monitor,
    title: "Hardware Supply & Setup",
    desc: "We source, supply, and set up computers, laptops, printers, and all IT hardware at competitive prices.",
    features: ["Business-grade computers & laptops", "Printer supply & setup", "Monitors & peripherals", "Hardware lifecycle management"],
  },
];

const testimonials = [
  {
    quote: "For our company, Imatec is more than just a reliable and professional IT services provider. Not only do Ian and his team support our network of PCs and associated software, they understand and support all parts of our business.",
    name: "Colin Parker", company: "Daltons", stars: 5,
  },
  {
    quote: "Imatec are able to support our rapidly changing IT environment, letting our team focus on building websites. They supply us with computers, IT support, and Microsoft Office 365.",
    name: "Tim Hampton", company: "Mata Digital", stars: 5,
  },
  {
    quote: "Imatec provide us with the hardware we need to let us focus on what we do best – software development. We highly recommend them.",
    name: "Nick Humphries", company: "LuminateOne", stars: 5,
  },
];

export default function BusinessServices() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#2B4A8C] overflow-hidden min-h-[400px] flex items-center py-16">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389852317/8YvbJQJAwg2XQZY47YRvMb/hero_business_it-2Ha4aKU4KNkwGX5HrKjdyX.webp"
            alt="Imatec business IT support"
            className="w-full h-full object-cover object-right-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B4A8C] via-[#2B4A8C]/70 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="imatec-section-label text-[#7DC800] mb-3">Business IT Support</div>
            <h1 className="imatec-heading text-white mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
              IT Support That Keeps<br />Your Business Running
            </h1>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              From a single-PC farm office to a 50-computer business network — Imatec provides reliable, professional IT support tailored to real Kiwi businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+6478885627" className="btn-green pulse-ring">
                <Phone size={18} />
                Call: 07 888 5627
              </a>
              <Link href="/contact-imatec-it-support" className="btn-primary border border-white/20">
                Get a Free IT Assessment
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="imatec-section-label text-[#7DC800] mb-2">Our Business Services</div>
              <h2 className="imatec-heading text-[#2B4A8C]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                Everything Your Business Needs
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 80}>
                <div className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-[#7DC800]/50 transition-all h-full">
                  <div className="w-12 h-12 bg-[#2B4A8C]/8 rounded-lg flex items-center justify-center mb-4">
                    <s.icon size={24} className="text-[#2B4A8C]" />
                  </div>
                  <h3 className="imatec-heading text-[#2B4A8C] mb-2" style={{ fontSize: "1.3rem" }}>{s.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={13} className="text-[#7DC800] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-[#F7F5F0]">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-10">
              <div className="imatec-section-label text-[#7DC800] mb-2">Who We Serve</div>
              <h2 className="imatec-heading text-[#2B4A8C]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                We Work With All Types of Local Businesses
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Farming & Agriculture", "Medical Practices", "Retail Shops", "Professional Services", "Trades & Construction", "Hospitality"].map((type, i) => (
              <FadeUp key={type} delay={i * 60}>
                <div className="bg-white border border-gray-100 rounded-lg p-4 text-center hover:border-[#7DC800] transition-colors">
                  <div className="text-[#2B4A8C] font-semibold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}>{type}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#2B4A8C]">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-10">
              <div className="imatec-section-label text-[#7DC800] mb-2">Client Stories</div>
              <h2 className="imatec-heading text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                What Our Business Clients Say
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="bg-white/8 border border-white/10 rounded-lg p-6 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} fill="#7DC800" className="text-[#7DC800]" />
                    ))}
                  </div>
                  <blockquote className="text-blue-100 text-sm leading-relaxed flex-1 mb-4">"{t.quote}"</blockquote>
                  <div>
                    <div className="text-white font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{t.name}</div>
                    <div className="text-[#7DC800] text-xs font-semibold">{t.company}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="imatec-heading text-[#2B4A8C] mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
            Ready to Get Your IT Sorted?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Call us today for a free, no-obligation IT assessment. We'll tell you exactly what you need — and what you don't.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+6478885627" className="btn-green pulse-ring">
              <Phone size={18} /> Matamata: 07 888 5627
            </a>
            <a href="tel:+0798556255" className="btn-green">
              <Phone size={18} /> Tauranga: 07 985 6255
            </a>
            <Link href="/contact-imatec-it-support" className="btn-primary">
              Send Us a Message <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
