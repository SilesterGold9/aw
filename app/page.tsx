"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Hero from "./components/Hero";
import { Card, CardContent } from "./components/ui/Card";
import Button from "./components/ui/Button";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Proteção Absoluta",
      description:
        "Blindagem de alta qualidade que protege contra quedas, riscos e impactos.",
    },
    {
      icon: Zap,
      title: "Instalação Rápida",
      description:
        "Processo profissional e ágil, sem comprometer a funcionalidade do dispositivo.",
    },
    {
      icon: Award,
      title: "Garantia Premium",
      description:
        "Cobertura completa e atendimento especializado pós-instalação.",
    },
  ];

  const services = [
    "Blindagem de Tela",
    "Proteção de Câmera",
    "Blindagem Corporal",
    "Proteção Antirrisco",
    "Blindagem Impermeável",
    "Proteção UV",
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Empresária",
      content:
        "Excelente serviço! Meu iPhone está protegido há 2 anos e continua perfeito.",
    },
    {
      name: "Ana Costa",
      role: "Advogada",
      content:
        "Atendimento personalizado e resultado impecável. Voltarei sempre!",
    },
    {
      name: "Silvestre Dourado",
      role: "Engenheiro Informático",
      content:
        "O meu velho Samsung recebeu uma garantia extendida de vida. Recomendo muito.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher AW Elite Protection?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos tecnologia de ponta com experiência profissional para
              oferecer a melhor proteção para seus dispositivos móveis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-8">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Nossos Serviços Especializados
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Oferecemos uma gama completa de soluções de blindagem, adaptadas
                às necessidades específicas de cada cliente.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>

              <Link href="/produtos">
                <Button size="lg" className="group">
                  Ver Todos os Produtos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Adelmo & Wilker</h3>
                <p className="text-blue-100 mb-6">
                  Especialistas com mais de 10 anos de experiência em blindagem
                  de dispositivos móveis, oferecendo soluções personalizadas.
                </p>
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-blue-200" />
                  <div>
                    <div className="font-semibold">500+ Clientes</div>
                    <div className="text-sm text-blue-200">Satisfeitos</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600">
              Depoimentos reais de quem confia na AW Elite Protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <p className="text-gray-600 mb-6 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para Proteger Seu Dispositivo?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Entre em contato agora mesmo e descubra qual solução é ideal para
              você.
            </p>
            <Link href="/contato">
              <Button
                variant="outline"
                size="lg"
                className="text-blue-800 border-white hover:bg-white hover:text-blue-600 transition"
              >
                Fale Conosco
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
