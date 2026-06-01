"use client";

import React, { useState } from "react";
import { PhoneIcon, MailIcon, GlobeIcon, ChevronDown, ShieldCheck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactCard } from "@/components/ui/contact-card";
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
  title = "Claim Free Scoping Session.",
  description = "Tell me what you are building or where your workflow is breaking. I will map your system on our call.",
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

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const getFieldStatus = (id: string, value: string) => {
    if (!touchedFields[id]) return "idle";
    if (id === "email") {
      return isEmailValid(value) ? "valid" : "invalid";
    }
    if (id === "fullname" || id === "message" || id === "subject") {
      return value.trim().length > 0 ? "valid" : "invalid";
    }
    return "idle";
  };

  const getInputClassName = (id: string, value: string, baseClass: string) => {
    const fieldStatus = getFieldStatus(id, value);
    if (fieldStatus === "valid") {
      return cn(baseClass, "border-emerald-500/50 focus:border-emerald-500 focus:ring-emerald-500/20");
    }
    if (fieldStatus === "invalid") {
      return cn(baseClass, "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20");
    }
    return cn(baseClass, "focus:border-brand-orange/50 focus:ring-brand-orange/20");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleBlur = (fieldId: string) => {
    setTouchedFields((prev) => ({ ...prev, [fieldId]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Touch all fields on submit to trigger validation warnings
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

    // Split name into first and last name for API compatibility
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
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="initiate" className="py-16 md:py-32 px-4 sm:px-6 bg-brand-bg border-y border-brand-plum/10">
      <div className="container mx-auto max-w-6xl">
        <ContactCard
          title={title}
          description={description}
          className="rounded-[2rem] sm:rounded-[3rem] overflow-visible border-brand-plum/20 bg-brand-bg"
          formSectionClassName="bg-brand-plum/5 p-4 sm:p-8 md:p-12 lg:p-14 rounded-[1.5rem] sm:rounded-[2rem]"
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
          <div className="w-full space-y-6">
            <div className="space-y-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 h-auto py-3 px-4 w-full items-center justify-center rounded-xl bg-brand-orange text-center text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-white shadow-xl shadow-brand-orange/10 transition-all hover:bg-brand-orange/90 active:scale-[0.98] sm:min-h-14 sm:py-3.5 sm:px-6"
              >
                Claim Free 15-Minute Scoping Session
              </a>
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-white/5"></div>
                <span className="flex-shrink mx-4 text-[9px] font-black uppercase tracking-widest text-zinc-500">or drop details below</span>
                <div className="flex-grow border-t border-white/5"></div>
              </div>
            </div>

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

              <p className="text-[11px] text-zinc-400 leading-relaxed">
                You will speak directly with <span className="text-white font-bold">{PERSON_NAME}</span>. Best fit: teams seeking automated workflows, custom internal operations tools, or AI integration. <span className="text-brand-orange font-semibold">Get a free custom automation flowchart of your current workflow during our call.</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="fullname" className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.2em] flex justify-between items-center">
                    Full Name
                    {getFieldStatus("fullname", formData.fullname) === "invalid" && <AlertCircle className="h-3 w-3 text-rose-500" />}
                  </Label>
                  <Input
                    type="text"
                    id="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    onBlur={() => handleBlur("fullname")}
                    required
                    placeholder="Jane Doe"
                    className={getInputClassName(
                      "fullname",
                      formData.fullname,
                      "bg-brand-bg/50 border-brand-plum/20 h-12 rounded-xl text-white placeholder:text-zinc-500"
                    )}
                  />
                  {getFieldStatus("fullname", formData.fullname) === "invalid" && (
                    <p className="text-rose-500 text-[9px] font-bold tracking-wider uppercase mt-1">
                      Name is required.
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.2em] flex justify-between items-center">
                    Work Email
                    {getFieldStatus("email", formData.email) === "invalid" && <AlertCircle className="h-3 w-3 text-rose-500" />}
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    required
                    placeholder="jane@company.com"
                    className={getInputClassName(
                      "email",
                      formData.email,
                      "bg-brand-bg/50 border-brand-plum/20 h-12 rounded-xl text-white placeholder:text-zinc-500"
                    )}
                  />
                  {getFieldStatus("email", formData.email) === "invalid" && (
                    <p className="text-rose-500 text-[9px] font-bold tracking-wider uppercase mt-1">
                      Enter a valid email address.
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="subject" className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.2em] flex justify-between items-center">
                  Goal / Service Needed
                  {getFieldStatus("subject", formData.subject) === "invalid" && <AlertCircle className="h-3 w-3 text-rose-500" />}
                </Label>
                <div className="relative">
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={() => handleBlur("subject")}
                    required
                    className={getInputClassName(
                      "subject",
                      formData.subject,
                      "w-full bg-brand-bg/50 border border-brand-plum/20 h-12 px-4 rounded-xl transition-all text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 appearance-none cursor-pointer text-sm"
                    )}
                  >
                    <option value="" disabled className="bg-brand-bg text-zinc-500">Select a goal...</option>
                    <option value="Workflow Automation & AI Agents" className="bg-brand-bg text-white">Workflow Automation & AI Agents</option>
                    <option value="Internal Custom Dashboards / Tools" className="bg-brand-bg text-white">Internal Custom Dashboards / Tools</option>
                    <option value="Custom SaaS or Web Application" className="bg-brand-bg text-white">Custom SaaS or Web Application</option>
                    <option value="3D Web Design & Interactive Animation" className="bg-brand-bg text-white">3D Web Design & Interactive Animation</option>
                    <option value="Advisory / Consulting / Other" className="bg-brand-bg text-white">Advisory / Consulting / Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>
                {getFieldStatus("subject", formData.subject) === "invalid" && (
                  <p className="text-rose-500 text-[9px] font-bold tracking-wider uppercase mt-1">
                    Please select a project goal.
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.2em] flex justify-between items-center">
                  What do you need built?
                  {getFieldStatus("message", formData.message) === "invalid" && <AlertCircle className="h-3 w-3 text-rose-500" />}
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  required
                  placeholder="Describe your workflow bottleneck, required tool, or project context..."
                  className={getInputClassName(
                    "message",
                    formData.message,
                    "bg-brand-bg/50 border-brand-plum/20 min-h-[110px] rounded-xl text-white placeholder:text-zinc-500 p-4"
                  )}
                />
                {getFieldStatus("message", formData.message) === "invalid" && (
                  <p className="text-rose-500 text-[9px] font-bold tracking-wider uppercase mt-1">
                    Please provide some description.
                  </p>
                )}
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  size="lg"
                  className={cn(
                    "w-full min-h-12 h-auto py-3 px-4 rounded-xl border-none font-bold uppercase tracking-wider text-xs sm:text-sm transition-all active:scale-[0.98] sm:min-h-14 sm:py-3.5 sm:px-6",
                    status === "success" 
                      ? "bg-emerald-600 text-white hover:bg-emerald-600 cursor-default" 
                      : "bg-white text-brand-bg hover:bg-zinc-100"
                  )}
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "✓ Details Sent Successfully" : "Send Details & Start Scoping"}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-zinc-500 text-[9px] font-bold uppercase tracking-widest">
                <ShieldCheck className="h-3.5 w-3.5 text-zinc-400" />
                <span>No spam. Scoping response within 24 hours.</span>
              </div>

              {status === "error" && (
                <p className="text-brand-orange text-[10px] font-bold tracking-widest uppercase mt-3 text-center">
                  Message failed to send. Please email me directly instead.
                </p>
              )}
            </form>
          </div>
        </ContactCard>
      </div>
    </section>
  );
};
