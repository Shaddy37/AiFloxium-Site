"use client";

import React, { useState } from "react";
import { PhoneIcon, MailIcon, GlobeIcon, ChevronDown, ShieldCheck, AlertCircle, Sparkles, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  CALENDLY_URL,
  PERSON_NAME,
  PHONE_NUMBER,
  PRIMARY_EMAIL,
  SECONDARY_EMAIL,
  SITE_HOST,
  SITE_URL
} from "@/lib/site";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Scale Your AI Infrastructure.",
  description = "Ready to transition your workflows to multi-agent automation? Contact me today for a custom implementation audit.",
  phone = PHONE_NUMBER,
  email = PRIMARY_EMAIL,
  web = { label: SITE_HOST, url: SITE_URL },
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
    website: ""
  });
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const getFieldStatus = (id: string, value: string) => {
    if (!touchedFields[id]) return "idle";
    if (id === "email") return isEmailValid(value) ? "valid" : "invalid";
    if (id === "fullname" || id === "message" || id === "subject") {
      return value.trim().length > 0 ? "valid" : "invalid";
    }
    return "idle";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleBlur = (fieldId: string) => {
    setTouchedFields((prev) => ({ ...prev, [fieldId]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched = {
      fullname: true,
      email: true,
      subject: true,
      message: true
    };
    setTouchedFields(allTouched);

    if (!formData.fullname.trim() || !isEmailValid(formData.email) || !formData.subject || !formData.message.trim()) {
      return;
    }

    if (formData.website) {
      setStatus("success");
      return;
    }

    setStatus("loading");

    const nameTrimmed = formData.fullname.trim();
    const spaceIndex = nameTrimmed.indexOf(" ");
    let firstname = nameTrimmed;
    let lastname = "";
    if (spaceIndex !== -1) {
      firstname = nameTrimmed.substring(0, spaceIndex);
      lastname = nameTrimmed.substring(spaceIndex + 1);
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          website: formData.website
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          fullname: "",
          email: "",
          subject: "",
          message: "",
          website: ""
        });
        setTouchedFields({});
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const contactItems = [
    { icon: PhoneIcon, label: "Phone", value: phone, href: `tel:${phone}` },
    { icon: MailIcon, label: "Primary Email", value: email, href: `mailto:${email}` },
    { icon: MailIcon, label: "Direct Email", value: SECONDARY_EMAIL, href: `mailto:${SECONDARY_EMAIL}` },
    { icon: GlobeIcon, label: "Website", value: web.label, href: web.url },
  ];

  return (
    <section id="initiate" className="w-full relative overflow-hidden my-4 sm:my-8">
      <div className="w-full relative z-10">
        
        {/* Main Card Container */}
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#130626] via-[#0A0314] to-zinc-950 border border-[#7B2CBF]/40 shadow-2xl shadow-[#7B2CBF]/15 overflow-hidden">
          
          {/* Ambient Lighting Orbs */}
          <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-[#7B2CBF]/20 rounded-full blur-[140px] -mr-32 -mt-32" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7B2CBF]/10 rounded-full blur-[120px] -ml-24 -mb-24" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
            
            {/* Left Column: Heading & Contact Info */}
            <div className="lg:col-span-5 p-8 md:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7B2CBF]/20 border border-[#7B2CBF]/40">
                  <Sparkles className="w-3.5 h-3.5 text-[#E0AAFF]" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E0AAFF] font-black">
                    Implementation Audit
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white leading-[1.08]">
                  {title}
                </h2>

                <p className="text-zinc-300 text-sm md:text-base font-inter font-light leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="mt-10 space-y-4">
                {contactItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#7B2CBF]/60 hover:bg-[#7B2CBF]/10 transition-all flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#7B2CBF]/20 border border-[#7B2CBF]/40 flex items-center justify-center text-[#E0AAFF] group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
                          {item.label}
                        </div>
                        <div className="text-sm font-semibold text-white truncate group-hover:text-[#E0AAFF] transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Interactive Form & Calendly CTA */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 bg-black/40 backdrop-blur-xl flex flex-col justify-between">
              <div className="space-y-6">

                {/* Primary Calendly Banner */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-[#7B2CBF]/30 via-[#7B2CBF]/15 to-transparent border border-[#7B2CBF]/50 shadow-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E0AAFF] flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#7B2CBF]" />
                      Direct Calendar Scoping
                    </span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono font-bold uppercase">
                      Instant Booking
                    </span>
                  </div>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-xl bg-[#7B2CBF] hover:bg-[#6C22AD] text-white font-bold uppercase tracking-wider text-xs md:text-sm transition-all shadow-xl shadow-[#7B2CBF]/30 flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
                  >
                    <span>Claim Free 15-Minute Scoping Session</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Divider */}
                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-white/10" />
                  <span className="flex-shrink mx-4 text-[10px] font-mono font-black uppercase tracking-[0.2em] text-zinc-400">
                    or drop details below
                  </span>
                  <div className="flex-grow border-t border-white/10" />
                </div>

                <p className="text-xs text-zinc-300 font-inter font-light leading-relaxed">
                  You will speak directly with <span className="text-white font-bold">{PERSON_NAME}</span>. Best fit: teams seeking automated workflows, custom internal operations tools, or AI integration. <span className="text-[#E0AAFF] font-semibold">Get a free custom automation flowchart of your current workflow during our call.</span>
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="hidden">
                    <Input
                      type="text"
                      id="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label htmlFor="fullname" className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold flex justify-between">
                        Full Name
                        {getFieldStatus("fullname", formData.fullname) === "invalid" && (
                          <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                        )}
                      </Label>
                      <Input
                        type="text"
                        id="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        onBlur={() => handleBlur("fullname")}
                        required
                        placeholder="Jane Doe"
                        className="bg-white/5 border-white/10 focus:border-[#7B2CBF] focus:ring-2 focus:ring-[#7B2CBF]/30 h-12 rounded-xl text-white placeholder:text-zinc-500 font-inter text-sm"
                      />
                    </div>

                    {/* Work Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold flex justify-between">
                        Work Email
                        {getFieldStatus("email", formData.email) === "invalid" && (
                          <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                        )}
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur("email")}
                        required
                        placeholder="jane@company.com"
                        className="bg-white/5 border-white/10 focus:border-[#7B2CBF] focus:ring-2 focus:ring-[#7B2CBF]/30 h-12 rounded-xl text-white placeholder:text-zinc-500 font-inter text-sm"
                      />
                    </div>
                  </div>

                  {/* Goal / Service */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold flex justify-between">
                      Goal / Service Needed
                      {getFieldStatus("subject", formData.subject) === "invalid" && (
                        <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                      )}
                    </Label>
                    <div className="relative">
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={() => handleBlur("subject")}
                        required
                        className="w-full bg-zinc-900 border border-white/10 focus:border-[#7B2CBF] focus:ring-2 focus:ring-[#7B2CBF]/30 h-12 px-4 rounded-xl text-white appearance-none cursor-pointer font-inter text-sm"
                      >
                        <option value="" disabled className="bg-zinc-900 text-zinc-500">Select a goal...</option>
                        <option value="Workflow Automation & AI Agents" className="bg-zinc-900 text-white">Workflow Automation & AI Agents</option>
                        <option value="Internal Custom Dashboards / Tools" className="bg-zinc-900 text-white">Internal Custom Dashboards / Tools</option>
                        <option value="Custom SaaS or Web Application" className="bg-zinc-900 text-white">Custom SaaS or Web Application</option>
                        <option value="3D Web Design & Interactive Animation" className="bg-zinc-900 text-white">3D Web Design & Interactive Animation</option>
                        <option value="Advisory / Consulting / Other" className="bg-zinc-900 text-white">Advisory / Consulting / Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold flex justify-between">
                      What do you need built?
                      {getFieldStatus("message", formData.message) === "invalid" && (
                        <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                      )}
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur("message")}
                      required
                      placeholder="Describe your workflow bottleneck, required tool, or project context..."
                      className="bg-white/5 border-white/10 focus:border-[#7B2CBF] focus:ring-2 focus:ring-[#7B2CBF]/30 min-h-[110px] rounded-xl text-white placeholder:text-zinc-500 p-4 font-inter text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={status === "loading" || status === "success"}
                      size="lg"
                      className={cn(
                        "w-full h-14 rounded-xl font-bold uppercase tracking-wider text-xs md:text-sm transition-all shadow-xl active:scale-98 cursor-pointer",
                        status === "success"
                          ? "bg-emerald-600 text-white hover:bg-emerald-600"
                          : "bg-white text-zinc-950 hover:bg-zinc-100"
                      )}
                    >
                      {status === "loading" ? (
                        "Sending Details..."
                      ) : status === "success" ? (
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-white" /> Details Sent Successfully
                        </span>
                      ) : (
                        "Send Details & Start Scoping"
                      )}
                    </Button>
                  </div>

                  {/* Guarantee */}
                  <div className="flex items-center justify-center gap-2 text-zinc-400 text-[11px] font-mono uppercase tracking-wider pt-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>No spam. Scoping response within 24 hours.</span>
                  </div>

                  {status === "error" && (
                    <p className="text-rose-400 text-xs font-mono uppercase text-center font-bold">
                      Message failed to send. Please email me directly instead.
                    </p>
                  )}
                </form>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
