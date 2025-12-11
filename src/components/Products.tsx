import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Marco Clásico de Madera',
    description: 'Elegante marco de madera natural perfecto para cualquier estilo',
    price: '29.99',
    image: 'https://images.unsplash.com/photo-1634252701103-fca57c571a9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwaWN0dXJlJTIwZnJhbWV8ZW58MXx8fHwxNzY0OTQ3MTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: 'Marco Moderno Minimalista',
    description: 'Diseño contemporáneo con líneas limpias y acabado mate',
    price: '34.99',
    image: 'https://images.unsplash.com/photo-1570993492881-25240ce854f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwaWN0dXJlJTIwZnJhbWVzfGVufDF8fHx8MTc2NDk2NzcwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: 'Marco Vintage',
    description: 'Estilo vintage con detalles ornamentales únicos',
    price: '39.99',
    image: 'https://images.unsplash.com/photo-1630955988408-3350b8ca0f01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcGhvdG8lMjBmcmFtZXxlbnwxfHx8fDE3NjQ5Njc3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    name: 'Set Galería de Pared',
    description: 'Colección de marcos para crear tu galería perfecta',
    price: '89.99',
    image: 'https://images.unsplash.com/photo-1614447413359-5f87a652a269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5JTIwd2FsbCUyMGZyYW1lc3xlbnwxfHx8fDE3NjQ5Njc3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Products() {
  return (
    <section id="productos" className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-2 text-3xl md:text-5xl ">Nuestra Colección</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Cada marco está cuidadosamente seleccionado para garantizar la mejor calidad y durabilidad
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <span className="text-gray-900">${product.price}</span>
                <div className="flex items-center justify-between">
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}