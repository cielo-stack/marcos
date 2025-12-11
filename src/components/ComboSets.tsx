import { ShoppingCart, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const combos = [
  {
    id: 1,
    name: 'Set Sala Moderna',
    description: 'Transforma tu sala con este elegante conjunto de 5 marcos que combinan a la perfección.',
    price: '$2,499',
    originalPrice: '$3,200',
    savings: 'Ahorra $701',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
    items: [
      '2 marcos 40x50 cm negros',
      '2 marcos 30x40 cm blancos',
      '1 marco 50x70 cm negro',
      'Guía de montaje incluida',
      'Kit de instalación completo'
    ],
    popular: true
  },
  {
    id: 2,
    name: 'Set Recámara Romántica',
    description: 'Crea un espacio íntimo y acogedor con estos marcos en tonos cálidos.',
    price: '$1,899',
    originalPrice: '$2,500',
    savings: 'Ahorra $601',
    imageUrl: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=800',
    items: [
      '3 marcos 30x40 cm dorados',
      '2 marcos 20x30 cm madera natural',
      'Plantillas de diseño',
      'Herrajes de pared'
    ],
    popular: false
  },
  {
    id: 3,
    name: 'Set Galería Minimalista',
    description: 'Perfecto para crear una galería de arte en tu hogar con estilo limpio y contemporáneo.',
    price: '$3,199',
    originalPrice: '$4,200',
    savings: 'Ahorra $1,001',
    imageUrl: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800',
    items: [
      '4 marcos 50x70 cm blancos',
      '3 marcos 40x50 cm blancos',
      '2 marcos 30x40 cm blancos',
      'Sistema de riel incluido',
      'Instalación profesional gratis'
    ],
    popular: false
  }
];

export function ComboSets() {
  return (
    <section id="combos" className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="mb-2 text-3xl md:text-5xl ">Sets de Marcos</h2>
          
          <p className="max-w-2xl mx-auto">
            Ahorra comprando nuestros sets cuidadosamente seleccionados. 
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo) => (
            <div key={combo.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {combo.popular && (
                <div className="bg-black text-white text-center py-2">
                  Más Popular
                </div>
              )}

              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={combo.imageUrl}
                  alt={combo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="mb-2 text-white">{combo.name}</h3>
                    <p className="text-sm text-gray-200">{combo.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl">{combo.price}</span>
                    {/* <span className="text-gray-500 line-through">{combo.originalPrice}</span> */}
                  </div>
                  {/* <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full">
                    {combo.savings}
                  </span> */}
                </div>

                <div className="mb-6">
                  <h4 className="mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {combo.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <button className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Agregar Combo al Carrito
                </button> */}

                {/* <p className="mt-4 text-sm text-center text-gray-600">
                  Envío gratis en pedidos superiores a $2,000
                </p> */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 max-w-3xl shadow-lg">
            <h3 className="mb-3">¿No encuentras el set perfecto?</h3>
            <p className="mb-4">
              Podemos crear un combo personalizado según tus necesidades y el estilo de tu hogar.
            </p>
            <a
              href="https://wa.me/?text=Hola%2C%20me%20gustaría%20consultar%20sobre%20un%20combo%20personalizado"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Consulta Personalizada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}