/**
 * IMATEC SOLUTIONS — Contact Page
 * Design: Rural Professional | Navy + Lime Green
 * Form submits via mailto (can be upgraded to Formspree/Autotask email)
 */

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

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

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Submit to Formspree (replace FORM_ID with actual Formspree endpoint, or use mailto fallback)
    try {
      const response = await fetch("https://formspree.io/f/xpwqkjrb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          location: form.location,
          service: form.service,
          message: form.message,
          _subject: `New Imatec Enquiry from ${form.name} — ${form.service || "General"}`,
        }),
      });

      if (response.ok) {
        setFormState("success");
        setForm({ name: "", email: "", phone: "", location: "", service: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      // Fallback: open mailto
      const subject = encodeURIComponent(`New Enquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nLocation: ${form.location}\nService: ${form.service}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:support@imatec.co.nz?subject=${subject}&body=${body}`;
      setFormState("success");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#2B4A8C] overflow-hidden min-h-[400px] flex items-center py-16">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389852317/8YvbJQJAwg2XQZY47YRvMb/hero_contact-XyMLC58NzxxW2biXNA4HqW.webp"
            alt="Imatec friendly support team"
            className="w-full h-full object-cover object-right-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B4A8C] via-[#2B4A8C]/70 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="imatec-section-label text-[#7DC800] mb-3">Get In Touch</div>
            <h1 className="imatec-heading text-white mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}>
              We're Here to Help.<br />
              <span className="text-[#7DC800]">Call Us — It's the Fastest Way.</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              For urgent computer problems, calling is always the fastest way to get help. For non-urgent enquiries, fill in the form below and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Call Bar */}
      <section className="bg-[#7DC800] py-4">
        <div className="container flex flex-wrap items-center justify-center gap-6">
          <a href="tel:+6478885627" className="flex items-center gap-2 text-[#2B4A8C] font-bold text-lg hover:underline" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <Phone size={18} /> Matamata: 07 888 5627
          </a>
          <span className="text-[#2B4A8C]/40 hidden md:block">|</span>
          <a href="tel:+0798556255" className="flex items-center gap-2 text-[#2B4A8C] font-bold text-lg hover:underline" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <Phone size={18} /> Tauranga: 07 985 6255
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F7F5F0]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact Info */}
            <FadeUp className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <div className="imatec-section-label text-[#7DC800] mb-3">Imatec Matamata</div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <MapPin size={15} className="text-[#7DC800] mt-0.5 shrink-0" />
                      25 Arawa Street, Matamata 3400
                    </div>
                    <a href="tel:+6478885627" className="flex items-center gap-3 text-[#2B4A8C] font-semibold hover:text-[#7DC800] transition-colors">
                      <Phone size={15} className="text-[#7DC800]" />
                      07 888 5627
                    </a>
                    <a href="mailto:support@imatec.co.nz" className="flex items-center gap-3 text-gray-600 hover:text-[#7DC800] transition-colors">
                      <Mail size={15} className="text-[#7DC800]" />
                      support@imatec.co.nz
                    </a>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock size={15} className="text-[#7DC800]" />
                      Mon–Fri: 8:00am – 5:00pm
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="imatec-section-label text-[#7DC800] mb-3">Imatec Tauranga</div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-3">
                      <MapPin size={15} className="text-[#7DC800] mt-0.5 shrink-0" />
                      36 Awataha Crescent, The Lakes, Tauriko, Tauranga 3110
                    </div>
                    <a href="tel:+0798556255" className="flex items-center gap-3 text-[#2B4A8C] font-semibold hover:text-[#7DC800] transition-colors">
                      <Phone size={15} className="text-[#7DC800]" />
                      07 985 6255
                    </a>
                    <a href="mailto:support@imatec.co.nz" className="flex items-center gap-3 text-gray-600 hover:text-[#7DC800] transition-colors">
                      <Mail size={15} className="text-[#7DC800]" />
                      support@imatec.co.nz
                    </a>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock size={15} className="text-[#7DC800]" />
                      Mon–Fri: 8:30am – 5:30pm
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <div className="imatec-section-label text-[#7DC800] mb-3">Remote Support</div>
                  <p className="text-sm text-gray-600 mb-3">
                    Many issues can be fixed remotely. Download our remote support tool and we'll connect securely to your computer.
                  </p>
                  <a
                    href="https://get.teamviewer.com/imatec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-4 inline-flex"
                  >
                    Download Remote Support
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Contact Form */}
            <FadeUp delay={100} className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h2 className="imatec-heading text-[#2B4A8C] mb-2" style={{ fontSize: "1.8rem" }}>
                  Send Us a Message
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Fill in the form below and we'll get back to you within one business day. For urgent issues, please call us directly.
                </p>

                {formState === "success" ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle size={40} className="text-[#7DC800] mx-auto mb-3" />
                    <h3 className="imatec-heading text-[#2B4A8C] mb-2" style={{ fontSize: "1.4rem" }}>Message Sent!</h3>
                    <p className="text-gray-600 text-sm">Thanks for getting in touch. We'll get back to you within one business day. For urgent issues, please call us directly.</p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="mt-4 btn-primary text-sm py-2 px-5"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#7DC800] focus:ring-2 focus:ring-[#7DC800]/20 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="07 888 0000"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#7DC800] focus:ring-2 focus:ring-[#7DC800]/20 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.co.nz"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#7DC800] focus:ring-2 focus:ring-[#7DC800]/20 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Location</label>
                        <select
                          name="location"
                          value={form.location}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#7DC800] focus:ring-2 focus:ring-[#7DC800]/20 transition-colors bg-white"
                        >
                          <option value="">Select location...</option>
                          <option value="Matamata">Matamata</option>
                          <option value="Morrinsville">Morrinsville</option>
                          <option value="Te Aroha">Te Aroha</option>
                          <option value="Tirau">Tirau</option>
                          <option value="Tauranga">Tauranga</option>
                          <option value="Tauriko">Tauriko</option>
                          <option value="Papamoa">Papamoa</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Needed</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#7DC800] focus:ring-2 focus:ring-[#7DC800]/20 transition-colors bg-white"
                        >
                          <option value="">Select service...</option>
                          <option value="Computer Repair">Computer / PC Repair</option>
                          <option value="Laptop Repair">Laptop Repair</option>
                          <option value="Printer Repair">Printer Repair</option>
                          <option value="Business IT Support">Business IT Support</option>
                          <option value="Virus Removal">Virus / Malware Removal</option>
                          <option value="Data Recovery">Data Recovery</option>
                          <option value="Networking">Networking / Internet</option>
                          <option value="Microsoft 365">Microsoft 365</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tell Us What's Happening *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Describe your IT problem or what you need help with..."
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#7DC800] focus:ring-2 focus:ring-[#7DC800]/20 transition-colors resize-none"
                      />
                    </div>

                    {formState === "error" && (
                      <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        <AlertCircle size={16} />
                        Something went wrong. Please try again or call us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="btn-green w-full justify-center py-3 disabled:opacity-60"
                    >
                      {formState === "submitting" ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      For urgent issues, please call us directly. We aim to respond to all messages within one business day.
                    </p>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
