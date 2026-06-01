"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface ToolWaitlistFormProps {
  toolSlug: string;
  toolTitle: string;
}

export default function ToolWaitlistForm({ toolSlug, toolTitle }: ToolWaitlistFormProps) {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API latency & track the conversion for the specific tool slug
    console.log(`[Waitlist Signup] Email: ${email} registered for tool: ${toolSlug}`);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-[11px] text-emerald-400 font-bold justify-center"
      >
        <Check className="h-4 w-4 shrink-0" />
        <span>Added! We will notify you when {toolTitle} is ready.</span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mt-4">
      <div className="relative flex-1">
        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
        <Input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-10 h-11 rounded-xl bg-black/45 border-white/5 text-xs text-white placeholder-zinc-500 focus-visible:ring-brand-orange/50 focus-visible:border-brand-orange/50 transition-all"
        />
      </div>
      <Button 
        type="submit" 
        disabled={loading}
        className="h-11 px-5 rounded-xl bg-brand-orange text-white hover:bg-brand-orange/90 text-xs font-bold uppercase tracking-widest shrink-0 transition-colors shadow-lg disabled:opacity-50"
      >
        {loading ? 'Joining...' : 'Notify Me'}
      </Button>
    </form>
  );
}
