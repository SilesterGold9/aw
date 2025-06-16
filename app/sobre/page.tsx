"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Target, Lightbulb, Award, Users } from "lucide-react";
import Link from "next/link";
import Navigation from "../components/Navbar";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#18140c]">
      <div className="pt-20 md:pt-24 pb-24 md:pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center mb-8"
          >
            <Link
              href="/"
              className="flex items-center text-[#BFA94A] hover:text-[#E6C87A] transition-colors mr-4 dark:text-[#E6C87A] dark:hover:text-[#BFA94A]"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-[#E6C87A]">
              Sobre Nós
            </h1>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#c9c3b9] rounded-xl p-8 mb-8 dark:bg-[#3a3217]"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 dark:text-[#E6C87A]">
              Nossa Missão
            </h2>
            <p className="text-gray-900 leading-relaxed text-lg dark:text-gray-200">
              Na ShieldTech, nossa missão é fornecer soluções de blindagem de
              telefone de ponta que capacitam indivíduos a proteger sua
              privacidade e segurança em um mundo cada vez mais conectado.
              Estamos comprometidos com a inovação, qualidade e satisfação do
              cliente, garantindo que nossos produtos atendam aos mais altos
              padrões de desempenho e confiabilidade.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 dark:text-[#E6C87A]">
              Nossos Valores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#c9c3b9] rounded-xl p-6 dark:bg-[#3a3217]">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C87A] rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-[#BFA94A]">
                    <Target className="w-6 h-6 text-white dark:text-[#18140c]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 dark:text-[#E6C87A]">
                      Integridade
                    </h3>
                    <p className="text-gray-900 text-sm dark:text-gray-200">
                      Operamos com honestidade e transparência em todas as
                      nossas interações, construindo confiança com nossos
                      clientes e parceiros.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#c9c3b9] rounded-xl p-6 dark:bg-[#3a3217]">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C87A] rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-[#BFA94A]">
                    <Lightbulb className="w-6 h-6 text-white dark:text-[#18140c]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 dark:text-[#E6C87A]">
                      Inovação
                    </h3>
                    <p className="text-gray-900 text-sm dark:text-gray-200">
                      Nos esforçamos continuamente para desenvolver tecnologias
                      de blindagem novas e aprimoradas, ficando à frente das
                      ameaças emergentes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#c9c3b9] rounded-xl p-6 dark:bg-[#3a3217]">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C87A] rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-[#BFA94A]">
                    <Award className="w-6 h-6 text-white dark:text-[#18140c]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 dark:text-[#E6C87A]">
                      Qualidade
                    </h3>
                    <p className="text-gray-900 text-sm dark:text-gray-200">
                      Somos dedicados a entregar produtos duráveis, eficazes e
                      fáceis de usar que superem as expectativas dos nossos
                      clientes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#c9c3b9] rounded-xl p-6 dark:bg-[#3a3217]">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C87A] rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-[#BFA94A]">
                    <Users className="w-6 h-6 text-white dark:text-[#18140c]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 dark:text-[#E6C87A]">
                      Foco no Cliente
                    </h3>
                    <p className="text-gray-900 text-sm dark:text-gray-200">
                      Priorizamos as necessidades dos nossos clientes,
                      fornecendo suporte excepcional e serviço para garantir sua
                      satisfação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#c9c3b9] rounded-xl p-8 mb-8 dark:bg-[#3a3217]"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 dark:text-[#E6C87A]">
              Nossa Equipe
            </h2>
            <p className="text-gray-900 leading-relaxed mb-8 dark:text-gray-200">
              Nossa equipe consiste em engenheiros experientes, designers e
              especialistas em segurança que são apaixonados por criar soluções
              inovadoras. Trabalhamos colaborativamente para dar vida à nossa
              visão, combinando expertise técnica com um profundo entendimento
              das necessidades dos usuários.
            </p>

            {/* Team Photos */}
            <div className="flex justify-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 bg-gradient-to-br from-[#E6C87A] to-[#BFA94A] rounded-full flex items-center justify-center dark:from-[#BFA94A] dark:to-[#E6C87A]"
              >
                <span className="text-white font-semibold text-lg dark:text-[#18140c]">
                  A
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 bg-gradient-to-br from-[#E6C87A] to-[#BFA94A] rounded-full flex items-center justify-center dark:from-[#BFA94A] dark:to-[#E6C87A]"
              >
                <span className="text-white font-semibold text-lg dark:text-[#18140c]">
                  B
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 bg-gradient-to-br from-[#E6C87A] to-[#BFA94A] rounded-full flex items-center justify-center dark:from-[#BFA94A] dark:to-[#E6C87A]"
              >
                <span className="text-white font-semibold text-lg dark:text-[#18140c]">
                  C
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-[#c9c3b9] rounded-xl p-6 text-center dark:bg-[#3a3217]">
              <div className="text-3xl font-bold text-[#403d37] mb-2">
                99.9%
              </div>
              <div className="text-gray-900 text-sm dark:text-gray-200">
                Eficácia de Blindagem
              </div>
            </div>

            <div className="bg-[#c9c3b9] rounded-xl p-6 text-center dark:bg-[#3a3217]">
              <div className="text-3xl font-bold text-[#403d37] mb-2 ]">
                10k+
              </div>
              <div className="text-gray-900 text-sm dark:text-gray-200">
                Clientes Satisfeitos
              </div>
            </div>

            <div className="bg-[#c9c3b9] rounded-xl p-6 text-center dark:bg-[#3a3217]">
              <div className="text-3xl font-bold text-[#403d37] mb-2 ">5+</div>
              <div className="text-gray-900 text-sm dark:text-gray-200">
                Anos de Experiência
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
