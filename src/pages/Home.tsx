
import veracruz from '../Public/Inicio/Estados/VERACRUZ.png';
import coactepch from '../Public/Inicio/Estados/COATEPEC.png';
import hero from '../Public/Inicio/Videos/HeroPrincipal.mp4';
import fondo from '../Public/fondo.png';
import valor from '../Public/Inicio/Img_valor/image.png'
import form_Img from '../Public/foto1.jpeg';
import { useRef, useEffect } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';




const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Efecto para controlar la velocidad del video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      
     <section
    className="relative min-h-screen bg-black text-white flex items-center"
      >
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
         >
           <source src={hero} type="video/mp4" />
           Your browser does not support the video tag.
         </video>
       </div>
      
        <div className="relative max-w-7xl mx-auto px-4 text-center z-20">
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
            Guiando tu camino en<br />
            bienes raíces desde 1976
          </h1>
          <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Somos el grupo inmobiliario más confiable<br />
            y profesional de Querétaro
          </p>
          
          {/* Search Form */}
          <div className="max-w-2xl mx-auto relative z-30">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <select className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                    <option value="" className="bg-gray-900 text-white">Tipo</option>
                    <option value="casa" className="bg-gray-900 text-white">Casa</option>
                    <option value="departamento" className="bg-gray-900 text-white">Departamento</option>
                    <option value="terreno" className="bg-gray-900 text-white">Terreno</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Ubicación"
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                    <option value="" className="bg-gray-900 text-white">Precio</option>
                    <option value="0-1000000" className="bg-gray-900 text-white">$0 - $1,000,000</option>
                    <option value="1000000-3000000" className="bg-gray-900 text-white">$1,000,000 - $3,000,000</option>
                    <option value="3000000+" className="bg-gray-900 text-white">$3,000,000+</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                BUSCAR
              </button>
            </div>
          </div>
        </div>
        </section>

      {/* Results Section */}
      <div className="relative z-0">
        <img 
          src={fondo} 
          alt="decor" 
          className="absolute -right-[500px] top-[100px] rotate-[90deg] w-[600px] md:w-[800px] opacity-15 z-0"
        />
        <img
          src={fondo}
          alt="decor2"
          className="absolute right-[1000px] top-[1800px] rotate-[90deg] w-[600px] md:w-[800px] opacity-15 z-0"
        />
        <img
          src={fondo}
          alt="decor2"
          className="absolute -right-[600px] top-[2100px] rotate-[310deg] w-[600px] md:w-[800px] opacity-15 z-0"
        />

      <section className="py-16 bg-black text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide">
            Nuestros Resultados
          </h2>
          
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }: { isVisible: boolean }) => (
                  <div>
                    <p className="text-5xl md:text-6xl font-light mb-2">
                      +{isVisible ? <CountUp end={2} duration={2.5} separator="," /> : '0'}<span className="ml-2">mil</span>
                    </p>
                    <p className="text-gray-400 text-lg">Unidades Vendidas</p>
                  </div>
                )}
              </VisibilitySensor>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }: { isVisible: boolean }) => (
                  <div>
                    <p className="text-5xl md:text-6xl font-light mb-2">
                      +{isVisible ? <CountUp end={20} duration={2.5} separator="," /> : '0'}<span className="ml-2">mil</span>
                    </p>
                    <p className="text-gray-400 text-lg">Clientes Atendidos</p>
                  </div>
                )}
              </VisibilitySensor>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }: { isVisible: boolean }) => (
                  <div>
                    <p className="text-5xl md:text-6xl font-light mb-2">
                      +{isVisible ? <CountUp end={3} duration={2.5} separator="," /> : '0'}<span className="ml-2">mil</span>
                    </p>
                    <p className="text-gray-400 text-lg">Unidades Rentadas</p>
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8"></div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-black text-white"
       >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-4 tracking-wide">
            Propiedades Destacadas
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Explora la exclusiva gama de propiedades que presentamos con orgullo
          </p>
          
          <div className="property-grid">
            {/* FILA 1 - 3 propiedades iguales con alturas diferentes */}
            {/* Property 1 - Más alta */}
            <div className="property-container col-span-2 row-span-1 bg-gray-900 rounded-lg overflow-hidden h-64">
              <div className="h-full bg-gray-700 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xl font-light">$18,000,000</p>
                      <p className="text-sm text-gray-300">VENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 2 - Altura media */}
            <div className="property-container col-span-2 row-span-1 bg-gray-900 rounded-lg overflow-hidden h-48 mt-8">
              <div className="h-full bg-gray-700 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-lg font-light">$12,500,000</p>
                      <p className="text-xs text-gray-300">VENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 3 - Más baja */}
            <div className="property-container col-span-2 row-span-1 bg-gray-900 rounded-lg overflow-hidden h-56 mt-4">
              <div className="h-full bg-gray-700 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-lg font-light">$28,000,000</p>
                      <p className="text-xs text-gray-300">VENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FILA 2 - 1 ancha + 1 pequeña con diferentes alturas */}
            {/* Property 4 - Ancha y alta */}
            <div className="property-container col-span-4 row-span-1 bg-gray-900 rounded-lg overflow-hidden h-52 mt-12">
              <div className="h-full bg-gray-700 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xl font-light">$8,500,000</p>
                      <p className="text-sm text-gray-300">RENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 5 - Más pequeña y más arriba */}
            <div className="col-span-2 row-span-1 bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 h-44 mt-4">
              <div className="h-full bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-lg font-light">$35,000,000</p>
                      <p className="text-xs text-gray-300">VENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FILA 3 - 1 pequeña + 1 más ancha con diferentes alturas */}
            {/* Property 6 - Pequeña y más baja */}
            <div className="col-span-2 row-span-1 bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 h-40 mt-16">
              <div className="h-full bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-base font-light">$15,000,000</p>
                      <p className="text-xs text-gray-300">VENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property 7 - Más ancha y alta */}
            <div className="col-span-4 row-span-1 bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 h-60 mt-8">
              <div className="h-full bg-gray-700 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xl font-light">$42,000,000</p>
                      <p className="text-sm text-gray-300">VENTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              VER TODAS LAS PROPIEDADES
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
        <section className="ciudades-principales bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Ciudades Principales</h2>
            <p className="text-center mb-8">Búsqueda por ubicación</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-rows-2 gap-8 mb-12">
              {/* Xalapa ocupa la fila 1 y 2, es más alta */}
              <div className="relative rounded-[2px] overflow-hidden shadow-2xl row-span-2 col-span-1 h-[520px] group">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <img src="" alt="Xalapa" className="w-full h-full object-cover" onError={e => {e.currentTarget.style.display='none';}} />
                </div>
                <span className="absolute inset-x-0 bottom-10 flex justify-center">
                  <span className="bg-black bg-opacity-70 text-white px-8 py-3 rounded-[2px] text-3xl font-bold text-center transition-all duration-500 opacity-80 group-hover:scale-105 group-hover:opacity-100 animate-fade-in">XALAPA</span>
                </span>
              </div>
              {/* Resto de ciudades, más grandes */}
              <div className="relative rounded-[2px] overflow-hidden shadow-2xl h-[250px] group">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <img src={coactepch} alt="Coatepec" className="w-full h-full object-cover" onError={e => {e.currentTarget.style.display='none';}} />
                </div>
                <span className="absolute inset-x-0 bottom-8 flex justify-center">
                  <span className="bg-black bg-opacity-70 text-white px-6 py-2 rounded-[2px] text-2xl font-bold text-center transition-all duration-500 opacity-80 group-hover:scale-105 group-hover:opacity-100 animate-fade-in">COATEPEC</span>
                </span>
              </div>
              <div className="relative rounded-[2px] overflow-hidden shadow-2xl h-[250px] group">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <img src="/images/banderilla.jpg" alt="Banderilla" className="w-full h-full object-cover" onError={e => {e.currentTarget.style.display='none';}} />
                </div>
                <span className="absolute inset-x-0 bottom-8 flex justify-center">
                  <span className="bg-black bg-opacity-70 text-white px-6 py-2 rounded-[2px] text-2xl font-bold text-center transition-all duration-500 opacity-80 group-hover:scale-105 group-hover:opacity-100 animate-fade-in">BANDERILLA</span>
                </span>
              </div>
              <div className="relative rounded-[2px] overflow-hidden shadow-2xl h-[250px] group">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <img src={veracruz} alt="Veracruz" className="w-full h-full object-cover" onError={e => {e.currentTarget.style.display='none';}} />
                </div>
                <span className="absolute inset-x-0 bottom-8 flex justify-center">
                  <span className="bg-black bg-opacity-70 text-white px-6 py-2 rounded-[2px] text-2xl font-bold text-center transition-all duration-500 opacity-80 group-hover:scale-105 group-hover:opacity-100 animate-fade-in">VERACRUZ</span>
                </span>
              </div>
              <div className="relative rounded-[2px] overflow-hidden shadow-2xl h-[250px] group">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <img src="/images/emiliano-zapata.jpg" alt="Emiliano Zapata" className="w-full h-full object-cover" onError={e => {e.currentTarget.style.display='none';}} />
                </div>
                <span className="absolute inset-x-0 bottom-8 flex justify-center">
                  <span className="bg-black bg-opacity-70 text-white px-6 py-2 rounded-[2px] text-2xl font-bold text-center transition-all duration-500 opacity-80 group-hover:scale-105 group-hover:opacity-100 animate-fade-in">EMILIANO ZAPATA</span>
                </span>
              </div>
            </div>
          </div>
        </section>
