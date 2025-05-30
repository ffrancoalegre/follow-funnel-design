
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-instagram-gradient rounded-full flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-instagram-gradient bg-clip-text text-transparent">
                InstaBoost
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              El servicio más confiable para hacer crecer tu presencia en Instagram de forma segura y efectiva.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-instagram-pink cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              <Mail className="w-6 h-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Seguidores Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Likes Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comentarios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Visualizaciones Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chat en Vivo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Reembolso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garantías</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 InstaBoost. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
