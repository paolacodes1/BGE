"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Music, Instagram, Twitter } from "lucide-react";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-bamberg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <span className="text-bamberg-primary text-sm font-semibold tracking-wider uppercase">
                • ENTRE EM CONTATO
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-bamberg-navy leading-tight">
                Complete este formulário para entrar em contato com nossa equipe
              </h2>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-bamberg-text-secondary font-medium">SIGA-NOS:</p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-bamberg-text-secondary hover:text-bamberg-primary">
                  <Music className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-bamberg-text-secondary hover:text-bamberg-primary">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-bamberg-text-secondary hover:text-bamberg-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="aspect-video bg-gradient-to-br from-bamberg-navy/20 to-bamberg-primary/30 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bamberg-navy via-bamberg-primary/40 to-bamberg-light-gold/30" />
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-bamberg-navy font-medium">
                    Nome*
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="William"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="border-bamberg-text-secondary/20 focus:border-bamberg-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-bamberg-navy font-medium">
                    Sobrenome*
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Silva"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="border-bamberg-text-secondary/20 focus:border-bamberg-primary"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-bamberg-navy font-medium">
                  Endereço de Email*
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="william.silva@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-bamberg-text-secondary/20 focus:border-bamberg-primary"
                  required
                />
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-bamberg-navy font-medium">
                  Localização
                </Label>
                <Select onValueChange={(value) => handleInputChange('location', value)}>
                  <SelectTrigger className="border-bamberg-text-secondary/20 focus:border-bamberg-primary">
                    <SelectValue placeholder="Selecione sua localização" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="santo-angelo">Santo Ângelo</SelectItem>
                    <SelectItem value="porto-alegre">Porto Alegre</SelectItem>
                    <SelectItem value="entre-ijuis">Entre-Ijuís</SelectItem>
                    <SelectItem value="itajai">Itajaí</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-bamberg-navy font-medium">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu interesse em nossos empreendimentos..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="border-bamberg-text-secondary/20 focus:border-bamberg-primary min-h-[120px] resize-none"
                  rows={5}
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                className="w-full bg-bamberg-navy hover:bg-bamberg-primary text-white rounded-full py-6 text-lg font-medium transition-all duration-300"
              >
                Enviar
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}