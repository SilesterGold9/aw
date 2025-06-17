"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Star,
  CheckCircle,
  Smartphone,
  Droplets,
  Glasses,
  LucideSmartphoneNfc,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Produtos() {
  const products = [
    {
      id: 1,
      name: "Blindagem de telemóveis",
      price: "Akz 3.500",
      image: Shield,
      rating: 5,
      features: [
        "Proteção contra quedas até 3m",
        "Aplicação rápida e sem resíduos",
        "Compatível com todos os modelos e marcas",
        "Prolonga a vida útil do dispositivo",
      ],
      description:
        "Nossa solução mais completa para proteção total do seu dispositivo.",
      popular: false,
    },
    {
      id: 2,
      name: "Blindagem de óculos",
      price: "Akz 2.000",
      image: Glasses,
      rating: 4,
      features: [
        "Proteção básica eficiente",
        "Ideal para estudantes, profissionais e motoristas",
        "Protege sem alterar a estética das lentes",
        "Reduz a necessidade de limpeza constante",
      ],
      description: "Proteção confiável com excelente custo-benefício.",
    },
    {
      id: 3,
      name: "Vendas de Películas de Proteção para Ecrã",
      price: "Akz Depende da Capa",
      image: Smartphone,
      rating: 5,
      features: [
        "Qualidade premium",
        "Resistência a riscos e quedas",
        "Aplicação sem bolhas",
      ],
      description:
        "Películas de alta resistência, para diferentes modelos de telefone",
    },
    {
      id: 4,
      name: "Venda de capas protetoras",
      price: "Akz 3.000",
      image: LucideSmartphoneNfc,
      rating: 5,
      features: [
        "Estilo moderno e variedade de cores",
        "Resistente a poeira",
        "Proteção contra choques, arranhões e quedas",
        "Adaptadas aos modelos mais populares do mercado",
      ],
      description: "Disponibilização de capas de silicone e plástico reforçado",
    },
  ];

  const categories = [
    "Todos os Produtos",
    "Blindagem de Tela",
    "Proteção de Câmera",
    "Blindagem Corporal",
    "Acessórios",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Nossos Produtos
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Descubra nossa linha completa de soluções de blindagem premium
              para todos os tipos de dispositivos móveis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full transition-colors ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      Mais Popular
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <product.image className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 text-center mb-4">
                      {product.description}
                    </p>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button className="w-full">Solicitar Orçamento</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Qualidade e Durabilidade Garantidas
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Todos os nossos produtos passam por rigorosos testes de
                qualidade e são instalados por profissionais certificados.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Materiais importados de alta qualidade
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Instalação profissional incluída
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Garantia estendida disponível
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">
                    Suporte técnico especializado
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                Precisa de Ajuda para Escolher?
              </h3>
              <p className="text-blue-100 mb-6">
                Nossa equipe está pronta para ajudá-lo a encontrar a solução
                perfeita para suas necessidades específicas.
              </p>
              <Button
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Falar com Especialista
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
