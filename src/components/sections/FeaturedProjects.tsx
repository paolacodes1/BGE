"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, MapPin, Users, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { developments, getStatusLabel } from "@/lib/data";

interface ProjectCardProps {
  project: typeof developments[0];
  index: number;
  isInView: boolean;
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl min-h-[300px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="aspect-[4/3] bg-gradient-to-br from-bamberg-navy/20 to-bamberg-primary/20 relative overflow-hidden">
        {project.images && project.images.length > 0 ? (
          <Image
            src={project.images[0]}
            alt={`${project.name} development`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          /* Simulated Background Image */
          <div className="absolute inset-0 bg-gradient-to-br from-bamberg-navy via-bamberg-primary/30 to-bamberg-light-gold/40" />
        )}
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-bamberg-navy/60 backdrop-blur-sm"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-3">
              <Badge variant="secondary" className="bg-white/90 text-bamberg-navy w-fit">
                {project.location}
              </Badge>
              <Badge variant="secondary" className="bg-gray-800 text-white w-fit">
                {getStatusLabel(project.status)}
              </Badge>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className={`text-white hover:bg-white/20 transition-all duration-300 ${
                    isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                >
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <ProjectModal project={project} />
              </DialogContent>
            </Dialog>
          </div>

          {/* Bottom Section - Show on Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                {project.name}
              </h3>
              <p className="text-white/90 text-sm drop-shadow-md leading-relaxed">
                {project.description}{" "}
                <Link 
                  href={`/empreendimentos/${project.slug}`}
                  className="text-bamberg-light-gold hover:text-bamberg-primary underline transition-colors font-medium"
                >
                  Saiba mais
                </Link>
              </p>
            </div>

            {/* Project Details */}
            <div className="space-y-2">
              {project.details.units && (
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Users className="h-4 w-4" />
                  <span>{project.details.units} unidades</span>
                </div>
              )}
              {project.details.unitSize && (
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>A partir de {project.details.unitSize}</span>
                </div>
              )}
              {project.address && (
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span className="line-clamp-1">{project.address}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project }: { project: typeof developments[0] }) {
  return (
    <div className="space-y-6">
      <div className="aspect-video bg-gradient-to-br from-bamberg-navy to-bamberg-primary rounded-lg"></div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-bamberg-navy">{project.name}</h2>
            <p className="text-bamberg-text-secondary">{project.location}</p>
          </div>
          <Badge>{getStatusLabel(project.status)}</Badge>
        </div>
        
        <p className="text-bamberg-text-secondary">{project.description}</p>
        
        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.details.units && (
            <div className="text-center p-4 bg-bamberg-background rounded-lg">
              <div className="text-2xl font-bold text-bamberg-primary">{project.details.units}</div>
              <div className="text-sm text-bamberg-text-secondary">Unidades</div>
            </div>
          )}
          {project.details.unitSize && (
            <div className="text-center p-4 bg-bamberg-background rounded-lg">
              <div className="text-2xl font-bold text-bamberg-primary">{project.details.unitSize}</div>
              <div className="text-sm text-bamberg-text-secondary">Tamanho</div>
            </div>
          )}
          {project.details.investment && (
            <div className="text-center p-4 bg-bamberg-background rounded-lg">
              <div className="text-2xl font-bold text-bamberg-primary">{project.details.investment}</div>
              <div className="text-sm text-bamberg-text-secondary">Investimento</div>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <Button asChild className="bg-bamberg-primary hover:bg-bamberg-light-gold text-bamberg-navy">
            <Link href={`/empreendimentos/${project.slug}`}>
              Ver Página Completa
            </Link>
          </Button>
          <Button variant="outline" className="border-bamberg-primary text-bamberg-primary">
            Entrar em Contato
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  let featuredProjects = developments.filter(dev => dev.featured);
  
  // Fallback: if no featured projects, show all projects
  if (featuredProjects.length === 0) {
    featuredProjects = developments;
  }

  const itemsPerPage = 6; // 2 rows x 3 columns
  const totalPages = Math.ceil(featuredProjects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProjects = featuredProjects.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-bamberg-primary text-sm font-semibold tracking-wider uppercase">
                • Recomendações Recentes
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-bamberg-navy"
            >
              Projetos
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            {/* Navigation Arrows */}
            {totalPages > 1 && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="border-bamberg-navy text-bamberg-navy hover:bg-bamberg-navy hover:text-white rounded-full"
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="border-bamberg-navy text-bamberg-navy hover:bg-bamberg-navy hover:text-white rounded-full"
                  disabled={currentIndex === totalPages - 1}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
            
            <Button 
              asChild 
              variant="outline" 
              className="border-bamberg-navy text-bamberg-navy hover:bg-bamberg-navy hover:text-white rounded-full"
            >
              <Link href="/empreendimentos">Ver Todos</Link>
            </Button>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <Button variant="ghost" className="text-bamberg-text-secondary hover:text-bamberg-primary">
            Filtro
          </Button>
          <Button variant="ghost" className="text-bamberg-text-secondary hover:text-bamberg-primary">
            Comprar ↓
          </Button>
          <Button variant="ghost" className="text-bamberg-text-secondary hover:text-bamberg-primary">
            Qualquer propriedade ↓
          </Button>
          <Button variant="ghost" className="text-bamberg-text-secondary hover:text-bamberg-primary">
            Todas as áreas ↓
          </Button>
        </motion.div>

        {/* Projects Grid Container with Navigation Arrow */}
        <div className="relative">
          {/* Projects Grid - 2 Rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6 min-h-[600px]">
            {currentProjects.length > 0 ? currentProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                isInView={isInView}
              />
            )) : (
              <div className="col-span-full text-center py-12">
                <p className="text-bamberg-text-secondary">Carregando projetos...</p>
              </div>
            )}
          </div>

          {/* Right Navigation Arrow - Only show if there are more pages */}
          {totalPages > 1 && currentIndex < totalPages - 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10"
            >
              <Button
                onClick={nextSlide}
                size="lg"
                className="bg-bamberg-primary hover:bg-bamberg-accent text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          )}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-2 mt-8"
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-bamberg-primary'
                    : 'bg-bamberg-text-secondary/30 hover:bg-bamberg-text-secondary/60'
                }`}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}