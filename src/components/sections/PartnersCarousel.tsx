"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const partners = [
  { id: "1", name: "Casa da Árvore", logo: "/images/logo-casa-da-arvore.png" },
  { id: "2", name: "Stiler Engenharia", logo: "/images/logo-stiler-engenharia.png" },
  { id: "3", name: "Constelar", logo: "/images/logo-constelar.png" },
];

export default function PartnersCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-bamberg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-bamberg-primary text-sm font-semibold tracking-wider uppercase block mb-4">
            • NOSSOS PARCEIROS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-bamberg-navy mb-6">
            Parceiros de <span className="text-bamberg-primary">Confiança</span>
          </h2>
          <p className="text-lg text-bamberg-text-secondary max-w-2xl mx-auto">
            Trabalhamos com os melhores parceiros do mercado para garantir a excelência 
            em cada projeto e entregar resultados excepcionais aos nossos clientes.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-32 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-bamberg-text-secondary/10">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain max-w-full max-h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-bamberg-navy font-medium group-hover:text-bamberg-primary transition-colors">
                  {partner.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-sm border border-bamberg-text-secondary/10">
            <h3 className="text-xl font-semibold text-bamberg-navy mb-4">
              Quer ser nosso parceiro?
            </h3>
            <p className="text-bamberg-text-secondary mb-6">
              Estamos sempre em busca de novos parceiros estratégicos para expandir 
              nossos horizontes e criar projetos ainda mais excepcionais.
            </p>
            <button className="bg-bamberg-navy hover:bg-bamberg-primary text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
              Entre em Contato
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}