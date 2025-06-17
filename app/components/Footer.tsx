import Link from "next/link";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-[#e1d2b0]" />
              <span className="text-xl font-bold">AW Elite Protection</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Proteção premium para seus dispositivos móveis. Tecnologia de
              ponta e atendimento personalizado pelos especialistas Adelmo e
              Wilker.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/tecnologia"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tecnologia
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white-500" />
                <span className="text-[#f0dcb3]">
                  +244 924 751 963 / 943 252 353
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white-500" />
                <span className="text-[#f0dcb3]">
                  info@aweliteprotection.com
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-white-500" />
                <span className="text-[#f0dcb3]">Lubango, Angola</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 AW Elite Protection. Todos os direitos reservados.
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Made by{" "}
            <a
              href="https://github.com/SilesterGold9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Silvestre Dourado
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
