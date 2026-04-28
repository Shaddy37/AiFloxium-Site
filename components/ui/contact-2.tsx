"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactCard } from "@/components/ui/contact-card";
import { PhoneIcon, MailIcon, GlobeIcon } from "lucide-react";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Start Your Automation.",
  description = "Connect with us to architect your autonomous business future. Our agents are ready to deploy.",
  phone = "+92 346 4883396",
  email = "info@aifloxium.online",
  web = { label: "aifloxium.online", url: "https://aifloxium.online" },
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    firstname: "", lastname: "", email: "", subject: "", message: "", website: "" // 'website' is the honeypot
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.website) {
      setStatus("success"); // Pretend success to bots
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ firstname: "", lastname: "", email: "", subject: "", message: "", website: "" });
        // Optional: Reset back to idle after a few seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="initiate" className="py-32 px-6 bg-brand-bg border-y border-brand-plum/10">
      <div className="container mx-auto max-w-6xl">
        <ContactCard
          title={title}
          description={description}
          className="rounded-[3rem] overflow-visible border-brand-plum/20 bg-brand-bg/80 backdrop-blur-xl shadow-2xl"
          formSectionClassName="bg-brand-plum/5 p-10 md:p-12 lg:p-14 rounded-[2rem]"
          contactInfo={[
            {
              icon: PhoneIcon,
              label: "Secure Line",
              value: phone,
            },
            {
              icon: MailIcon,
              label: "Encrypted Mail",
              value: email,
            },
            {
              icon: MailIcon,
              label: "Direct",
              value: "muhammadshadabshams@gmail.com",
            },
            {
              icon: GlobeIcon,
              label: "Protocol Network",
              value: web.label,
            }
          ]}
        >
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            {/* Honeypot Field */}
            <div className="hidden">
              <Input type="text" id="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="firstname" className="text-brand-plum text-[10px] font-black uppercase tracking-[0.2em]">First Name</Label>
                <Input type="text" id="firstname" value={formData.firstname} onChange={handleChange} required placeholder="Jane" className="bg-brand-bg/50 border-brand-plum/20 h-12 rounded-xl focus:ring-brand-orange/20 transition-all text-white placeholder:text-zinc-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname" className="text-brand-plum text-[10px] font-black uppercase tracking-[0.2em]">Last Name</Label>
                <Input type="text" id="lastname" value={formData.lastname} onChange={handleChange} placeholder="Doe" className="bg-brand-bg/50 border-brand-plum/20 h-12 rounded-xl focus:ring-brand-orange/20 transition-all text-white placeholder:text-zinc-700" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-brand-plum text-[10px] font-black uppercase tracking-[0.2em]">Work Email</Label>
              <Input type="email" id="email" value={formData.email} onChange={handleChange} required placeholder="jane@company.com" className="bg-brand-bg/50 border-brand-plum/20 h-12 rounded-xl focus:ring-brand-orange/20 transition-all text-white placeholder:text-zinc-700" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-brand-plum text-[10px] font-black uppercase tracking-[0.2em]">Objective</Label>
              <Input type="text" id="subject" value={formData.subject} onChange={handleChange} required placeholder="n8n Automation / Custom Agents" className="bg-brand-bg/50 border-brand-plum/20 h-12 rounded-xl focus:ring-brand-orange/20 transition-all text-white placeholder:text-zinc-700" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-brand-plum text-[10px] font-black uppercase tracking-[0.2em]">Specification</Label>
              <Textarea id="message" value={formData.message} onChange={handleChange} required placeholder="Describe your current bottleneck..." className="bg-brand-bg/50 border-brand-plum/20 min-h-[120px] rounded-xl focus:ring-brand-orange/20 transition-all resize-none text-white placeholder:text-zinc-700 p-4" />
            </div>
            <Button type="submit" disabled={status === "loading" || status === "success"} size="lg" className="w-full h-14 rounded-xl bg-brand-orange text-white hover:bg-brand-orange/90 transition-all font-bold tracking-[0.1em] uppercase shadow-xl shadow-brand-orange/10 active:scale-[0.98] border-none">
              {status === "loading" ? "Initializing..." : status === "success" ? "Protocol Sent ✓" : "Initialize Audit →"}
            </Button>
            {status === "error" && <p className="text-brand-orange text-[10px] font-bold tracking-widest uppercase mt-4 text-center">Connection Failed. Please try direct email.</p>}
          </form>
        </ContactCard>
      </div>
    </section>
  );
};
