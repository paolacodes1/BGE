"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Building2, Target, Users, TrendingUp, Award, MapPin } from "lucide-react";
import Link from "next/link";

export default function SobreNosPage() {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const numbersRef = useRef(null);
  const philosophyRef = useRef(null);
  const differentialsRef = useRef(null);
  const commitmentRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const numbersInView = useInView(numbersRef, { once: true, margin: "-100px" });
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-100px" });
  const differentialsInView = useInView(differentialsRef, { once: true, margin: "-100px" });
  const commitmentInView = useInView(commitmentRef, { once: true, margin: "-100px" });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-32 bg-gradient-to-br from-bamberg-navy via-bamberg-navy/95 to-bamberg-navy/90 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(195,151,73,0.1)_0%,transparent_50%),radial-gradient(circle_at_70%_60%,rgba(229,200,142,0.1)_0%,transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-bamberg-primary text-sm font-semibold tracking-wider uppercase">
                • SOBRE NÓS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
            >
              Bamberg Gisler
              <span className="block text-bamberg-primary">Empreendimentos</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12"
            >
              Desenvolvemos empreendimentos únicos e inovadores que transformam sonhos em realidade, 
              sempre com foco na qualidade, modernidade e satisfação de nossos clientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-bamberg-primary hover:bg-bamberg-accent text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
              >
                <Link href="/empreendimentos">
                  Conheça Nossos Projetos
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 lg:py-32 bg-bamberg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={fadeInLeft.initial}
              animate={missionInView ? fadeInLeft.animate : fadeInLeft.initial}
              transition={fadeInLeft.transition}
              className="space-y-8"
            >
              <div>
                <span className="text-bamberg-primary text-sm font-semibold tracking-wider uppercase block mb-4">
                  Nossa Missão
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bamberg-navy leading-tight">
                  Criamos espaços que se tornam parte integrante dos 
                  <span className="text-bamberg-primary"> projetos de vida</span> de nossos clientes
                </h2>
              </div>
              
              <p className="text-lg text-bamberg-text-secondary leading-relaxed">
                Acreditamos que cada empreendimento deve ser mais do que apenas um imóvel - 
                deve ser um lar, um investimento e um legado que perdura através das gerações.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bamberg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-bamberg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-bamberg-navy">Foco no Cliente</h4>
                  <p className="text-bamberg-text-secondary">Sempre planejado para surpreender e atender necessidades</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={fadeInRight.initial}
              animate={missionInView ? fadeInRight.animate : fadeInRight.initial}
              transition={fadeInRight.transition}
              className="aspect-square bg-gradient-to-br from-bamberg-navy/20 to-bamberg-primary/30 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bamberg-navy via-bamberg-primary/40 to-bamberg-light-gold/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Building2 className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">Transformando Sonhos</p>
                  <p className="text-sm opacity-80">em Realidade</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section ref={numbersRef} className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={fadeInUp.initial}
            animate={numbersInView ? fadeInUp.animate : fadeInUp.initial}
            transition={fadeInUp.transition}
            className="text-center mb-16"
          >
            <span className="text-bamberg-primary text-sm font-semibold tracking-wider uppercase block mb-4">
              Nossa Trajetória
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bamberg-navy leading-tight">
              Números que Comprovam Nossa 
              <span className="text-bamberg-primary"> Experiência</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "760", label: "Unidades Entregues", description: "Projetos concluídos que transformaram vidas", icon: Award },
              { number: "629", label: "Em Construção", description: "Empreendimentos em desenvolvimento", icon: TrendingUp },
              { number: "+1.400", label: "Em Projeção", description: "Pipeline robusto de novos projetos", icon: Building2 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={numbersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="text-center p-8 h-full border-bamberg-text-secondary/10 hover:border-bamberg-primary/20 transition-all duration-300">
                  <CardContent className="space-y-6">
                    <div className="w-16 h-16 bg-bamberg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <stat.icon className="h-8 w-8 text-bamberg-primary" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-bamberg-primary">
                      {stat.number}
                    </div>
                    <h3 className="text-xl font-semibold text-bamberg-navy">
                      {stat.label}
                    </h3>
                    <p className="text-bamberg-text-secondary">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={philosophyRef} className="py-20 lg:py-32 bg-bamberg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={fadeInUp.initial}
              animate={philosophyInView ? fadeInUp.animate : fadeInUp.initial}
              transition={fadeInUp.transition}
              className="space-y-8"
            >
              <span className="text-bamberg-primary text-sm font-semibold tracking-wider uppercase">
                Nossa Filosofia
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bamberg-navy leading-tight">
                "Nossos sonhos se encontram 
                <span className="text-bamberg-primary"> logo ali!</span>"
              </h2>
              
              <p className="text-lg text-bamberg-text-secondary leading-relaxed">
                Esta frase resume nossa essência. Nos últimos anos, ao lado de grandes parceiros estratégicos, 
                vários projetos começaram a virar realidade, transformando a vida de muitas pessoas. 
                Essa capacidade de materializar sonhos nos motiva a prosseguir, sempre planejando o que há 
                de mais moderno para ser parte do projeto de vida de nossos clientes.
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bamberg-primary">R$ 100M</div>
                    <div className="text-sm text-bamberg-text-secondary">Investimento em Santo Ângelo</div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bamberg-primary">93</div>
                    <div className="text-sm text-bamberg-text-secondary">Apartamentos no projeto</div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bamberg-primary">+500</div>
                    <div className="text-sm text-bamberg-text-secondary">Empregos gerados</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section ref={differentialsRef} className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={fadeInUp.initial}
            animate={differentialsInView ? fadeInUp.animate : fadeInUp.initial}
            transition={fadeInUp.transition}
            className="text-center mb-16"
          >
            <span className="text-bamberg-primary text-sm font-semibold tracking-wider uppercase block mb-4">
              Nossos Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bamberg-navy leading-tight">
              O que Torna Nossos 
              <span className="text-bamberg-primary"> Empreendimentos Únicos</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Planejamento Estratégico",
                description: "Foco nas necessidades do mercado e análise detalhada de cada projeto"
              },
              {
                icon: Building2,
                title: "Infraestrutura Completa",
                description: "Áreas de lazer, academia, piscinas e espaços gourmet em todos os projetos"
              },
              {
                icon: MapPin,
                title: "Localização Privilegiada",
                description: "Regiões de crescimento e desenvolvimento urbano estratégico"
              },
              {
                icon: Award,
                title: "Qualidade Construtiva",
                description: "Parceiros especializados e materiais de primeira linha"
              },
              {
                icon: Users,
                title: "Financiamento Facilitado",
                description: "Parcerias com instituições financeiras para facilitar a aquisição"
              },
              {
                icon: TrendingUp,
                title: "Visão de Futuro",
                description: "Sempre atentos às tendências do mercado imobiliário"
              }
            ].map((differential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={differentialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-bamberg-text-secondary/10 hover:border-bamberg-primary/20 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 bg-bamberg-primary/10 rounded-full flex items-center justify-center">
                      <differential.icon className="h-6 w-6 text-bamberg-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-bamberg-navy">
                      {differential.title}
                    </h3>
                    <p className="text-bamberg-text-secondary">
                      {differential.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section ref={commitmentRef} className="py-20 lg:py-32 bg-gradient-to-br from-bamberg-navy via-bamberg-navy/95 to-bamberg-navy/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={fadeInUp.initial}
              animate={commitmentInView ? fadeInUp.animate : fadeInUp.initial}
              transition={fadeInUp.transition}
              className="space-y-8"
            >
              <span className="text-bamberg-primary text-sm font-semibold tracking-wider uppercase">
                Nosso Compromisso
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Construindo não apenas edifícios, mas 
                <span className="text-bamberg-primary"> histórias de vida</span> e realizações pessoais
              </h2>
              
              <p className="text-lg text-white/90 leading-relaxed">
                Na Bamberg Gisler Empreendimentos, cada projeto é uma oportunidade de criar algo especial. 
                Trabalhamos incansavelmente para que nossos empreendimentos sejam marcos de qualidade e inovação, 
                sempre com a certeza de que estamos contribuindo para o desenvolvimento urbano sustentável 
                das regiões onde atuamos.
              </p>

              <div className="text-2xl md:text-3xl font-bold text-bamberg-primary">
                Juntos, transformamos sonhos em realidade!
              </div>

              <div className="flex gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-bamberg-primary hover:bg-bamberg-accent text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
                >
                  <Link href="/empreendimentos">
                    Ver Empreendimentos
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-white/20 text-white hover:bg-white hover:text-bamberg-navy rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
                >
                  <Link href="/contato">
                    Entre em Contato
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}