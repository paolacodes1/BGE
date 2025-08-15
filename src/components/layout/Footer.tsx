import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Send, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bamberg-background border-t border-bamberg-text-secondary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="text-2xl font-bold text-bamberg-navy mb-2">
                Bamberg Gisler
              </div>
              <div className="text-sm text-bamberg-text-secondary font-medium">
                Construindo Seus Sonhos em Imóveis
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <div className="text-bamberg-navy font-semibold">
                Inscreva-se em nossas novidades
              </div>
              <p className="text-sm text-bamberg-text-secondary">
                Mantenha-se informado e nunca perca uma oportunidade. 
                Inscreva-se para receber atualizações exclusivas!
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Digite seu email"
                  className="border-bamberg-text-secondary/20 focus:border-bamberg-primary text-sm"
                />
                <Button 
                  size="sm"
                  className="bg-bamberg-navy hover:bg-bamberg-primary text-white px-4"
                >
                  Inscrever
                </Button>
              </div>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div className="space-y-4">
            <h3 className="text-bamberg-navy font-semibold">Navegação Rápida</h3>
            <div className="space-y-3 text-sm">
              <Link href="/" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Início
              </Link>
              <Link href="/empreendimentos" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Nossos Empreendimentos
              </Link>
              <Link href="/sobre-nos" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Nossas Vantagens
              </Link>
              <Link href="/contato" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Nossa Equipe
              </Link>
              <Link href="/carreiras" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Carreiras
              </Link>
              <Link href="/missao" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Missão e Valores
              </Link>
            </div>
          </div>

          {/* Propriedades */}
          <div className="space-y-4">
            <h3 className="text-bamberg-navy font-semibold">Propriedades</h3>
            <div className="space-y-3 text-sm">
              <Link href="/empreendimentos?category=residential" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Apartamentos à Venda
              </Link>
              <Link href="/empreendimentos?category=commercial" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Salas Comerciais
              </Link>
              <Link href="/empreendimentos?status=delivered" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Casas à Venda
              </Link>
              <Link href="/empreendimentos?status=construction" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Novos Lançamentos
              </Link>
              <Link href="/empreendimentos?category=luxury" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Propriedades de Luxo
              </Link>
              <Link href="/empreendimentos?location=centro" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Propriedades no Centro
              </Link>
            </div>
          </div>

          {/* Recursos */}
          <div className="space-y-4">
            <h3 className="text-bamberg-navy font-semibold">Recursos</h3>
            <div className="space-y-3 text-sm">
              <Link href="/blog" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Perguntas Frequentes
              </Link>
              <Link href="/guia-compra" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Guia de Compra
              </Link>
              <Link href="/guia-venda" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Guia de Venda
              </Link>
              <Link href="/areas" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Guias de Área
              </Link>
              <Link href="/noticias" className="block text-bamberg-text-secondary hover:text-bamberg-primary transition-colors">
                Notícias Imobiliárias
              </Link>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-bamberg-navy font-semibold">
                Estamos aqui para mudar seu futuro.
              </h3>
              
              <div className="flex gap-3">
                <Button 
                  size="sm"
                  className="bg-bamberg-navy hover:bg-bamberg-primary text-white"
                >
                  Entre em Contato
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-bamberg-text-secondary/20 hover:border-bamberg-primary hover:bg-bamberg-primary hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-bamberg-text-secondary/20 hover:border-bamberg-primary hover:bg-bamberg-primary hover:text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-square bg-gradient-to-br from-bamberg-primary/20 to-bamberg-navy/20 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bamberg-navy/10 via-bamberg-primary/30 to-bamberg-light-gold/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-bamberg-primary mx-auto mb-2" />
                  <div className="text-xs font-semibold text-bamberg-navy">
                    123 Rua Principal,<br/>
                    Santo Ângelo, RS<br/>
                    Brasil
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-bamberg-text-secondary/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-bamberg-text-secondary">
            Copyright 2025 © Bamberg Gisler
          </div>
          <div className="flex space-x-6 text-sm text-bamberg-text-secondary">
            <Link href="/termos" className="hover:text-bamberg-primary transition-colors">
              Termos de Serviço
            </Link>
            <Link href="/privacidade" className="hover:text-bamberg-primary transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}