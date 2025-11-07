import { useEffect } from 'react';
import prt1 from '../Public/Ventas/nuestroproceso/prt1.png';
import prt2 from '../Public/Ventas/nuestroproceso/prt2.png';
import form_Img from '../Public/foto1.jpeg';
import prt3 from '../Public/Ventas/nuestroproceso/prt3.png';
import prt4 from '../Public/Ventas/nuestroproceso/prt4.png';
import prt5 from '../Public/Ventas/nuestroproceso/prt5.png';
import hero from '../Public/Ventas/overley_Venta/descarga.png';
import { motion } from 'framer-motion';
import { FaUserCheck, FaBalanceScale, FaLightbulb, FaChartLine } from 'react-icons/fa';
import fondo from '../Public/fondo.png';
import CountUp from 'react-countup';

const Venta = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('in-view');
          } else {
            el.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.25 }
    );

    const els = document.querySelectorAll('.fade-in-up');
    els.forEach((e) => observer.observe(e));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sección principal - Hero */}
      <div className="relative min-h-[120vh] flex items-center justify-center">
        {/* Fondo Hero */}
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <img src={hero} alt="Background" className="w-full h-[90%] object-cover"/>
        </div>
        {/* Filtro oscuro */}
       <div className="absolute inset-0 bg-black bg-opacity-55"></div>
       


        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2
            className="mb-6 leading-tight w-[1401px] color-white "
            style={{
              maxWidth: '100%',
              fontFamily: '"Poltawski Nowy"',
              fontSize: '80px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '98.755%'
}}
          >
            Vende Tu Propiedad Es<br />
            Mas Que Una Transacción
          </h2>
          <p
            className="mb-12 max-w-2xl mx-auto"
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Montserrat',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
              letterSpacing: '1.92px'
            }}
          >
            Te ofrecemos un proceso integral,<br />
            diseñado para cada etapa de la venta. <br />
            sea eficiente, segura y confiable.
          </p>
        </div>
      </div>
      {/*Seccion porque vender con TORSSAM*/}
      <div className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl text-white mb-12" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
            ¿Porque vender tu casa con TORSSAM?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Confianza Profesional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white text-black p-8 rounded-lg shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <FaUserCheck className="text-4xl mb-4 mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Confianza Profesional</h3>
              <p className="text-gray-600">Te asesoramos con base en experiencia y datos reales.</p>
            </motion.div>

            {/* Acompañamiento Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white text-black p-8 rounded-lg shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <FaBalanceScale className="text-4xl mb-4 mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Acompañamiento Legal</h3>
              <p className="text-gray-600">Desde la documentación hasta la escritura.</p>
            </motion.div>

            {/* Estrategia Comercial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white text-black p-8 rounded-lg shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <FaLightbulb className="text-4xl mb-4 mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Estrategia Comercial</h3>
              <p className="text-gray-600">Sabemos cómo posicionar tu propiedad y atraer a los compradores correctos.</p>
            </motion.div>

            {/* Resultados Tangibles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white text-black p-8 rounded-lg shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <FaChartLine className="text-4xl mb-4 mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">Resultados Tangibles</h3>
              <p className="text-gray-600">Tu propiedad se vende, no se estanca.</p>
            </motion.div>
          </div>
        </div>
      </div>
      

     {/* Results Section */}
            <section className="py-16 bg-[#060606] text-white border-b border-gray-800">
              <div className="max-w-7xl mx-auto px-4 relative">
              <h2 className="text-3xl md:text-4xl font-light text-center mb-12 tracking-wide">
                Nuestros Resultados
              </h2>
              {/*FONDOS DECORATIVOS*/}
    <img 
      src={fondo} 
      alt="decor" 
      className="absolute -right-[500px] -top-[100px] rotate-[90deg] w-[600px] md:w-[800px] opacity-15"
    />
    <img
      src={fondo}
      alt="decor2"
      className="absolute right-[1000px] top-[800px] rotate-[90deg] w-[600px] md:w-[800px] opacity-15"
    />
    <img
      src={fondo}
      alt="decor2"
      className="absolute -right-[600px] top-[1300px] rotate-[310deg] w-[600px] md:w-[800px] opacity-15"
    />
    
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stat 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center bg-black/20 backdrop-blur-sm p-6 rounded-lg"
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-light mb-4 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="mr-1">+</span>
                    <CountUp
                      end={2}
                      duration={2}
                      separator=","
                      useEasing={true}
                      enableScrollSpy={true}
                      scrollSpyDelay={200}
                    />
                    <span className="ml-2 text-3xl md:text-4xl">mil</span>
                  </motion.div>
                  <p className="text-gray-300 text-lg font-light tracking-wide">Unidades Vendidas</p>
                </motion.div>
                
                {/* Stat 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center bg-black/20 backdrop-blur-sm p-6 rounded-lg"
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-light mb-4 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <span className="mr-1">+</span>
                    <CountUp
                      end={20}
                      duration={2}
                      separator=","
                      useEasing={true}
                      enableScrollSpy={true}
                      scrollSpyDelay={200}
                    />
                    <span className="ml-2 text-3xl md:text-4xl">mil</span>
                  </motion.div>
                  <p className="text-gray-300 text-lg font-light tracking-wide">Clientes Atendidos</p>
                </motion.div>
                
                {/* Stat 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center bg-black/20 backdrop-blur-sm p-6 rounded-lg"
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-light mb-4 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <span className="mr-1">+</span>
                    <CountUp
                      end={3}
                      duration={2}
                      separator=","
                      useEasing={true}
                      enableScrollSpy={true}
                      scrollSpyDelay={200}
                    />
                    <span className="ml-2 text-3xl md:text-4xl">mil</span>
                  </motion.div>
                  <p className="text-gray-300 text-lg font-light tracking-wide">Unidades Rentadas</p>
                </motion.div>
              </div>
              
              <div className="border-t border-gray-800 mt-12 pt-8"></div>
            </div>
            
          </section>
      {/* Sección Conoce Nuestro Proceso */}
      <div className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-light text-white text-center mb-20"
          >
            Conoce Nuestro<br />
            Proceso de venta paso a paso
          </motion.h2> 

          {/* Pasos del proceso */}
          <div className="relative">
            {/* Línea vertical conectora (centrada) */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              className="absolute left-1/2 top-6 bottom-6 w-1 bg-white/30 -translate-x-1/2"
            ></motion.div>
            <style>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px) scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }

              .fade-in-up {
                opacity: 0;
                transform: translateY(20px) scale(0.95);
              }

              .fade-in-up.in-view {
                animation: fadeInUp 0.8s ease-out both;
              }
            `}</style>


            {/* Paso 1 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 rounded shadow">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                1
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="flex justify-center sm:justify-end">
                  <img src={prt1} alt="Auditoría Documental" className="w-[400px] h-[300px] object-cover rounded-[10px] pr-10 hidden sm:block" />
                </div>
                <div className="text-white p-6 bg-black/30 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
                    Auditoría Documental y Legal
                  </h3>
                  <p className="text-gray-100 text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Revisamos que toda la documentación esté en regla para una transacción sin contratiempos. Nos encargamos de cada detalle legal para proteger tu patrimonio.
                  </p>
                </div>
              </div>
            </div>


            {/* Paso 2 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 rounded shadow">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                2
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="order-2 sm:order-1 text-white p-6 bg-black/30 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
                    Análisis de Mercado y Valuación Profesional
                  </h3>
                  <p className="text-gray-100 text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Analizamos el mercado para definir el mejor precio de venta. Nuestro equipo te orienta para maximizar el valor de tu propiedad.
                  </p>
                </div>
                <div className="order-1 sm:order-2 flex justify-center sm:justify-start">
                  <img src={prt2} alt="Análisis Inicial" className="w-[400px] h-[300px] object-cover rounded-[10px] pl-10 hidden sm:block" />
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 rounded shadow">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                3
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="flex justify-center sm:justify-end">
                  <img src={prt3}  alt="Estrategia de Comercialización" className="w-[400px] h-[300px] object-cover rounded-[10px] pr-10 hidden sm:block" />
                </div>
                <div className="text-white p-6 bg-black/30 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
                    Estrategia de Comercialización y Marketing Digital
                  </h3>
                  <p className="text-gray-100 text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Creamos un plan de marketing para que tu propiedad llegue a los compradores correctos: publicación en portales, redes sociales y nuestra base de datos.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 rounded shadow">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                4
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="order-2 sm:order-1 text-white p-6 bg-black/30 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
                    Gestión de Visitas y Filtro de Compradores
                  </h3>
                  <p className="text-gray-100 text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Coordinamos las visitas y filtramos a los compradores potenciales para asegurar que solo los más serios conozcan tu propiedad.
                  </p>
                </div>
                <div className="order-1 sm:order-2 flex justify-center sm:justify-start">
                  <img src={prt4}alt="Gestión de Interesados" className="w-[400px] h-[300px] object-cover rounded-[10px] pl-10 hidden sm:block" />
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 rounded shadow">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                5
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="flex justify-center sm:justify-end">
                  <img src={prt5}alt="Negociación y Ofertas" className="w-[400px] h-[300px] object-cover rounded-[10px] pr-10 hidden sm:block" />
                </div>
                <div className="text-white p-6 bg-black/30 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
                    Negociación y Cierre de la Venta
                  </h3>
                  <p className="text-gray-100 text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Negociamos las mejores condiciones para ti y te acompañamos en la firma del contrato de compraventa.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 6 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 rounded shadow">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                6
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="order-2 sm:order-1 text-white p-6 bg-black/30 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
                    Firma de Escrituras y Entrega de la Propiedad
                  </h3>
                  <p className="text-gray-100 text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Te asistimos en el proceso notarial hasta la entrega de llaves, asegurando que todo se realice de forma transparente y segura.
                  </p>
                </div>
                <div className="order-1 sm:order-2 flex justify-center sm:justify-start">
                  <img src={prt1}  alt="Firma y Cierre" className="w-[400px] h-[300px] object-cover rounded-[10px] pl-10 hidden sm:block" />
                </div>
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
                     ¿Listo para vender tu propiedad sin preocupaciones?
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
    </div>
  )
}

export default Venta
