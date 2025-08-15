"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { keyMessages } from "@/lib/data";

function AnimatedCounter({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-bamberg-navy via-bamberg-navy/90 to-bamberg-primary/20" />
        
        {/* Additional Pattern Overlay for extra depth */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(195,151,73,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(229,200,142,0.1)_0%,transparent_50%)]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">

        {/* Main Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="block"
            >
              Bamberg Gisler
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="block text-bamberg-primary"
            >
              Empreendimentos
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="block text-4xl md:text-5xl lg:text-6xl font-normal text-bamberg-light-gold"
            >
              Investimentos & Oportunidades
            </motion.span>
          </h1>
        </motion.div>

      </div>

      {/* Floating Particles */}
      {[
        { left: "10%", top: "20%", delay: 0, duration: 6 },
        { left: "85%", top: "15%", delay: 1, duration: 5 },
        { left: "25%", top: "70%", delay: 2, duration: 7 },
        { left: "75%", top: "60%", delay: 0.5, duration: 5.5 },
        { left: "60%", top: "30%", delay: 1.5, duration: 6.5 },
        { left: "15%", top: "85%", delay: 2.5, duration: 4.5 },
      ].map((particle, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 bg-bamberg-primary/30 rounded-full`}
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="mb-4"
        >
          <p className="text-white/80 text-sm font-medium">
            Se descubra mais
          </p>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center mx-auto"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}