import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    location: 'San Pedro Garza García',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
    description: 'Justo lo que necesitaba para mi nuevo depa',
    testimonial: 'Acabo de mudarme a San Pedro y estos marcos fueron perfectos para darle vida a mi sala. El servicio de impresión es increíble, solo envié mis fotos y llegaron listas para colgar.',
    rating: 5
  },
  {
    id: 2,
    name: 'Roberto Martínez',
    location: 'Cumbres',
    image: 'https://images.unsplash.com/photo-1614447413359-5f87a652a269?w=800',
    description: 'Calidad premium, entrega rápida',
    testimonial: 'El Set Sala Moderna transformó completamente mi espacio. La calidad de los marcos es excelente y la entrega fue súper rápida. Totalmente recomendado para quien se está mudando.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Sofía Ramírez',
    location: 'Valle Oriente',
    image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=800',
    description: 'Amé el resultado en mi recámara',
    testimonial: 'El Set Recámara Romántica es hermoso. Los marcos en tonos cálidos le dieron un toque especial a mi cuarto. El proceso fue facilísimo y el resultado superó mis expectativas.',
    rating: 5
  },
  {
    id: 4,
    name: 'Luis Fernando Torres',
    location: 'Monterrey Centro',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800',
    description: 'Excelente relación calidad-precio',
    testimonial: 'Compré el Set Galería Minimalista y quedé fascinado. La instalación profesional gratis fue un plus increíble. Ahora mi estudio se ve como galería de arte.',
    rating: 5
  },
  {
    id: 5,
    name: 'Daniela Flores',
    location: 'Contry',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800',
    description: 'El servicio de impresión es genial',
    testimonial: 'No tenía idea de cómo imprimir mis fotos de viaje, pero con su servicio fue súper fácil. Solo las envié por WhatsApp y llegaron impresas en excelente calidad junto con los marcos.',
    rating: 5
  }
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="galeria" className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-2 text-3xl md:text-5xl ">Testimonios</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Descubre cómo nuestros clientes han transformado sus espacios con nuestros marcos
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop - 3 testimonios */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <h4 className="mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="mb-4 text-gray-800 italic">
                    "{testimonial.description}"
                  </p>
                  
                  <p className="text-gray-600">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile - 1 testimonio */}
          <div className="md:hidden">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <h4 className="mb-1">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].location}</p>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="mb-4 text-gray-800 italic">
                  "{testimonials[currentIndex].description}"
                </p>
                
                <p className="text-gray-600">
                  {testimonials[currentIndex].testimonial}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-black w-8' : 'bg-gray-300'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}