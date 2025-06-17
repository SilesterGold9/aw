"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MessageCircle, Clock } from "lucide-react";
import Link from "next/link";

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              className="flex items-center text-[#FFDFAF] hover:text-[#E6C97A] transition-colors mr-4 "
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold  text-gray-900">
              Contato
            </h1>
          </motion.div>

          {/* Contact Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold  text-gray-900">
              Entre em Contato
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed ">
              Estamos aqui para ajudar! Se você tem dúvidas sobre nossos
              produtos, precisa de assistência com um pedido, ou simplesmente
              quer saber mais sobre blindagem de telefone, estamos prontos para
              ajudá-lo. Escolha o método de contato que funciona melhor para
              você, e entraremos em contato o mais breve possível.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#c9c3b9] rounded-xl p-6 transition-colors cursor-pointer shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#c9c3b9] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#3a3322]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600 text-sm">
                    wilkersantos472@gmail.com
                  </p>
                  <p className="text-gray-600 text-sm">
                    adelmomtmt16@gmail.com
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm ">
                Envie-nos um email para dúvidas detalhadas ou suporte técnico
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#c9c3b9] rounded-xl p-6 transition-colors cursor-pointer shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#c9c3b9] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#3a3322]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Telefone
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {" "}
                    +244 924 751 963 / 943 252 353
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Ligue para suporte imediato durante horário comercial
              </p>
            </motion.div>

            {/* Live Chat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-[#c9c3b9] rounded-xl p-6 transition-colors cursor-pointer shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#c9c3b9] rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#3a3322]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Chat ao Vivo
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Segunda - Sexta, 9h - 17h (EST)
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm ">
                Chat em tempo real para resolução rápida de problemas
              </p>
            </motion.div>
          </div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#c9c3b9] rounded-xl p-8 mb-8 shadow-md hover:shadow-lg transition-colors"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-6 h-6 text-[#3a3322]" />
              <h3 className="text-xl font-semibold text-gray-900">
                Horário de Atendimento
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-gray-900 font-medium mb-2">
                  Suporte por Telefone
                </h4>
                <p className="text-gray-700 text-sm mb-1">
                  Segunda - Sexta: 9:00 - 18:00
                </p>
                <p className="text-gray-700 text-sm">Sábado: 10:00 - 14:00</p>
                <p className="text-gray-700 text-sm">Domingo: Fechado</p>
              </div>

              <div>
                <h4 className="text-gray-900 font-medium mb-2">
                  Suporte por Email
                </h4>
                <p className="text-gray-700 text-sm mb-1">Disponível 24/7</p>
                <p className="text-gray-700 text-sm">
                  Resposta em até 24 horas
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-[#c9c3b9] rounded-xl p-8 shadow-md hover:shadow-lg transition-colors"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Envie uma Mensagem
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-900 px-4 py-3 bg-[#c9c3b9] rounded-lg text-[#3a3322] focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-900 px-4 py-3 bg-[#c9c3b9] rounded-lg text-[#3a3322] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-900 px-4 py-3 bg-[#c9c3b9] rounded-lg text-[#3a3322] focus:outline-none transition-colors"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={6}
                  className="w-full border border-gray-900 px-4 py-3 bg-[#c9c3b9] rounded-lg text-[#3a3322] focus:outline-none transition-colors resize-none"
                  placeholder="Descreva sua dúvida ou problema..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFDFAF] hover:bg-[#E6C97A] text-[#3a3322] font-semibold py-4 px-8 rounded-lg transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
