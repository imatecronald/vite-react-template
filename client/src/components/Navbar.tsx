/**
 * IMATEC SOLUTIONS — Navbar Component
 * Design: Rural Professional | Navy + Lime Green
 * Sticky nav with always-visible phone numbers for both locations
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/it-support-matamata-tauranga", label: "Business IT" },
  { href: "/computer-repairs-matamata-tauranga", label: "Personal Services" },
  { href: "/why-choose-imatec", label: "Why Imatec" },
  { href: "/computer-repair-shop-matamata", label: "Our Locations" },
  { href: "/contact-imatec-it-support", label: "Contact Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar with location phone numbers */}
      <div className="bg-[#2B4A8C] text-white text-sm py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+6478885627" className="flex items-center gap-1.5 hover:text-[#7DC800] transition-colors">
              <MapPin size={13} className="text-[#7DC800]" />
              <span className="font-semibold">Matamata:</span>
              <span>07 888 5627</span>
            </a>
            <a href="tel:+0798556255" className="flex items-center gap-1.5 hover:text-[#7DC800] transition-colors">
              <MapPin size={13} className="text-[#7DC800]" />
              <span className="font-semibold">Tauranga:</span>
              <span>07 985 6255</span>
            </a>
            <span className="text-white/40">|</span>
            <span className="text-white/80" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}>
              Computer Services for Home &amp; Business
            </span>
          </div>
          <div className="text-[#7DC800] font-semibold tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Mon–Fri: 8am–5pm
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-gray-100"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center">
              {/* SVG Logo mark — Imatec style */}
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="6" fill="#2B4A8C"/>
                <text x="22" y="30" textAnchor="middle" fill="#7DC800" fontSize="22" fontWeight="800" fontFamily="Barlow Condensed, sans-serif" letterSpacing="1">i</text>
                <rect x="8" y="34" width="28" height="3" rx="1.5" fill="#7DC800"/>
              </svg>
              <div className="ml-2.5">
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.4rem", lineHeight: 1, color: "#2B4A8C", letterSpacing: "0.02em" }}>
                  Imatec <span style={{ color: "#7DC800" }}>Solutions</span>
                </div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.65rem", color: "#6B7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Matamata &amp; Tauranga
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded text-sm font-semibold transition-colors ${
                  location === link.href
                    ? "text-[#7DC800] bg-[#2B4A8C]/5"
                    : "text-[#2B4A8C] hover:text-[#7DC800] hover:bg-[#2B4A8C]/5"
                }`}
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", letterSpacing: "0.04em" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Phone button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+6478885627"
              className="btn-green pulse-ring text-sm py-2 px-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-[#2B4A8C]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="container py-4 flex flex-col gap-1">
              {/* Mobile phone numbers */}
              <div className="flex flex-col gap-2 mb-3 pb-3 border-b border-gray-100">
                <a href="tel:+6478885627" className="flex items-center gap-2 text-[#2B4A8C] font-semibold">
                  <Phone size={15} className="text-[#7DC800]" />
                  Matamata: 07 888 5627
                </a>
                <a href="tel:+0798556255" className="flex items-center gap-2 text-[#2B4A8C] font-semibold">
                  <Phone size={15} className="text-[#7DC800]" />
                  Tauranga: 07 985 6255
                </a>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 rounded font-semibold transition-colors ${
                    location === link.href
                      ? "text-[#7DC800] bg-[#2B4A8C]/5"
                      : "text-[#2B4A8C] hover:text-[#7DC800]"
                  }`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
