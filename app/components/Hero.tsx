"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Star } from "lucide-react";
import Button from "./ui/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-blue-300" />
              <span className="text-blue-300 font-medium">
                Proteção Premium
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Blindagem Elite para Seus
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                {" "}
                Dispositivos
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Proteja seu celular com a tecnologia mais avançada de blindagem.
              Adelmo e Wilker oferecem soluções premium com garantia de
              qualidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contato">
                <Button size="lg" className="w-full sm:w-auto group">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/produtos">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Ver Produtos
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <div className="text-sm text-blue-200">
                <span className="font-semibold">500+</span> clientes satisfeitos
              </div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {/* Phone mockups */}
                <div className="bg-black rounded-xl p-4 transform rotate-3">
                  <div className="bg-blue-600 h-32 rounded-lg flex items-center justify-center">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="bg-black rounded-xl p-4 transform -rotate-3 mt-8">
                  <div className="bg-cyan-600 h-32 rounded-lg flex items-center justify-center">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold"
              >
                Premium
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold"
              >
                Garantia
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
