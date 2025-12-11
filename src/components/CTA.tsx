import { Mail } from 'lucide-react';

export function CTA() {
  return (
    <section id="contacto" className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-4">Únete a Nuestra Comunidad</h2>
        <p className="mb-8 text-gray-300">
          Recibe ofertas exclusivas, inspiración para decorar y novedades directamente en tu correo
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <button 
            type="submit"
            className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  );
}