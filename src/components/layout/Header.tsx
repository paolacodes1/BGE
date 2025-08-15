"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">
              BG
            </div>
          </Link>

          {/* Category Pills - Center */}
          <div className="hidden md:flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full p-2 flex gap-2">
              <Link 
                href="/empreendimentos?category=residential" 
                className="px-6 py-2 text-white hover:bg-white/20 rounded-full transition-all text-sm font-medium"
              >
                Residencial
              </Link>
              <Link 
                href="/empreendimentos?category=commercial" 
                className="px-6 py-2 text-white hover:bg-white/20 rounded-full transition-all text-sm font-medium"
              >
                Comercial
              </Link>
            </div>
          </div>

          {/* Language Selector - Right */}
          <div className="hidden md:flex items-center">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10 flex items-center gap-2"
            >
              PT
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-semibold text-bamberg-navy"
                  onClick={() => setIsOpen(false)}
                >
                  Início
                </Link>
                
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-bamberg-navy">
                    Empreendimentos
                  </div>
                  <div className="ml-4 space-y-2">
                    <Link
                      href="/empreendimentos"
                      className="block text-bamberg-text-secondary hover:text-bamberg-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Todos
                    </Link>
                    <Link
                      href="/empreendimentos?category=residential"
                      className="block text-bamberg-text-secondary hover:text-bamberg-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Residencial
                    </Link>
                    <Link
                      href="/empreendimentos?category=commercial"
                      className="block text-bamberg-text-secondary hover:text-bamberg-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      Comercial
                    </Link>
                  </div>
                </div>

                <Link
                  href="/sobre-nos"
                  className="text-lg font-semibold text-bamberg-navy"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre Nós
                </Link>
                
                <Link
                  href="/contato"
                  className="text-lg font-semibold text-bamberg-navy"
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>

                <Button asChild className="bg-bamberg-primary hover:bg-bamberg-light-gold text-bamberg-navy mt-6">
                  <Link href="/contato" onClick={() => setIsOpen(false)}>
                    Fale Conosco
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}