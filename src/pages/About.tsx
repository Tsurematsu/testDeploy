
import hero from '../Public/Nosotros/video/Hero.mp4';
import { useRef } from 'react';
import fondo from '../Public/Inicio/Estados/VERACRUZ.png';
const About = () => {
   const videoRef = useRef(null)
  return (
    <div className="min-h-screen bg-black text-white flex flex-col pt-[10px]">
      {/* Encabezado principal */}
      
        <section className="relative min-h-screen bg-black text-white flex items-center">
          <div className="absolute top-0 left-0 w-full h-[95%] z-0">
            {/* Capa de degradado sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-black/20 z-10"></div>
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
              autoPlay
              loop
              muted
              playsInline
              onPlay={(e) => {
                const video = e.target as HTMLVideoElement;
                video.playbackRate = 0.75; // Reproducir al 75% de la velocidad normal
              }}
            >
              <source src={hero} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 text-center z-20">
            <h1 
              className="text-6xl md:text-7xl font-light text-center mb-8" 
              style={{ fontFamily: '"Poltawski Nowy", serif' }}
            >
              Sobre Nosotros
            </h1>
            <p 
              className="text-2xl md:text-4xl text-center text-white font-medium tracking-wide"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Tradición inmobiliaria con <span className="font-bold">visión de futuro</span>
            </p>
          </div>
        </section>

      {/* Sección principal con bloques */}
      <div className="max-w-5xl w-full mx-auto  flex flex-col gap-16 mb-20">
        {/* Bloque TORSSA: imagen izquierda, texto derecha */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-64 h-48 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center">
            {/* Aquí va la imagen de TORSSA */}
            <span className="text-gray-400">Imagen</span>
          </div>
          <div className="md:pl-8 w-full">
            <h2 className="text-3xl font-light mb-2">TORSSA</h2>
            <p className="text-gray-200 text-base leading-relaxed">
              Somos una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua.
            </p>
          </div>
        </div>
        {/* Bloque Nuestra Historia: texto izquierda, imagen derecha */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:pr-8 w-full">
            <h2 className="text-3xl font-light mb-2">Nuestra Historia</h2>
            <p className="text-gray-200 text-base leading-relaxed">
              Somos una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora continua.
            </p>
          </div>
          <div className="w-64 h-48 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center">
            {/* Aquí va la imagen de Historia */}
            <span className="text-gray-400">Imagen</span>
          </div>
        </div>
      {/* Sección Misión y Visión */}
      <div className="relative min-h-screen  min-w-full flex items-center justify-center my-20">
        {/* Imagen de fondo ocupando toda la ventana */}
        <img
          src={fondo}
          alt="Misión y Visión background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          aria-hidden="true"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 text-center h-full flex flex-col items-center justify-center">
          {/* Títulos centrados */}
          <div className="flex justify-center items-center mb-16">
        <div className="flex items-center gap-8">
          <div>
            <h2 className="text-2xl font-light mb-2 tracking-wide">NUESTRA</h2>
            <h1 className="text-5xl font-light tracking-wider">MISIÓN</h1>
          </div>
          <div className="h-16 w-px bg-white opacity-50"></div>
          <div>
            <h2 className="text-2xl font-light mb-2 tracking-wide">NUESTRA</h2>
            <h1 className="text-5xl font-light tracking-wider">VISIÓN</h1>
          </div>
        </div>
          </div>

          {/* Texto centrado único */}
          <div className="max-w-4xl mx-auto">
        <p className="text-gray-200 text-lg leading-relaxed">
          Somos una empresa innovadora, líder, construida sobre cuatro ejes rectores: 
          honestidad, servicio personalizado, calidad y mejora continua. Ser una empresa 
          innovadora, líder, construida sobre cuatro ejes rectores: honestidad, servicio 
          personalizado, calidad y mejora continua. Ser una empresa innovadora, líder, construida 
          sobre cuatro ejes rectores: honestidad, servicio personalizado, calidad y mejora 
          continua.
        </p>
          </div>
        </div>
      </div>

      {/* Sección Conoce A Nuestro Equipo hacer cuando sea necesario */}
              

      {/* Sección Ciudades Principales */}
      <div className="bg-black py-20 pb-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Título de la sección */}
          <h2 className="text-4xl font-light text-white mb-4">Ciudades Principales</h2>
          <p className="text-gray-400 text-lg mb-16">
            Nuestras Áreas de Cobertura
          </p>

          {/* Grid de ciudades */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Xalapa - Imagen grande izquierda */}
            <div className="lg:row-span-2 relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="h-96 lg:h-full bg-cover bg-center" style={{backgroundImage: "url('/images/city-xalapa.jpg')"}}>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-light text-white">XALAPA</h3>
                </div>
              </div>
            </div>

            {/* Coatepec - Superior derecha */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/images/city-coatepec.jpg')"}}>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-light text-white">COATEPEC</h3>
                </div>
              </div>
            </div>

            {/* Banderilla - Superior derecha */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/images/city-banderilla.jpg')"}}>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-light text-white">BANDERILLA</h3>
                </div>
              </div>
            </div>

            {/* Veracruz - Inferior izquierda */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/images/city-veracruz.jpg')"}}>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-light text-white">VERACRUZ</h3>
                </div>
              </div>
            </div>

            {/* Emiliano Zapata - Inferior derecha */}
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/images/city-emiliano-zapata.jpg')"}}>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-light text-white">EMILIANO<br />ZAPATA</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default About