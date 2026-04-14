/**
 * IMATEC SOLUTIONS — Locations Page
 * Design: Rural Professional | Navy + Lime Green
 */

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Car } from "lucide-react";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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
  return <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const locations = [
  {
    name: "Imatec Matamata",
    subtitle: "Our Original Home",
    address: "25 Arawa Street, Matamata 3400",
    phone: "07 888 5627",
    tel: "+6478885627",
    email: "support@imatec.co.nz",
    hours: [
      { day: "Monday – Friday", time: "8:00am – 5:00pm" },
      { day: "Saturday", time: "By appointment" },
      { day: "Sunday", time: "Closed" },
    ],
    directions: "Located on Arawa Street in central Matamata. Free parking available on-site.",
    serving: ["Matamata", "Morrinsville", "Te Aroha", "Tirau", "Putaruru", "Waikato region"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.9!2d175.7722!3d-37.8082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d0b7b7b7b7b7b%3A0x0!2sArawa+St%2C+Matamata!5e0!3m2!1sen!2snz!4v1",
  },
  {
    name: "Imatec Tauranga",
    subtitle: "Bay of Plenty",
    address: "36 Awataha Crescent, The Lakes, Tauriko, Tauranga 3110",
    phone: "07 985 6255",
    tel: "+0798556255",
    email: "support@imatec.co.nz",
    hours: [
      { day: "Monday – Friday", time: "8:30am – 5:30pm" },
      { day: "Saturday", time: "By appointment" },
      { day: "Sunday", time: "Closed" },
    ],
    directions: "Located in The Lakes, Tauriko. Easy access from State Highway 29.",
    serving: ["Tauranga", "Tauriko", "Papamoa", "Mount Maunganui", "Te Puke", "Bay of Plenty"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.9!2d176.0722!3d-37.7082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d1b7b7b7b7b7b%3A0x0!2sTauriko%2C+Tauranga!5e0!3m2!1sen!2snz!4v1",
  },
];

export default function Locations() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#2B4A8C] overflow-hidden min-h-[400px] flex items-center py-16">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389852317/8YvbJQJAwg2XQZY47YRvMb/hero_locations-ZkxpHvZCLFGwFUyPYapBZr.webp"
            alt="Imatec team at NZ office"
            className="w-full h-full object-cover object-right-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B4A8C] via-[#2B4A8C]/70 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="imatec-section-label text-[#7DC800] mb-3">Our Locations</div>
            <h1 className="imatec-heading text-white mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
              Two Offices.<br />One Trusted Team.
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We have offices in Matamata and Tauranga, serving the Waikato and Bay of Plenty regions. Drop in, call us, or we can come to you.
            </p>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-16 bg-[#F7F5F0]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {locations.map((loc, i) => (
              <FadeUp key={loc.name} delay={i * 100} className="h-full">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full">
                  {/* Header */}
                  <div className="bg-[#2B4A8C] px-6 py-5">
                    <div className="imatec-section-label text-[#7DC800] mb-1">{loc.subtitle}</div>
                    <h2 className="imatec-heading text-white" style={{ fontSize: "1.8rem" }}>{loc.name}</h2>
                  </div>

                  {/* Map placeholder */}
                  <div className="bg-gray-200 h-48 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#2B4A8C]/10" />
                    <div className="text-center z-10">
                      <MapPin size={32} className="text-[#7DC800] mx-auto mb-2" />
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2B4A8C] font-semibold text-sm hover:text-[#7DC800] transition-colors"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        View on Google Maps →
                      </a>
                    </div>
                    {/* Grid pattern background */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: "linear-gradient(#2B4A8C 1px, transparent 1px), linear-gradient(90deg, #2B4A8C 1px, transparent 1px)",
                      backgroundSize: "30px 30px"
                    }} />
                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Contact */}
                      <div>
                        <h3 className="imatec-heading text-[#2B4A8C] mb-3" style={{ fontSize: "1.1rem" }}>Contact</h3>
                        <div className="space-y-2.5 text-sm">
                          <div className="flex items-start gap-2.5 text-gray-700">
                            <MapPin size={14} className="text-[#7DC800] mt-0.5 shrink-0" />
                            <span>{loc.address}</span>
                          </div>
                          <a href={`tel:${loc.tel}`} className="flex items-center gap-2.5 text-[#2B4A8C] font-semibold hover:text-[#7DC800] transition-colors">
                            <Phone size={14} className="text-[#7DC800]" />
                            {loc.phone}
                          </a>
                          <a href={`mailto:${loc.email}`} className="flex items-center gap-2.5 text-gray-600 hover:text-[#7DC800] transition-colors">
                            <Mail size={14} className="text-[#7DC800]" />
                            {loc.email}
                          </a>
                        </div>
                      </div>

                      {/* Hours */}
                      <div>
                        <h3 className="imatec-heading text-[#2B4A8C] mb-3" style={{ fontSize: "1.1rem" }}>Opening Hours</h3>
                        <div className="space-y-1.5 text-sm">
                          {loc.hours.map((h) => (
                            <div key={h.day} className="flex justify-between gap-2">
                              <span className="text-gray-600">{h.day}</span>
                              <span className="text-[#2B4A8C] font-semibold">{h.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Directions */}
                    <div className="mt-5 pt-5 border-t border-gray-100">
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <Car size={14} className="text-[#7DC800] mt-0.5 shrink-0" />
                        {loc.directions}
                      </div>
                    </div>

                    {/* Areas served */}
                    <div className="mt-4">
                      <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Areas We Serve</div>
                      <div className="flex flex-wrap gap-1.5">
                        {loc.serving.map((area) => (
                          <span key={area} className="bg-[#2B4A8C]/8 text-[#2B4A8C] text-xs px-2.5 py-1 rounded-full font-medium">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={`tel:${loc.tel}`}
                      className="mt-5 btn-green w-full justify-center"
                    >
                      <Phone size={16} />
                      Call {loc.name}
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Support */}
      <section className="py-12 bg-white">
        <div className="container">
          <FadeUp>
            <div className="bg-[#2B4A8C] rounded-xl p-8 text-center">
              <div className="imatec-section-label text-[#7DC800] mb-3">Can't Come In?</div>
              <h2 className="imatec-heading text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}>
                We Also Offer Remote Support
              </h2>
              <p className="text-blue-200 mb-6 max-w-lg mx-auto text-sm">
                Many IT problems can be fixed remotely — without you needing to bring your computer in or wait for a technician to visit. We connect securely to your computer and fix the problem while you watch.
              </p>
              <a
                href="https://get.teamviewer.com/imatec"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green inline-flex"
              >
                Download Remote Support Tool
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
