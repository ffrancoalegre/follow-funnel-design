
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Es seguro comprar seguidores?",
      answer: "Sí, nuestro servicio es 100% seguro. No necesitas proporcionar tu contraseña, solo tu nombre de usuario. Cumplimos con todas las políticas de Instagram."
    },
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "La entrega comienza inmediatamente después del pago y se completa en 3-5 minutos para la mayoría de paquetes. Los paquetes premium se entregan instantáneamente."
    },
    {
      question: "¿Los seguidores son reales?",
      answer: "Sí, todos nuestros seguidores son perfiles reales y activos. No utilizamos bots ni cuentas falsas que puedan dañar tu cuenta."
    },
    {
      question: "¿Qué pasa si pierdo seguidores?",
      answer: "Ofrecemos garantía de reposición de por vida. Si llegas a perder seguidores (lo cual es muy raro), los reponemos automáticamente sin costo adicional."
    },
    {
      question: "¿Puedo comprar más de un paquete?",
      answer: "¡Por supuesto! Puedes combinar paquetes o realizar múltiples compras. También ofrecemos descuentos especiales para clientes recurrentes."
    },
    {
      question: "¿Ofrecen soporte al cliente?",
      answer: "Tenemos soporte 24/7 disponible por chat, email y WhatsApp. Nuestro equipo está siempre listo para ayudarte con cualquier duda o problema."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas <span className="bg-instagram-gradient bg-clip-text text-transparent">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resolvemos todas tus dudas sobre nuestro servicio
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
