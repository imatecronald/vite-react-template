/**
 * IMATEC SOLUTIONS — Why Imatec Page
 * Design: Rural Professional | Navy + Lime Green
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, CheckCircle, Star, ArrowRight, Users, Clock, ThumbsUp, Zap } from "lucide-react";

const WHY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389852317/8YvbJQJAwg2XQZY47YRvMb/why_imatec_img_0133eb25.jpg";

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

const pillars = [
  {
    icon: Users,
    title: "Genuinely Local",
    desc: "We're not a national chain or a call centre. We're your neighbours — based in Matamata and Tauranga, serving the communities we live in. When you call us, you talk to someone who knows your area, your business, and your name.",
  },
  {
    icon: ThumbsUp,
    title: "Plain English, Always",
    desc: "We believe you deserve to understand what's wrong with your IT and what we're doing to fix it. No confusing jargon, no unexplained invoices. We explain everything clearly before we start.",
  },
  {
    icon: Clock,
    title: "Fast When It Matters",
    desc: "A computer problem can stop your whole business. We prioritise getting you back up and running as quickly as possible — because we understand that downtime costs you money.",
  },
  {
    icon: Zap,
    title: "Fresh Start, Same Values",
    desc: "With new leadership and renewed focus, Imatec is committed to delivering the level of service our clients deserve. Better systems, better communication, better outcomes — without losing the local, personal touch that made us who we are.",
  },
];

const allTestimonials = [
  {
    quote: "For our company, Imatec is more than just a reliable and professional IT services provider. Not only do Ian and his team support our network of PCs and associated software, they understand and support all parts of our business.",
    name: "Colin Parker", company: "Daltons", stars: 5,
  },
  {
    quote: "Imatec Solutions provide all of my IT support, both business and home, and I wouldn't use anyone else. I have found their service to be prompt, reliable and extremely professional. They understand what I need even if I don't!",
    name: "Louise Trowler", company: "Lime Limited", stars: 5,
  },
  {
    quote: "Imatec provides a fantastic service for all our IT needs. Our computer system is crucial for business and Imatec are always prompt & efficient with maintenance & upgrades and always have answers when we need them.",
    name: "Melanie Gatenby", company: "Morrinsville Medical Center", stars: 5,
  },
  {
    quote: "Imatec are able to support our rapidly changing IT environment, letting our team focus on building websites. They supply us with computers, IT support, and Microsoft Office 365.",
    name: "Tim Hampton", company: "Mata Digital", stars: 5,
  },
  {
    quote: "Many thanks for the excellent service and professionalism shown regarding our recent computer problems.",
    name: "J Rings", company: "Local Client", stars: 5,
  },
  {
    quote: "Imatec provide us with the hardware we need to let us focus on what we do best – software development. They provide us with hardware, and our Office 365 environment. We highly recommend them.",
    name: "Nick Humphries", company: "LuminateOne", stars: 5,
  },
];

export default function WhyImatec() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#2B4A8C] overflow-hidden min-h-[400px] flex items-center py-16">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389852317/8YvbJQJAwg2XQZY47YRvMb/hero_why_imatec-EMP4iSqJk8MLQmD3iyTW3a.webp"
            alt="Imatec senior IT professional"
            className="w-full h-full object-cover object-right-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B4A8C] via-[#2B4A8C]/70 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="imatec-section-label text-[#7DC800] mb-3">Why Choose Imatec</div>
            <h1 className="imatec-heading text-white mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
              20+ Years of Local IT.<br />
              <span className="text-[#7DC800]">A Fresh Commitment to Service.</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We've been part of the Matamata and Tauranga communities for over two decades. We're not just an IT company — we're a local team that genuinely cares about keeping your business running.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div>
                <div className="imatec-section-label text-[#7DC800] mb-3">Our Story</div>
                <h2 className="imatec-heading text-[#2B4A8C] mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
                  Imatec — Matamata's Largest<br />and Longest-Running IT Company
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Imatec Solutions has been the go-to IT company for Matamata and the surrounding Waikato region for over 20 years. From the early days of helping local businesses get their first computers set up, to today managing complex networks and cloud environments — we've grown alongside our community.
                  </p>
                  <p>
                    Our Tauranga office has been serving the Bay of Plenty for many years, bringing the same trusted local service to the region. Whether you're a farmer with one computer, a small business with a handful of staff, or a larger operation like Matamata Medical — we have the experience and expertise to support you.
                  </p>
                  <p>
                    With fresh leadership and a renewed focus on service quality, communication, and client outcomes, we're more committed than ever to being the IT partner you can actually rely on.
                  </p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div className="relative">
                <img
                  src={WHY_IMG}
                  alt="Imatec team in their NZ workshop"
                  className="rounded-lg shadow-xl w-full object-cover"
                  style={{ maxHeight: "420px" }}
                />
                <div className="absolute -bottom-4 -right-4 bg-[#2B4A8C] text-white px-6 py-4 rounded-lg shadow-lg">
                  <div className="imatec-heading text-[#7DC800]" style={{ fontSize: "1.8rem" }}>500+</div>
                  <div className="text-sm text-blue-200">Happy Clients<br />Across NZ</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-16 bg-[#F7F5F0]">
        <div className="container">
          <FadeUp>
            <div className="text-center mb-12">
              <div className="imatec-section-label text-[#7DC800] mb-2">What Sets Us Apart</div>
              <h2 className="imatec-heading text-[#2B4A8C]" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                The Imatec Difference
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
              <FadeUp key={p.title} delay={i * 80}>
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-[#2B4A8C] rounded-lg flex items-center justify-center shrink-0">
                      <p.icon size={26} className="text-[#7DC800]" />
                    </div>
                    <div>
                      <h3 className="imatec-heading text-[#2B4A8C] mb-3" style={{ fontSize: "1.4rem" }}>{p.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-sm">{p.desc}</p>
                    </div>
                  </div>
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
            <div className="text-center mb-12">
              <div className="imatec-section-label text-[#7DC800] mb-2">Client Testimonials</div>
              <h2 className="imatec-heading text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
                Don't Just Take Our Word For It
              </h2>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((t, i) => (
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
            Ready to Experience the Imatec Difference?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join hundreds of local businesses who trust Imatec for their IT needs. Call us today — no obligation, just honest advice.
          </p>
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