</div>
        {/* Sección Agenda una Asesoría */}
        <div className="bg-black py-20">
          
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-light text-white mb-4">Agenda una Asesoría</h2>
            <p className="text-gray-400 text-lg mb-12">
              En esta sesión gratuita, resolveremos tus dudas iniciales, hablaremos<br />
              sobre tus objetivos inmobiliarios y cómo podemos alcanzarlos.
            </p>

            <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 grid md:grid-cols-2 gap-8">
              {/* Calendario */}
              <div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">agosto de 2025</h3>
                    <div className="flex space-x-2">
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Días de la semana */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['do.', 'lu.', 'ma.', 'mi.', 'ju.', 'vi.', 'sá.'].map((day) => (
                      <div key={day} className="text-xs text-gray-500 text-center py-2">{day}</div>
                    ))}
                  </div>
                  
                  {/* Días del mes */}
                  <div className="grid grid-cols-7 gap-1">
                    {[27, 28, 29, 30, 31].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-400 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                    {[1, 2].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-900 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                    {[3, 4, 5, 6, 7, 8, 9].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-900 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                    {[10, 11, 12, 13, 14, 15, 16].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-900 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                    {[17, 18, 19, 20, 21, 22].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-900 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                    <button className="p-2 text-sm text-white bg-red-500 rounded font-medium">23</button>
                    {[24, 25, 26, 27, 28, 29, 30].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-900 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                    <button className="p-2 text-sm text-gray-900 hover:bg-gray-200 rounded">31</button>
                    {[1, 2, 3, 4, 5, 6].map((day) => (
                      <button key={day} className="p-2 text-sm text-gray-400 hover:bg-gray-200 rounded">{day}</button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Horarios */}
              <div>
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">Duración de la llamada: 30 min</div>
                  <div className="text-sm text-gray-900 font-medium mb-4">
                    Selecciona un horario:<br />
                    Sábado 23 agosto
                  </div>
                </div>
                
                <div className="space-y-3">
                  {['10:00 AM', '11:00 AM', '12:00 AM', '1:00 PM'].map((time) => (
                    <button 
                      key={time}
                      className="w-full p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-left text-gray-900 transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Formulario */}
             <div className="bg-[#060606] py-20">
               <div className="max-w-6xl mx-auto px-4">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                   {/* Contenido - Izquierda */}
                   <div className="text-white">
                     <p className="text-sm mb-4 tracking-wide text-gray-300" style={{fontFamily: "Montserrat, sans-serif"}}>
                       TORSSA GRUPO INMOBILIARIO
                     </p>
                     <h2 className="text-5xl font-bold mb-8 leading-tight" style={{fontFamily: '"Poltawski Nowy", serif'}}>
                       ¿Listo para rentar tu propiedad sin preocupaciones?
                     </h2>
                     <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                       MANDANOS UN MENSAJE
                     </button>
                   </div>
       
                   {/* Imagen - Derecha */}
                   <div className="flex justify-center">
                     <img 
                       src={form_Img} 
                       alt="City buildings" 
                       className="w-full max-w-lg h-auto object-cover rounded-lg"
                     />
                   </div>
                 </div>
               </div>
             </div>
        {/* Sección: Conoce el valor de tu propiedad */}
      
      <section className="py-16 bg-black flex items-center">
        <img 
          src={fondo} 
          alt="decor" 
          className="absolute -right-[650px] h-[900px] rotate-[20deg] opacity-15"
        />
        <img
          src={fondo}
          alt="decor2"
          className="absolute h-[500px] w-[800px] left-[-600px] opacity-15 rotate-[210deg]"
        />
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Imagen izquierda */}
            <div className="bg-white flex items-center justify-center">
              <img
                src={valor}
                alt="Conoce el valor de tu propiedad"
                className="w-full h-auto object-cover "
                onError={(e: any) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            {/* Panel derecho */}
            <div className="p-8 md:p-12 bg-gray-900 text-white flex flex-col justify-center">
              <div className="text-sm text-gray-300 mb-2 uppercase tracking-widest">TORSSAM GRUPO INMOBILIARIO</div>
              <h2 className="text-2xl md:text-4xl font-semibold mb-4">Conoce El Valor De Tu Propiedad</h2>
              <p className="text-gray-400 mb-6">Obtén un avalúo profesional y gratuito. Nuestro equipo te dará una evaluación real del mercado para que tomes la mejor decisión.</p>
              {/*añadir la direccion*/}
              <a
                href="/avaluo"
                target=""
                className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
                >
                INICIAR AVALÚO
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

   
    
  )
}

export default Home