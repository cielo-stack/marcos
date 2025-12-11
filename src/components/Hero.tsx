import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingBag } from 'lucide-react';

export function Hero() {
  return (
    <div id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1670726113933-4bb3940deaf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGZyYW1lcyUyMHdhbGx8ZW58MXx8fHwxNzY0OTY3NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Marcos de fotografía"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        
        <h1 className="mb-6 text-4xl md:text-6xl drop-shadow-2xl leading-tight">
          Solo Envía tu Foto, <br className="hidden md:block" />Nosotros Hacemos el Resto
        </h1>
        <p className="mb-4 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-lg">
          No te preocupes por nada. Selecciona tus marcos favoritos, envíanos tus fotos digitales y nosotros nos encargamos de imprimirlas profesionalmente y enmarcarlas para ti.
        </p>
        <p className="mb-10 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-lg">
          Perfecto para personas que se están mudando y quieren decorar su nuevo hogar sin complicaciones. Tú solo eliges, nosotros creamos.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-4 bg-white text-black rounded-lg hover:bg-amber-50 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Ver Colección
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-all transform hover:scale-105 backdrop-blur-sm">
            Comenzar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}