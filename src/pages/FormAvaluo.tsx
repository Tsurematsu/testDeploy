import React, { useState } from 'react';
import { motion } from 'framer-motion';
import fondo from '../Public/fondo.png';

interface FormData {
  // Contact Information
  contactName: string;
  email: string;
  phone: string;
  
  // Property Location
  propertyAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Property Characteristics
  propertyType: string;
  buildingAge: string;
  totalArea: string;
  builtArea: string;
  bedrooms: string;
  bathrooms: string;
  parkingSpaces: string;
  floors: string;
  
  // Amenities
  amenities: string[];
  
  // Additional Information
  additionalNotes: string;
}

const FormAvaluo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    contactName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    neighborhood: '',
    city: '',
    state: '',
    zipCode: '',
    propertyType: '',
    buildingAge: '',
    totalArea: '',
    builtArea: '',
    bedrooms: '',
    bathrooms: '',
    parkingSpaces: '',
    floors: '',
    amenities: [],
    additionalNotes: ''
  });

  const totalSteps = 4;

  const amenitiesList = [
    'Piscina', 'Gimnasio', 'Jardín', 'Terraza', 'Balcón', 'Chimenea',
    'Aire Acondicionado', 'Calefacción', 'Vigilancia', 'Portería',
    'Ascensor', 'Garage Cubierto', 'Cuarto de Servicio', 'Depósito',
    'Cocina Integral', 'Walk-in Closet', 'Estudio', 'Sala de TV',
    'Zona BBQ', 'Cancha Deportiva', 'Salón Social', 'Zona Infantil'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAmenityChange = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const nextStep = () => {
    // Basic validation before advancing to next step
    if (currentStep === 1) {
      if (!formData.contactName || !formData.email || !formData.phone) {
        alert('Por favor completa todos los campos obligatorios del paso 1');
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.propertyAddress || !formData.city) {
        alert('Por favor completa al menos la dirección y ciudad');
        return;
      }
    } else if (currentStep === 3) {
      if (!formData.propertyType || !formData.totalArea || !formData.builtArea) {
        alert('Por favor completa los campos obligatorios: Tipo de propiedad, Área total y Área construida');
        return;
      }
    }
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Only allow submission on the final step
    if (currentStep !== totalSteps) {
      console.warn('Submit prevented on step', currentStep);
      return false;
    }
    
    // Final validation
    if (!formData.contactName || !formData.email || !formData.phone) {
      alert('Por favor verifica que todos los campos obligatorios estén completos');
      setCurrentStep(1);
      return false;
    }
    
    if (!formData.propertyAddress || !formData.city) {
      alert('Por favor verifica la información de ubicación');
      setCurrentStep(2);
      return false;
    }
    
    if (!formData.propertyType || !formData.totalArea || !formData.builtArea) {
      alert('Por favor verifica las características del inmueble');
      setCurrentStep(3);
      return false;
    }
    
    console.log('Form Data:', formData);
    // Here you would typically send the data to your backend
    alert('¡Formulario enviado exitosamente! Nos pondremos en contacto contigo pronto.');
    return true;
  };

  const handleNextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    nextStep();
  };

  const handlePrevStep = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    prevStep();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentStep < totalSteps) {
      e.preventDefault();
      e.stopPropagation();
      nextStep();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6" style={{ fontFamily: '"Poltawski Nowy", serif' }}>Datos del Contacto</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Ingresa tu nombre completo"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Teléfono de Contacto *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                placeholder="+57 300 000 0000"
                required
              />
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6" style={{ fontFamily: '"Poltawski Nowy", serif' }}>Ubicación del Inmueble</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Dirección Completa *
              </label>
              <input
                type="text"
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                placeholder="Calle 123 #45-67"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Barrio/Sector
                </label>
                <input
                  type="text"
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Nombre del barrio"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Ciudad *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Ciudad"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Departamento/Estado
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Departamento"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Código Postal
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="110111"
                />
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Ubicación en el Mapa
              </label>
              <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600">
                <div className="text-center text-gray-400">
                  <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="mt-2 text-gray-300">Mapa Interactivo</p>
                  <p className="text-sm text-gray-400">La ubicación se mostrará automáticamente</p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6" style={{ fontFamily: '"Poltawski Nowy", serif' }}>Características del Inmueble</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de Propiedad *
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white"
                  required
                >
                  <option value="">Selecciona el tipo</option>
                  <option value="casa">Casa</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="local">Local Comercial</option>
                  <option value="oficina">Oficina</option>
                  <option value="lote">Lote</option>
                  <option value="finca">Finca</option>
                  <option value="bodega">Bodega</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Antigüedad del Inmueble
                </label>
                <select
                  name="buildingAge"
                  value={formData.buildingAge}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white"
                >
                  <option value="">Selecciona la antigüedad</option>
                  <option value="nuevo">Nuevo (0-2 años)</option>
                  <option value="reciente">Reciente (3-5 años)</option>
                  <option value="moderno">Moderno (6-10 años)</option>
                  <option value="establecido">Establecido (11-20 años)</option>
                  <option value="vintage">Vintage (21-30 años)</option>
                  <option value="clasico">Clásico (más de 30 años)</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Área Total (m²) *
                </label>
                <input
                  type="number"
                  name="totalArea"
                  value={formData.totalArea}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="150"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Área Construida (m²) *
                </label>
                <input
                  type="number"
                  name="builtArea"
                  value={formData.builtArea}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="120"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Habitaciones
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="3"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Baños
                </label>
                <input
                  type="number"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="2"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Parqueaderos
                </label>
                <input
                  type="number"
                  name="parkingSpaces"
                  value={formData.parkingSpaces}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="1"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pisos
                </label>
                <input
                  type="number"
                  name="floors"
                  value={formData.floors}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                  placeholder="2"
                  min="1"
                />
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6" style={{ fontFamily: '"Poltawski Nowy", serif' }}>Amenidades</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {amenitiesList.map((amenity) => (
                <label
                  key={amenity}
                  className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    formData.amenities.includes(amenity)
                      ? 'border-white bg-gray-700'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                    className="mr-2 h-4 w-4 text-white focus:ring-white border-gray-600 rounded"
                  />
                  <span className="text-sm font-medium text-white">{amenity}</span>
                </label>
              ))}
            </div>
            
            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Información Adicional
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors bg-gray-800 text-white placeholder-gray-400"
                placeholder="Agrega cualquier información adicional que consideres relevante para el avalúo..."
              />
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 relative overflow-hidden">
      {/* Imágenes decorativas de fondo */}
      <img 
        src={fondo} 
        alt="decor" 
        className="absolute -right-[500px] -top-[100px] rotate-[90deg] w-[600px] md:w-[800px] opacity-10 pointer-events-none"
      />
      <img
        src={fondo}
        alt="decor2"
        className="absolute right-[1000px] top-[800px] rotate-[90deg] w-[600px] md:w-[800px] opacity-10 pointer-events-none"
      />
      <img
        src={fondo}
        alt="decor3"
        className="absolute -right-[600px] top-[1300px] rotate-[310deg] w-[600px] md:w-[800px] opacity-10 pointer-events-none"
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
            Conoce el valor real de tu propiedad
          </h1>
          <p className="text-xl text-gray-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Llena nuestro formulario especializado
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step <= currentStep
                      ? 'bg-white text-black'
                      : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-24 h-1 mx-2 ${
                      step < currentStep ? 'bg-white' : 'bg-gray-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-between text-sm text-gray-300">
            <span>Contacto</span>
            <span>Ubicación</span>
            <span>Características</span>
            <span>Amenidades</span>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700"
        >
          <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-300 mb-2">
                Paso {currentStep} de {totalSteps}
              </h2>
              {renderStepContent()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Anterior
              </button>
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Enviar Solicitud
                </button>
              )}
            </div>
          </form>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-gray-600"
        >
          <p className="text-sm">
            🔒 Tu información está segura y será utilizada únicamente para generar tu avalúo
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FormAvaluo;
