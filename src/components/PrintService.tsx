import { Upload, Printer, Package, Sparkles, X } from 'lucide-react';
import { useState, useRef } from 'react';

export function PrintService() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedFrame, setSelectedFrame] = useState<'black' | 'white' | 'wood'>('black');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const steps = [
    {
      icon: Upload,
      title: 'Envía tu Foto',
      description: 'Mándanos tus fotos favoritas por WhatsApp o email en alta resolución'
    },
    {
      icon: Printer,
      title: 'Nosotros Imprimimos',
      description: 'Utilizamos impresión profesional de alta calidad en papel fotográfico premium'
    },
    {
      icon: Package,
      title: 'Enmarcamos',
      description: 'Montamos tu foto en el marco que elegiste con acabado profesional'
    },
    {
      icon: Sparkles,
      title: 'Entregamos',
      description: 'Recibe tu marco listo para colgar en la pared de tu nuevo hogar'
    }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const frameStyles = {
    black: { border: '16px solid #1a1a1a', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' },
    white: { border: '16px solid #f5f5f5', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' },
    wood: { border: '16px solid #8b7355', boxShadow: '0 10px 40px rgba(0,0,0,0.25)', background: 'linear-gradient(to bottom, #a0826d, #8b7355)' }
  };

  return (
    <section id="servicio-impresion" className="py-12 px-4 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Steps and Preview Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Steps Column */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center relative">
                      <Icon className="w-8 h-8 text-amber-700" />
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Preview Area */}
          <div className="relative">
            <div 
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, #f5f1e8 0%, #e8dfd0 100%)',
                backgroundImage: `
                  repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
                  repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
                `
              }}
            >
              {/* Frame with Image */}
              <div className="relative">
                <div 
                  className="w-64 h-80 bg-white flex items-center justify-center relative"
                  style={frameStyles[selectedFrame]}
                >
                  {uploadedImage ? (
                    <>
                      <img 
                        src={uploadedImage} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={removeImage}
                        className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 transition-colors z-10"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <div className="text-center p-8">
                      <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                      <p className="text-gray-600 mb-4">Sube tu foto para previsualizarla</p>
                      <label className="cursor-pointer inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                        Seleccionar Foto
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Frame Style Selector */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-2 flex gap-2">
                <button
                  onClick={() => setSelectedFrame('black')}
                  className={`w-10 h-10 rounded-full border-4 transition-all ${
                    selectedFrame === 'black' ? 'border-blue-500 scale-110' : 'border-gray-300'
                  }`}
                  style={{ background: '#1a1a1a' }}
                  title="Marco Negro"
                />
                <button
                  onClick={() => setSelectedFrame('white')}
                  className={`w-10 h-10 rounded-full border-4 transition-all ${
                    selectedFrame === 'white' ? 'border-blue-500 scale-110' : 'border-gray-300'
                  }`}
                  style={{ background: '#f5f5f5' }}
                  title="Marco Blanco"
                />
                <button
                  onClick={() => setSelectedFrame('wood')}
                  className={`w-10 h-10 rounded-full border-4 transition-all ${
                    selectedFrame === 'wood' ? 'border-blue-500 scale-110' : 'border-gray-300'
                  }`}
                  style={{ background: 'linear-gradient(to bottom, #a0826d, #8b7355)' }}
                  title="Marco Madera"
                />
              </div>
            </div>

            {uploadedImage && (
              <div className="mt-4 text-center">
                <label className="cursor-pointer inline-block px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition-colors">
                  Cambiar Foto
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}