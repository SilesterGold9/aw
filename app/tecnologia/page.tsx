"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Microscope,
  Award,
  Layers,
  Droplets,
  Sun,
  Smartphone,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/Card";

export default function Tecnologia() {
  const technologies = [
    {
      icon: Layers,
      title: "Tecnologia Multicamadas",
      description:
        "Sistema avançado de múltiplas camadas que oferece proteção superior contra impactos e riscos.",
      features: [
        "9 camadas de proteção",
        "Absorção de impacto",
        "Resistência extrema",
      ],
    },
    {
      icon: Droplets,
      title: "Revestimento Hidrofóbico",
      description:
        "Coating especial que repele líquidos e facilita a limpeza da superfície blindada.",
      features: ["Repelente a água", "Anti-oleosidade", "Fácil limpeza"],
    },
    {
      icon: Sun,
      title: "Proteção UV",
      description:
        "Filtro integrado que protege contra raios ultravioleta e previne o amarelamento.",
      features: [
        "Filtro UV 99%",
        "Anti-amarelamento",
        "Durabilidade prolongada",
      ],
    },
    {
      icon: Zap,
      title: "Condutividade Touch",
      description:
        "Mantém a sensibilidade original do touch screen sem comprometer a responsividade.",
      features: [
        "Sensibilidade preservada",
        "Resposta rápida",
        "Compatibilidade total",
      ],
    },
  ];

  const specs = [
    {
      label: "Dureza",
      value: "9H",
      description: "Máxima resistência a riscos",
    },
    {
      label: "Transparência",
      value: "99.9%",
      description: "Clareza cristalina",
    },
    {
      label: "Espessura",
      value: "0.33mm",
      description: "Ultra fino e discreto",
    },
    {
      label: "Proteção UV",
      value: "99%",
      description: "Bloqueio total de raios UV",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Análise do Dispositivo",
      description:
        "Avaliação completa do aparelho para determinar a melhor solução de blindagem.",
    },
    {
      step: "02",
      title: "Preparação da Superfície",
      description:
        "Limpeza especializada e preparação da tela para garantir aderência perfeita.",
    },
    {
      step: "03",
      title: "Aplicação Precisa",
      description:
        "Instalação profissional utilizando técnicas avançadas e equipamentos especializados.",
    },
    {
      step: "04",
      title: "Controle de Qualidade",
      description:
        "Verificação final para garantir instalação perfeita e funcionamento adequado.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Microscope className="h-12 w-12 text-purple-200" />
              <h1 className="text-4xl lg:text-5xl font-bold">
                Nossa Tecnologia
              </h1>
            </div>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Utilizamos as tecnologias mais avançadas do mercado para garantir
              proteção superior e durabilidade máxima para seus dispositivos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tecnologias Inovadoras
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada solução incorpora múltiplas tecnologias de ponta para
              oferecer proteção completa e performance excepcional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <tech.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {tech.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{tech.description}</p>
                    <ul className="space-y-2">
                      {tech.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Especificações Técnicas
            </h2>
            <p className="text-xl text-gray-600">
              Números que comprovam a excelência de nossos produtos
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-2xl p-6 mb-4">
                  <div className="text-3xl font-bold mb-2">{spec.value}</div>
                  <div className="text-sm text-purple-100">{spec.label}</div>
                </div>
                <p className="text-sm text-gray-600">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Processo de Instalação
            </h2>
            <p className="text-xl text-gray-600">
              Metodologia profissional para resultados perfeitos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Inovação Constante
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                Investimos continuamente em pesquisa e desenvolvimento para
                oferecer sempre as melhores soluções de proteção do mercado.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="h-12 w-12 text-yellow-400" />
                <div>
                  <div className="text-lg font-semibold">
                    Certificação Internacional
                  </div>
                  <div className="text-blue-200">
                    Padrões mundiais de qualidade
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Smartphone className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">1000+</div>
                <div className="text-sm text-blue-200">Modelos Suportados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Shield className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">99.9%</div>
                <div className="text-sm text-blue-200">Taxa de Sucesso</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Zap className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">24h</div>
                <div className="text-sm text-blue-200">Cura Completa</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Microscope className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">10+</div>
                <div className="text-sm text-blue-200">Anos de Pesquisa</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
