"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  experience: string;
  location: string;
  description: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Carlos Bamberg",
    position: "Diretor Executivo",
    experience: "15+ anos",
    location: "Santo Ângelo, RS",
    description: "Especialista em desenvolvimento imobiliário com mais de 15 anos de experiência no mercado brasileiro."
  },
  {
    id: "2", 
    name: "Geovani Gisler",
    position: "Fundador & CEO",
    experience: "20+ anos",
    location: "Santo Ângelo, RS",
    description: "Empresário experiente e visionário do setor imobiliário e hoteleiro, fundador da Bamberg Gisler Empreendimentos. Presidente da Rede Versare Hotéis e corretor especializado através da Mirá Consultoria Imobiliária. Reconhecido por sua visão estratégica e capacidade de transformar sonhos em realidade através de empreendimentos únicos e inovadores.",
    image: "/images/Geovani.jpg"
  },
  {
    id: "3",
    name: "Ana Gisler",
    position: "Diretora de Projetos",
    experience: "12+ anos",
    location: "Porto Alegre, RS",
    description: "Arquiteta e urbanista responsável pelo planejamento estratégico dos empreendimentos."
  }
];

function TeamMemberCard({ member, index, isInView }: { member: TeamMember; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-0 relative">
          {/* Profile Image */}
          <div className="aspect-[3/4] bg-gradient-to-br from-bamberg-navy/20 to-bamberg-primary/30 relative overflow-hidden">
            {member.image ? (
              <Image
                src={member.image}
                alt={`${member.name} profile photo`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              /* Simulated Profile Image */
              <div className="absolute inset-0 bg-gradient-to-br from-bamberg-navy via-bamberg-primary/50 to-bamberg-light-gold/40" />
            )}
            
            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-bamberg-navy/70 backdrop-blur-sm flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 20
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-center p-6"
              >
                <p className="text-white text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            </motion.div>

            {/* Experience Badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-white/90 text-bamberg-navy">
                {member.experience}
              </Badge>
            </div>

            {/* Location Badge */}
            <div className="absolute top-4 right-4">
              <Badge variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm">
                {member.location}
              </Badge>
            </div>
          </div>

          {/* Member Info */}
          <div className="p-6 bg-white">
            <h3 className="text-xl font-bold text-bamberg-navy mb-1">
              {member.name}
            </h3>
            <p className="text-bamberg-text-secondary text-sm font-medium">
              {member.position}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-bamberg-navy mb-4"
          >
            Liderança
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="text-bamberg-text-secondary">2/3</span>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={member.id} 
              member={member} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-bamberg-text-secondary max-w-2xl mx-auto">
            Nossa equipe de liderança combina décadas de experiência em desenvolvimento imobiliário, 
            arquitetura e vendas para entregar empreendimentos excepcionais.
          </p>
        </motion.div>
      </div>
    </section>
  );
}