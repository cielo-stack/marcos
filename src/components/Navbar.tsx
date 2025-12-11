import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import logo from './img/cimp.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              <img src={logo} alt="CIMP Logo" className="h-10 w-auto" />
              <span>Colecciones Impresas</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-70 transition-opacity"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicio-impresion')}
              className="hover:opacity-70 transition-opacity"
            >
              Servicio
            </button>
            <button
              onClick={() => scrollToSection('combos')}
              className="hover:opacity-70 transition-opacity"
            >
              Combos
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="hover:opacity-70 transition-opacity"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="hover:opacity-70 transition-opacity"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="hover:opacity-70 transition-opacity"
            >
              Contacto
            </button>
           
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:opacity-70 transition-opacity"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="hover:opacity-70 transition-opacity text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicio-impresion')}
                className="hover:opacity-70 transition-opacity text-left"
              >
                Servicio
              </button>
              <button
                onClick={() => scrollToSection('combos')}
                className="hover:opacity-70 transition-opacity text-left"
              >
                Combos
              </button>
              <button
                onClick={() => scrollToSection('productos')}
                className="hover:opacity-70 transition-opacity text-left"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="hover:opacity-70 transition-opacity text-left"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="hover:opacity-70 transition-opacity text-left"
              >
                Contacto
              </button>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}