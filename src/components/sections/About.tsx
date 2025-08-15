"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-bamberg-background">
      <div className="container mx-auto px-4">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-bamberg-primary text-sm font-semibold tracking-wider uppercase">
            Quem Somos
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-bamberg-navy leading-tight mb-8"
          >
            A Bamberg Gisler Empreendimentos desenvolve 
            <span className="text-bamberg-primary"> empreendimentos únicos</span> que 
            <span className="text-bamberg-primary"> transformam sonhos em realidade</span>.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-bamberg-navy hover:bg-bamberg-primary text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
            >
              <Link href="/sobre-nos">
                Sobre Nós
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-bamberg-primary mb-2">
              760
            </div>
            <div className="text-bamberg-text-secondary font-medium">
              Unidades Entregues
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-bamberg-primary mb-2">
              629
            </div>
            <div className="text-bamberg-text-secondary font-medium">
              Em Construção
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-bamberg-primary mb-2">
              +1400
            </div>
            <div className="text-bamberg-text-secondary font-medium">
              Em Projeção
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}