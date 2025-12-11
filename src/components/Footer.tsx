import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4">Colecciones Impresas</h3>
            <p className="text-gray-400">
              Tu destino para encontrar el marco perfecto que complemente tus recuerdos más especiales.
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Catálogo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personalización</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              {/* <li><a href="#" className="hover:text-white transition-colors">Blog</a></li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+34 900 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@coleccionesimpresas.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Monterrey, Nuevo León</span>
              </li>
              <li>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2025 Colecciones Impresas. Todos los derechos reservados.
          </p>
          
        
        </div>
      </div>
    </footer>
  );
}
