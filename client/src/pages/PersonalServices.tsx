/**
 * IMATEC SOLUTIONS — Personal Services Page
 * Design: Rural Professional | Navy + Lime Green
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Monitor, Laptop, Printer, HardDrive, Zap, Shield, CheckCircle, ArrowRight, Star } from "lucide-react";

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
    icon: Monitor,
    title: "Desktop & PC Repairs",
    desc: "Slow computer? Won't turn on? Blue screen of death? We diagnose and fix all PC and desktop issues quickly.",
    features: ["Virus & malware removal", "Hardware fault diagnosis", "Component replacement", "Performance tune-ups"],
  },
  {
    icon: Laptop,
    title: "Laptop Repairs",
    desc: "Cracked screen, broken keyboard, won't charge? We repair all makes and models of laptops.",
    features: ["Screen replacement", "Keyboard & trackpad repair", "Battery replacement", "Charging port repair"],
  },
  {
    icon: Printer,
    title: "Printer Repairs",
    desc: "Printer not printing? Paper jams? Connectivity issues? We service all major printer brands.",
    features: ["All major brands serviced", "Paper jam & feed issues", "Ink & toner problems", "Wireless setup"],
  },
  {
    icon: HardDrive,
    title: "Data Recovery",
    desc: "Lost important files? We can often recover data from failed hard drives, corrupted drives, and accidentally deleted files.",
    features: ["Hard drive recovery", "Deleted file recovery", "Corrupted drive repair", "Data backup setup"],
  },
  {
    icon: Zap,
    title: "Speed & Performance",
    desc: "Is your computer running slowly? We'll clean it up, remove junk, upgrade hardware, and get it running like new.",
    features: ["Full system clean-up", "RAM & SSD upgrades", "Software optimisation", "Startup speed improvement"],
  },
  {
    icon: Shield,
    title: "Virus & Security",
    desc: "Infected computer? We remove viruses, malware, and ransomware, and set up proper protection.",
    features: ["Virus & malware removal", "Antivirus installation", "Security health check", "Safe browsing setup"],
  },
];

const testimonials = [
  {
    quote: "Imatec Solutions provide all of my IT support, both business and home, and I wouldn't use anyone else. I have found their service to be prompt, reliable and extremely professional.",
    name: "Louise Trowler", company: "Lime Limited", stars: 5,
  },
  {
    quote: "Many thanks for the excellent service and professionalism shown regarding our recent computer problems.",
    name: "J Rings", company: "Local Client", stars: 5,
  },
];

export default function PersonalServices() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#2B4A8C] overflow-hidden min-h-[400px] flex items-center py-16">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389852317/8YvbJQJAwg2XQZY47YRvMb/hero_personal_services-FQdQLhvhV2XL9ZAGdePamh.webp"
            alt="Imatec computer repair workshop"
            className="w-full h-full object-cover object-right-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B4A8C] via-[#2B4A8C]/70 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="imatec-section-label text-[#7DC800] mb-3">Personal & Home Services</div>
            <h1 className="imatec-heading text-white mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
              Computer Repairs You Can<br />Actually Rely On
            </h1>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Whether it's your home computer, work laptop, or the family printer — we fix it fast, and we explain what we did in plain English. No jargon, no surprises.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+6478885627" className="btn-green pulse-ring">
                <Phone size={18} /> Call: 07 888 5627
              </a>
              <Link href="/contact-imatec-it-support" className="btn-primary border border-white/20">
                Get a Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="imatec-section-label text-[#7DC800] mb-2">What We Fix</div>
              <h2 className="imatec-heading text-[#2B4A8C]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                All Your Computer Repair Needs
              </h2>
              <p className="mt-3 text-gray-600 max-w-xl mx-auto">We service all makes and models. Bring it in, or we can come to you.</p>
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
                        <CheckCircle size={13} className="text-[#7DC800] shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[#F7F5F0]">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-10">
              <div className="imatec-section-label text-[#7DC800] mb-2">How It Works</div>
              <h2 className="imatec-heading text-[#2B4A8C]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                Simple, Straightforward Process
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Contact Us", desc: "Call or fill in our contact form. Tell us what's wrong." },
              { step: "2", title: "We Diagnose", desc: "We assess the problem and give you a clear quote upfront." },
              { step: "3", title: "We Fix It", desc: "Fast, professional repair. No fix, no fee." },
              { step: "4", title: "Back to Normal", desc: "We return your device and explain what we did." },
            ].map((p, i) => (
              <FadeUp key={p.step} delay={i * 80}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#2B4A8C] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="imatec-heading text-[#7DC800]" style={{ fontSize: "1.5rem" }}>{p.step}</span>
                  </div>
                  <h3 className="imatec-heading text-[#2B4A8C] mb-2" style={{ fontSize: "1.2rem" }}>{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
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
              <h2 className="imatec-heading text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                What Our Customers Say
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
            Got a Computer Problem? We Can Help.
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Call us today or drop in to either of our locations. We'll give you an honest assessment and a fair quote.</p>
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
