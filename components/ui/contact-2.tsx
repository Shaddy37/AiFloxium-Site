"use client";

import React, { useState } from "react";
import { PhoneIcon, MailIcon, GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  title = "Book a Discovery Call.",
  description = "Tell me what you are building or where your workflow is breaking. I will reply with the best next step.",
  phone = PHONE_NUMBER,
  email = PRIMARY_EMAIL,
  web = { label: SITE_HOST, url: SITE_URL },
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
    website: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) {
      setStatus("success");
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
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          subject: "",
          message: "",
          website: ""
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
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
              label: "Phone",
              value: phone,
            },
            {
              icon: MailIcon,
              label: "Primary Email",
              value: email,
            },
            {
              icon: MailIcon,
              label: "Direct Email",
              value: SECONDARY_EMAIL,
            },
            {
              icon: GlobeIcon,
              label: "Website",
              value: web.label,
            }
          ]}
        >
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-full items-center justify-center rounded-xl bg-brand-orange text-center font-bold uppercase tracking-[0.1em] text-white shadow-xl shadow-brand-orange/10 transition-all hover:bg-brand-orange/90"
            >
              Open Calendly booking
            </a>

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

            <p className="text-xs text-white leading-relaxed">
              You will be speaking directly with <span className="text-white font-bold">{PERSON_NAME}</span>.
              Best fit: startups, SMBs, and teams that need automation, internal tools,
              or a product-minded technical partner.
            </p>

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
              <Input type="text" id="subject" value={formData.subject} onChange={handleChange} required placeholder="Automation / Internal Tool / AI Product" className="bg-brand-bg/50 border-brand-plum/20 h-12 rounded-xl focus:ring-brand-orange/20 transition-all text-white placeholder:text-zinc-700" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-brand-plum text-[10px] font-black uppercase tracking-[0.2em]">What do you need built?</Label>
              <Textarea id="message" value={formData.message} onChange={handleChange} required placeholder="Describe the workflow, product, bottleneck, or business problem..." className="bg-brand-bg/50 border-brand-plum/20 min-h-[120px] rounded-xl focus:ring-brand-orange/20 transition-all resize-none text-white placeholder:text-zinc-700 p-4" />
            </div>

            <Button type="submit" disabled={status === "loading" || status === "success"} size="lg" className="w-full h-14 rounded-xl border-none bg-white text-brand-bg shadow-xl transition-all active:scale-[0.98] hover:bg-zinc-100">
              {status === "loading" ? "Sending..." : status === "success" ? "Message sent" : "Send project details"}
            </Button>

            {status === "error" && (
              <p className="text-brand-orange text-[10px] font-bold tracking-widest uppercase mt-4 text-center">
                Message failed. Email me directly if needed.
              </p>
            )}
          </form>
        </ContactCard>
      </div>
    </section>
  );
};
