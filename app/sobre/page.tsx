"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Target, Lightbulb, Award, Users } from "lucide-react";
import Link from "next/link";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gray-50 ">
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
              className="flex items-center text-[#BFA94A] hover:text-[#E6C87A] transition-colors mr-4] #BFA94A]"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 ]">
              Sobre Nós
            </h1>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#c9c3b9] rounded-xl p-8 mb-8 "
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6]">
              Nossa Missão
            </h2>
            <p className="text-gray-900 leading-relaxed text-lg">
              Somos a AW ELITE PROTECTION, uma empresa especializada na
              blindagem de telemóveis, óculos e outros dispositivos, com foco na
              proteção e durabilidade dos bens dos nossos clientes. Existimos
              para oferecer soluções inovadoras, seguras e eficientes no
              segmento da proteção tecnológica, garantindo qualidade, estilo e
              confiança em cada serviço prestado.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6]">
              Nossos Valores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#c9c3b9] rounded-xl p-6 ">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C87A] rounded-lg flex items-center justify-center flex-shrink-0 ">
                    <Target className="w-6 h-6 text-white]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2]">
                      Confiança
                    </h3>
                    <p className="text-gray-900 text-sm">
                      Operamos com honestidade e transparência em todas as
                      nossas interações, construindo confiança com nossos
                      clientes e parceiros.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#c9c3b9] rounded-xl p-6 ">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C87A] rounded-lg flex items-center justify-center flex-shrink-0 ">
                    <Lightbulb className="w-6 h-6 text-white ]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2]">
                      Inovação
                    </h3>
                    <p className="text-gray-900 text-sm 0">
                      Nos esforçamos continuamente para desenvolver tecnologias
                      de blindagem novas e aprimoradas, ficando à frente das
                      ameaças emergentes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#c9c3b9] rounded-xl p-6 ">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C87A] rounded-lg flex items-center justify-center flex-shrink-0 ">
                    <Award className="w-6 h-6 text-white ]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2]">
                      Qualidade
                    </h3>
                    <p className="text-gray-900 text-sm">
                      Somos dedicados a entregar produtos duráveis, eficazes e
                      fáceis de usar que superem as expectativas dos nossos
                      clientes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#c9c3b9] rounded-xl p-6 ">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#E6C87A] rounded-lg flex items-center justify-center flex-shrink-0 ">
                    <Users className="w-6 h-6 text-white]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2]">
                      Responsabilidade
                    </h3>
                    <p className="text-gray-900 text-sm 0">
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
            className="bg-[#c9c3b9] rounded-xl p-8 mb-8 "
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6]">
              Nossa Equipa
            </h2>
            <p className="text-gray-900 leading-relaxed mb-8 ">
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
                className="w-16 h-16 bg-gradient-to-br from-[#E6C87A] to-[#BFA94A] rounded-full flex items-center justify-center ] "
              >
                <span className="text-white font-semibold text-lg ]">A</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 bg-gradient-to-br from-[#E6C87A] to-[#BFA94A] rounded-full flex items-center justify-center ] "
              >
                <span className="text-white font-semibold text-lg ]">B</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 bg-gradient-to-br from-[#E6C87A] to-[#BFA94A] rounded-full flex items-center justify-center ] "
              >
                <span className="text-white font-semibold text-lg ]">C</span>
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
            <div className="bg-[#c9c3b9] rounded-xl p-6 text-center ">
              <div className="text-3xl font-bold text-[#403d37] mb-2">
                99.9%
              </div>
              <div className="text-gray-900 text-sm ">
                Eficácia de Blindagem
              </div>
            </div>

            <div className="bg-[#c9c3b9] rounded-xl p-6 text-center ">
              <div className="text-3xl font-bold text-[#403d37] mb-2 ]">
                500+
              </div>
              <div className="text-gray-900 text-sm 0">
                Clientes Satisfeitos
              </div>
            </div>

            <div className="bg-[#c9c3b9] rounded-xl p-6 text-center ">
              <div className="text-3xl font-bold text-[#403d37] mb-2 ">5+</div>
              <div className="text-gray-900 text-sm ">Anos de Experiência</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
