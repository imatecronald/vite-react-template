/**
 * IMATEC SOLUTIONS — Footer Component
 * Design: Rural Professional | Navy background with green accents
 */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2B4A8C] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "white", letterSpacing: "0.02em" }}>
              Imatec <span style={{ color: "#7DC800" }}>Solutions</span>
            </div>
            <p className="mt-3 text-blue-200 text-sm leading-relaxed">
              Your local IT experts in Matamata and Tauranga. Trusted by small businesses, farmers and home users across the Waikato and Bay of Plenty.
            </p>
            <a
              href="https://get.teamviewer.com/imatec"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-[#7DC800] text-black text-sm font-bold px-4 py-2 rounded hover:bg-[#6ab800] transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.95rem", letterSpacing: "0.05em" }}
            >
              <Download size={14} />
              Remote Support
            </a>
          </div>

          {/* Matamata Office */}
          <div>
            <h3 className="text-[#7DC800] font-bold mb-4 uppercase tracking-widest text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Imatec Matamata
            </h3>
            <div className="space-y-2.5 text-sm text-blue-100">
              <a href="tel:+6478885627" className="flex items-start gap-2 hover:text-[#7DC800] transition-colors">
                <Phone size={14} className="mt-0.5 shrink-0 text-[#7DC800]" />
                07 888 5627
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#7DC800]" />
                <span>25 Arawa Street<br />Matamata 3400</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 shrink-0 text-[#7DC800]" />
                Mon–Fri: 8am–5pm
              </div>
            </div>
          </div>

          {/* Tauranga Office */}
          <div>
            <h3 className="text-[#7DC800] font-bold mb-4 uppercase tracking-widest text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Imatec Tauranga
            </h3>
            <div className="space-y-2.5 text-sm text-blue-100">
              <a href="tel:+0798556255" className="flex items-start gap-2 hover:text-[#7DC800] transition-colors">
                <Phone size={14} className="mt-0.5 shrink-0 text-[#7DC800]" />
                07 985 6255
              </a>
              <a href="mailto:support@imatec.co.nz" className="flex items-start gap-2 hover:text-[#7DC800] transition-colors">
                <Mail size={14} className="mt-0.5 shrink-0 text-[#7DC800]" />
                support@imatec.co.nz
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#7DC800]" />
                <span>36 Awataha Crescent<br />The Lakes, Tauriko<br />Tauranga 3110</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 shrink-0 text-[#7DC800]" />
                Mon–Fri: 8:30am–5:30pm
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#7DC800] font-bold mb-4 uppercase tracking-widest text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Quick Links
            </h3>
            <div className="space-y-2 text-sm">
              {[
                { href: "/it-support-matamata-tauranga", label: "Business IT Support" },
                { href: "/computer-repairs-matamata-tauranga", label: "Personal Services" },
                { href: "/why-choose-imatec", label: "Why Imatec?" },
                { href: "/computer-repair-shop-matamata", label: "Our Locations" },
                { href: "/contact-imatec-it-support", label: "Contact Us" },
              ].map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-[#7DC800] transition-colors"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-blue-300">
          <span>© {new Date().getFullYear()} Imatec Solutions. All rights reserved. Serving Matamata, Tauranga & surrounding areas.</span>
          <span>Computer Repairs · IT Support · Managed Services · Waikato &amp; Bay of Plenty</span>
        </div>
      </div>
    </footer>
  );
}
