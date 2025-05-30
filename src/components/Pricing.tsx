
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import PurchaseModal from "./PurchaseModal";

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    followers: string;
    price: string;
  } | null>(null);

  const plans = [
    {
      name: "Starter",
      followers: "1,000",
      price: "$9.99",
      features: [
        "1,000 seguidores de calidad",
        "Entrega en 5 minutos",
        "Sin caída garantizada",
        "Soporte 24/7"
      ],
      popular: false
    },
    {
      name: "Popular",
      followers: "5,000",
      price: "$29.99",
      originalPrice: "$49.99",
      features: [
        "5,000 seguidores de calidad",
        "Entrega en 3 minutos",
        "Sin caída garantizada",
        "Soporte prioritario",
        "Bonus: 100 likes gratis"
      ],
      popular: true
    },
    {
      name: "Premium",
      followers: "10,000",
      price: "$49.99",
      originalPrice: "$99.99",
      features: [
        "10,000 seguidores de calidad",
        "Entrega instantánea",
        "Sin caída garantizada",
        "Soporte VIP",
        "Bonus: 500 likes gratis",
        "Análisis de crecimiento"
      ],
      popular: false
    }
  ];

  const handlePurchaseClick = (plan: typeof plans[0]) => {
    setSelectedPlan({
      name: plan.name,
      followers: plan.followers,
      price: plan.price
    });
    setIsModalOpen(true);
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Elige tu <span className="bg-instagram-gradient bg-clip-text text-transparent">Paquete</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Planes diseñados para hacer crecer tu cuenta de Instagram de forma rápida y segura
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative card-hover animate-scale-in ${
                plan.popular ? 'ring-2 ring-instagram-pink shadow-2xl transform scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-instagram-gradient text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Más Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="text-4xl font-bold mt-4">
                  <span className="bg-instagram-gradient bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-400 line-through ml-2">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{plan.followers} seguidores</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => handlePurchaseClick(plan)}
                  className={`w-full ${
                    plan.popular ? 'btn-instagram' : 'bg-gray-800 hover:bg-gray-900'
                  }`}
                  size="lg"
                >
                  Comprar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <PurchaseModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          planName={selectedPlan.name}
          planFollowers={selectedPlan.followers}
          planPrice={selectedPlan.price}
        />
      )}
    </section>
  );
};

export default Pricing;
