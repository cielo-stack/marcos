import { Award, Truck, Shield, Heart } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Marcos fabricados con materiales de la más alta calidad para durar generaciones'
  },
  {
    icon: Truck,
    title: 'Envío Gratuito',
    description: 'Envío gratis en pedidos superiores a $50 a toda España'
  },
  {
    icon: Shield,
    title: 'Garantía de por Vida',
    description: 'Confiamos en nuestros productos y ofrecemos garantía completa'
  },
  {
    icon: Heart,
    title: 'Personalización',
    description: 'Crea marcos únicos con medidas y diseños personalizados'
  }
];

export function Features() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-2 text-3xl md:text-5xl ">¿Por Qué Elegirnos?</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Nos dedicamos a ofrecer la mejor experiencia en marcos de fotografía
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}