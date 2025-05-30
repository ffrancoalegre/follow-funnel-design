
import { Button } from "@/components/ui/button";
import { Shield, Zap, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-hero-gradient min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Aumenta tus
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Seguidores
            </span>
            de Instagram
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Compra seguidores reales y de calidad. Entrega inmediata, 100% seguro y con garantía de por vida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="btn-instagram text-lg px-8 py-4">
              Ver Paquetes
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              Conocer Más
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Inmediata</h3>
              <p className="opacity-80">Recibe tus seguidores en menos de 5 minutos</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Seguro</h3>
              <p className="opacity-80">No necesitas contraseña, totalmente seguro</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seguidores Reales</h3>
              <p className="opacity-80">Perfiles auténticos y activos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
