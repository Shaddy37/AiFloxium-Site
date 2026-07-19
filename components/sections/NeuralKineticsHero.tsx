"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/site";
import { ease } from "@/lib/utils";
import "./NeuralKineticsHero.css";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4";

export default function NeuralKineticsHero() {
  return (
    <section className="nk-hero" aria-label="Hero">
      {/* ── Background Video ── */}
      <motion.div
        className="nk-hero-video-wrapper"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease }}
      >
        <video
          className="nk-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </motion.div>

      {/* ── Gradient Overlays ── */}
      <div className="nk-hero-overlay-top" aria-hidden="true" />
      <div className="nk-hero-overlay-bottom" aria-hidden="true" />

      {/* ── Bottom Content ── */}
      <div className="nk-hero-content">
        <div className="nk-hero-content-inner">
          <div className="nk-hero-content-left">
            <motion.div
              className="nk-hero-eyebrow"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.4 }}
            >
              <span className="nk-hero-dot" />
              <span>Agentic Systems Developer</span>
            </motion.div>

            <motion.h1
              className="nk-hero-heading"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
            >
              Stop doing
              <br />
              <span className="nk-hero-heading-accent">robot work</span>.
            </motion.h1>

            <motion.p
              className="nk-hero-description"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease, delay: 0.8 }}
            >
              I build custom AI automation, internal tools, and agentic systems
              that remove bottlenecks and reclaim 40+ hours every week for your
              team.
            </motion.p>

            <motion.div
              className="nk-hero-buttons"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease, delay: 1.0 }}
            >
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nk-hero-btn-primary"
              >
                Book a discovery call
                <ArrowRight className="nk-hero-btn-icon" />
              </Link>
              <Link href="/services#projects" className="nk-hero-btn-secondary">
                View proof
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="nk-hero-content-right"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease, delay: 1.1 }}
          >
            <span className="nk-hero-pill">AI Automation</span>
            <span className="nk-hero-pill">Agentic OS</span>
            <span className="nk-hero-pill">n8n Workflows</span>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="nk-hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.5 }}
        aria-hidden="true"
      >
        <div className="nk-hero-scroll-line" />
      </motion.div>
    </section>
  );
}
