/**
 * IMATEC SOLUTIONS — Home Page
 * Design: Rural Professional | Navy + Lime Green | Barlow Condensed + Source Sans 3
 * Sections: Hero, Services, Stats, Why Imatec, Testimonials, Locations, Contact CTA
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone, Mail, Monitor, Laptop, Printer, Wifi, Shield, Settings,
  CheckCircle, Star, MapPin, ArrowRight, ChevronRight
} from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389852317/8YvbJQJAwg2XQZY47YRvMb/hero_banner_1f46d806.jpg";
const BUSINESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389852317/8YvbJQJAwg2XQZY47YRvMb/business_services_img_a4116d9a.jpg";
const WHY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389852317/8YvbJQJAwg2XQZY47YRvMb/why_imatec_img_0133eb25.jpg";

const services = [
  { icon: Monitor, title: "Computer & PC Repairs", desc: "Fast, reliable repairs for desktops and all-in-ones. We fix what others can't.", href: "/computer-repairs-matamata-tauranga" },
  { icon: Laptop, title: "Laptop Repairs", desc: "Screen replacements, keyboard repairs, battery issues — we handle it all.", href: "/computer-repairs-matamata-tauranga" },
  { icon: Printer, title: "Printer Repairs", desc: "Get your printer back online fast. All major brands serviced.", href: "/computer-repairs-matamata-tauranga" },
  { icon: Settings, title: "Business IT Support", desc: "Managed IT for small businesses — from 1 PC to 50+. We keep you running.", href: "/it-support-matamata-tauranga" },
  { icon: Shield, title: "Cybersecurity & Antivirus", desc: "Protect your business data with professional security solutions.", href: "/it-support-matamata-tauranga" },
  { icon: Wifi, title: "Networking & Internet", desc: "Reliable networking, Wi-Fi setup, and internet solutions for your workplace.", href: "/it-support-matamata-tauranga" },
];

const testimonials = [
  {
    quote: "For our company, Imatec is more than just a reliable and professional IT services provider. Not only do Ian and his team support our network of PCs and associated software, they understand and support all parts of our business.",
    name: "Colin Parker",
    company: "Daltons",
    stars: 5,
  },
  {
    quote: "Imatec Solutions provide all of my IT support, both business and home, and I wouldn't use anyone else. I have found their service to be prompt, reliable and extremely professional. They understand what I need even if I don't!",
    name: "Louise Trowler",
    company: "Lime Limited",
    stars: 5,
  },
  {
    quote: "Imatec provides a fantastic service for all our IT needs. Our computer system is crucial for business and Imatec are always prompt & efficient with maintenance & upgrades and always have answers when we need them.",
    name: "Melanie Gatenby",
    company: "Morrinsville Medical Center",
    stars: 5,
  },
  {
    quote: "Imatec are able to support our rapidly changing IT environment, letting our team focus on building websites. They supply us with computers, IT support, and Microsoft Office 365.",
    name: "Tim Hampton",
    company: "Mata Digital",
    stars: 5,
  },
  {
    quote: "Many thanks for the excellent service and professionalism shown regarding our recent computer problems.",
    name: "J Rings",
    company: "Local Business",
    stars: 5,
  },
  {
    quote: "Imatec provide us with the hardware we need to let us focus on what we do best – software development. They provide us with hardware, and our Office 365 environment. We highly recommend them.",
    name: "Nick Humphries",
    company: "LuminateOne",
    stars: 5,
  },
];

const whyPoints = [
  { title: "Local Experts You Can Trust", desc: "We've been part of the Matamata and Tauranga communities for over 20 years. We're not a call centre — we're your neighbours." },
  { title: "Plain English, No Jargon", desc: "We explain what's wrong and what we're doing to fix it. No confusing tech-speak, no surprises on your invoice." },
  { title: "Fast Response Times", desc: "When your computer goes down, your business stops. We prioritise getting you back up and running as quickly as possible." },
  { title: "One Provider for Everything", desc: "From a single laptop to a 50-PC network — we handle it all. No need to juggle multiple IT companies." },
];

function useScrollAnimation() {
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
  return ref;
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative bg-[#2B4A8C] overflow-hidden min-h-[560px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Imatec IT technician working on laptop in NZ workshop"
            className="w-full h-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B4A8C] via-[#2B4A8C]/70 to-transparent" />
        </div>

        <div className="container relative z-10 py-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="imatec-section-label text-[#7DC800] mb-4">
              Matamata &amp; Tauranga's IT Experts
            </div>
            <h1
              className="imatec-heading text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              When Your PC Breaks,<br />
              <span className="text-[#7DC800]">Your Business Stops.</span><br />
              We Fix That.
            </h1>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-xl">
              Imatec Solutions provides fast, friendly computer repairs and IT support for small businesses, farmers, and home users across Matamata and Tauranga. No jargon. No runaround. Just results.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+6478885627" className="btn-green pulse-ring">
                <Phone size={18} />
                Call Matamata: 07 888 5627
              </a>
              <Link href="/contact-imatec-it-support" className="btn-primary border border-white/20">
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-4 text-blue-200 text-sm">
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#7DC800]" /> Fast response times</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#7DC800]" /> No fix, no fee</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-[#7DC800]" /> 20+ years local experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK CONTACT BAR ===== */}
      <section className="bg-[#7DC800] py-4">
        <div className="container flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6">
            <a href="tel:+6478885627" className="flex items-center gap-2 text-[#2B4A8C] font-bold hover:underline" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.05rem" }}>
              <MapPin size={16} /> Matamata: 07 888 5627
            </a>
            <a href="tel:+0798556255" className="flex items-center gap-2 text-[#2B4A8C] font-bold hover:underline" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.05rem" }}>
              <MapPin size={16} /> Tauranga: 07 985 6255
            </a>
            <a href="mailto:support@imatec.co.nz" className="flex items-center gap-2 text-[#2B4A8C] font-bold hover:underline" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.05rem" }}>
              <Mail size={16} /> support@imatec.co.nz
            </a>
          </div>
          <Link href="/contact-imatec-it-support" className="bg-[#2B4A8C] text-white px-5 py-2 rounded font-bold hover:bg-[#243d7a] transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", letterSpacing: "0.05em" }}>
            Get Help Now →
          </Link>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-16 bg-white">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="imatec-section-label text-[#7DC800] mb-2">What We Do</div>
              <h2 className="imatec-heading text-[#2B4A8C]" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                Full IT Support — From One PC to Your Whole Business
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Whether you're a farmer with a single computer, a small business with a handful of staff, or a larger operation with servers and networks — we've got you covered.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeUp key={service.title} delay={i * 80}>
                <Link href={service.href}>
                  <div className="group bg-white border border-gray-100 rounded-lg p-6 hover:shadow-lg hover:border-[#7DC800] transition-all duration-300 cursor-pointer h-full">
                    <div className="w-12 h-12 bg-[#2B4A8C]/8 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7DC800]/15 transition-colors">
                      <service.icon size={24} className="text-[#2B4A8C] group-hover:text-[#7DC800] transition-colors" />
                    </div>
                    <h3 className="imatec-heading text-[#2B4A8C] mb-2" style={{ fontSize: "1.3rem" }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.desc}</p>
                    <span className="text-[#7DC800] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[#2B4A8C] py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { num: "20+", label: "Years in Business" },
              { num: "2", label: "Local Offices" },
              { num: "500+", label: "Happy Clients" },
              { num: "1–50", label: "PCs Supported" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="imatec-heading text-[#7DC800]" style={{ fontSize: "2.5rem" }}>{stat.num}</div>
                <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY IMATEC ===== */}
      <section className="py-16 bg-[#F7F5F0]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div>
                <div className="imatec-section-label text-[#7DC800] mb-3">Why Choose Us</div>
                <h2 className="imatec-heading text-[#2B4A8C] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                  Imatec Is More Than<br />Just an IT Company
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  We're a local team that genuinely cares about keeping your business running. With fresh leadership and a renewed commitment to service, we're here to be the IT partner you can actually rely on.
                </p>
                <div className="space-y-5">
                  {whyPoints.map((point, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 bg-[#7DC800] rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="imatec-heading text-[#2B4A8C] mb-1" style={{ fontSize: "1.15rem" }}>{point.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/why-choose-imatec" className="btn-primary">
                    Read Our Full Story
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={150}>
              <div className="relative">
                <img
                  src={WHY_IMG}
                  alt="Imatec team in their NZ workshop"
                  className="rounded-lg shadow-xl w-full object-cover"
                  style={{ maxHeight: "480px" }}
                />
                <div className="absolute -bottom-4 -left-4 bg-[#7DC800] text-[#2B4A8C] px-6 py-4 rounded-lg shadow-lg">
                  <div className="imatec-heading" style={{ fontSize: "1.8rem" }}>20+</div>
                  <div className="text-sm font-semibold">Years Serving<br />Local Businesses</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ===== BUSINESS FOCUS ===== */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp delay={150}>
              <div className="relative order-2 lg:order-1">
                <img
                  src={BUSINESS_IMG}
                  alt="Imatec helping a small business owner in rural NZ"
                  className="rounded-lg shadow-xl w-full object-cover"
                  style={{ maxHeight: "440px" }}
                />
              </div>
            </FadeUp>

            <FadeUp delay={0}>
              <div>
                <div className="imatec-section-label text-[#7DC800] mb-3">For Small Businesses</div>
                <h2 className="imatec-heading text-[#2B4A8C] mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)" }}>
                  IT Support Built for<br />Real Kiwi Businesses
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Most of our clients are small businesses — a farm office, a local shop, a medical practice. You don't need a big IT department. You just need someone reliable you can call when things go wrong.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Managed IT support — we monitor your systems so problems get fixed before they affect you",
                    "Microsoft 365 setup, support and licensing",
                    "Secure backups so you never lose important data",
                    "Remote support — we can often fix issues without even visiting",
                    "Hardware supply and setup — computers, printers, networking",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-gray-700 text-sm">
                      <CheckCircle size={16} className="text-[#7DC800] mt-0.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/it-support-matamata-tauranga" className="btn-primary">
                  Business IT Services
                  <ArrowRight size={16} />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 bg-[#2B4A8C]">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="imatec-section-label text-[#7DC800] mb-2">What Our Clients Say</div>
              <h2 className="imatec-heading text-white" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                Trusted by Local Businesses for 20+ Years
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="bg-white/8 border border-white/10 rounded-lg p-6 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} fill="#7DC800" className="text-[#7DC800]" />
                    ))}
                  </div>
                  <blockquote className="text-blue-100 text-sm leading-relaxed flex-1 mb-4">
                    "{t.quote}"
                  </blockquote>
                  <div>
                    <div className="text-white font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.05rem" }}>
                      {t.name}
                    </div>
                    <div className="text-[#7DC800] text-xs font-semibold">{t.company}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATIONS ===== */}
      <section className="py-16 bg-[#F7F5F0]">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-10">
              <div className="imatec-section-label text-[#7DC800] mb-2">Find Us</div>
              <h2 className="imatec-heading text-[#2B4A8C]" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                Two Locations. One Team.
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Imatec Matamata",
                address: "25 Arawa Street, Matamata 3400",
                phone: "07 888 5627",
                tel: "+6478885627",
                hours: "Mon–Fri: 8am–5pm",
                desc: "Our original home base. Serving Matamata, Morrinsville, Te Aroha, and the wider Waikato for over 20 years.",
              },
              {
                name: "Imatec Tauranga",
                address: "36 Awataha Crescent, The Lakes, Tauriko, Tauranga 3110",
                phone: "07 985 6255",
                tel: "+0798556255",
                hours: "Mon–Fri: 8:30am–5:30pm",
                desc: "Serving Tauranga, Tauriko, Papamoa, and the Bay of Plenty region with the same trusted Imatec service.",
              },
            ].map((loc, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="bg-[#2B4A8C] px-6 py-4">
                    <h3 className="imatec-heading text-white text-xl">{loc.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">{loc.desc}</p>
                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2.5 text-gray-700">
                        <MapPin size={15} className="text-[#7DC800] mt-0.5 shrink-0" />
                        {loc.address}
                      </div>
                      <a href={`tel:${loc.tel}`} className="flex items-center gap-2.5 text-[#2B4A8C] font-semibold hover:text-[#7DC800] transition-colors">
                        <Phone size={15} className="text-[#7DC800]" />
                        {loc.phone}
                      </a>
                      <div className="flex items-center gap-2.5 text-gray-600">
                        <span className="text-[#7DC800]">🕐</span>
                        {loc.hours}
                      </div>
                    </div>
                    <a
                      href={`tel:${loc.tel}`}
                      className="mt-5 btn-green w-full justify-center text-sm py-2.5"
                    >
                      <Phone size={15} />
                      Call {loc.name.split(" ")[1]}
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="bg-[#2B4A8C] rounded-2xl p-8 md:p-12 text-center">
            <div className="imatec-section-label text-[#7DC800] mb-3">Get In Touch</div>
            <h2 className="imatec-heading text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
              New Gear? Old Gear? Connection Issues?
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Whatever your IT problem, we have the solution. Contact the friendly Imatec team today — calling is the fastest way to get help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+6478885627" className="btn-green pulse-ring">
                <Phone size={18} />
                Matamata: 07 888 5627
              </a>
              <a href="tel:+0798556255" className="btn-green">
                <Phone size={18} />
                Tauranga: 07 985 6255
              </a>
              <Link href="/contact-imatec-it-support" className="btn-primary border border-white/20">
                Send Us a Message
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
