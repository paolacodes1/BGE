"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  date: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "James",
    location: "Santo Ângelo",
    date: "Dezembro 2024",
    content: "Trabalhar com esta equipe foi um prazer absoluto. Eles me ajudaram a encontrar a propriedade perfeita que correspondia a todas as minhas necessidades e preferências. Sua expertise e atenção aos detalhes tornaram todo o processo tranquilo e sem estresse. Não poderia estar mais feliz com minha nova casa!",
    avatar: "J"
  },
  {
    id: "2", 
    name: "Maria Silva",
    location: "Porto Alegre",
    date: "Novembro 2024",
    content: "Excelente atendimento desde o primeiro contato. A equipe da Bamberg Gisler demonstrou profissionalismo e conhecimento técnico impressionantes. O empreendimento entregue superou nossas expectativas em qualidade e acabamento.",
    avatar: "M"
  },
  {
    id: "3",
    name: "Roberto Costa",
    location: "Entre-Ijuís", 
    date: "Outubro 2024",
    content: "Investimento certeiro! A localização estratégica e a qualidade da construção fizeram deste empreendimento uma excelente oportunidade de negócio. Recomendo a todos que buscam qualidade e confiabilidade.",
    avatar: "R"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bamberg-navy mb-8">
            O que nossos clientes dizem
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Review Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Review Count */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <Avatar key={testimonial.id} className="border-2 border-white w-12 h-12">
                    <AvatarFallback className="bg-bamberg-primary text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div>
                <div className="text-2xl font-bold text-bamberg-navy">125+</div>
                <div className="text-bamberg-text-secondary text-sm">Avaliações</div>
              </div>
            </div>

            {/* Quote Icon */}
            <div className="inline-flex p-4 bg-bamberg-primary/10 rounded-full">
              <Quote className="h-8 w-8 text-bamberg-primary" />
            </div>

            {/* Testimonial Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <blockquote className="text-lg md:text-xl text-bamberg-navy leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              <div className="w-16 h-px bg-bamberg-text-secondary"></div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-bamberg-primary text-white font-semibold">
                      {currentTestimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-bamberg-navy">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-sm text-bamberg-text-secondary">
                      {currentTestimonial.location}, {currentTestimonial.date}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="border-bamberg-text-secondary/20 hover:border-bamberg-primary hover:bg-bamberg-primary hover:text-white w-12 h-12 rounded-full"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="border-bamberg-text-secondary/20 hover:border-bamberg-primary hover:bg-bamberg-primary hover:text-white w-12 h-12 rounded-full"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Background Image Placeholder */}
            <div className="aspect-[4/3] bg-gradient-to-br from-bamberg-navy/20 to-bamberg-primary/30 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bamberg-navy via-bamberg-primary/40 to-bamberg-light-gold/30" />
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold text-bamberg-primary">★★★★★</div>
                <div className="text-sm text-bamberg-text-secondary">5.0 Rating</div>
              </div>

              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold text-bamberg-primary">98%</div>
                <div className="text-sm text-bamberg-text-secondary">Satisfação</div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-bamberg-primary w-8' 
                      : 'bg-bamberg-text-secondary/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}