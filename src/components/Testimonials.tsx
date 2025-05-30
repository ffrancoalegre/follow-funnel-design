
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      username: "@maria_lifestyle",
      comment: "Increíble servicio! Mis seguidores llegaron en menos de 3 minutos y todos son perfiles de calidad. Mi engagement aumentó un 300%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b302?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carlos Ruiz",
      username: "@carlos_fitness",
      comment: "Probé varios servicios antes, pero Seguidores Argy es el único que realmente cumple. Seguidores de calidad y soporte excelente.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ana Martínez",
      username: "@ana_beauty",
      comment: "Mi cuenta pasó de 500 a 10,500 seguidores en un día. Ahora las marcas me contactan para colaboraciones. ¡Súper recomendado!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo que dicen nuestros <span className="bg-instagram-gradient bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de influencers y marcas confían en nosotros para hacer crecer sus cuentas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.username}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
