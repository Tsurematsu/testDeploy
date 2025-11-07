import { useEffect, useState, useRef } from 'react';
import prt1 from '../Public/Renta/nuestroProceso/1.png';
import { FaBalanceScale, FaHome, FaIdCard, FaSmile } from 'react-icons/fa';
import prt2 from '../Public/Renta/nuestroProceso/2.png';
import prt3 from '../Public/Renta/nuestroProceso/3.png';
import prt4 from '../Public/Renta/nuestroProceso/4.png';
import prt5 from '../Public/Renta/nuestroProceso/5.png';
import prt6 from '../Public/Renta/nuestroProceso/6.png';
import fondo from '../Public/fondo.png';
import hero from '../Public/image 6.png';
import form_Img from '../Public/foto1.jpeg';

const useCounterAnimation = (end: number, duration: number = 2000, delay: number = 0) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setTimeout(() => {
            const startTime = Date.now();
            const timer = setInterval(() => {
              const timePassed = Date.now() - startTime;
              if (timePassed >= duration) {
                setCount(end);
                clearInterval(timer);
              } else {
                const progress = timePassed / duration;
                const easeOutQuad = 1 - (1 - progress) * (1 - progress);
                setCount(Math.floor(easeOutQuad * end));
              }
            }, 16);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, delay, hasAnimated]);

  return { count, countRef };
};

interface CounterStatProps {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const CounterStat = ({ end, suffix = "", label, delay = 0 }: CounterStatProps) => {
  const { count, countRef } = useCounterAnimation(end, 2000, delay);
  
  return (
    <div className="text-center fade-in-up" ref={countRef} style={{ animationDelay: `${delay}ms` }}>
      <p className="text-5xl md:text-6xl font-light mb-2">+{count}{suffix}</p>
      <p className="text-gray-400 text-lg">{label}</p>
    </div>
  );
};

const Renta = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('in-view');
          } else {
            // remove to allow replay when it re-enters
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
  <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Sección principal - Hero */}
        <div className="relative min-h-[90vh] flex items-center justify-center">
       <div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-60">
                <img src={hero} alt="Background" className="w-full h-[100%] object-cover "/>
              </div>
        {/* Fondo con overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 
            className="mb-6 leading-tight"
            style={{
              width: '1401px',
              maxWidth: '100%',
              color: '#fff',
              textAlign: 'center',
              fontFamily: '"Poltawski Nowy"',
              fontSize: '80px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '98.755%'
            }}
          >
            Renta Tu Propiedad De<br />
            Forma Segura, Rápida y<br />
            Sin Estrés

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
            Te acompañamos y asesoramos en todas<br />
            las etapas del proceso.
          </p>
        </div>
      </div>
      {/* Sección Por Qué Alquilar con TORSSAM */}
      <div className="bg-black py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl mb-12" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
            ¿Por Qué Alquilar con TORSSAM?
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 text-left">
            <div className="flex items-start space-x-4 fade-in-up">
              <FaBalanceScale className="text-4xl text-white" />
              <div>
                <p className="text-xl">Proceso 100% profesional y respaldado legalmente.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 fade-in-up" style={{ animationDelay: '200ms' }}>
              <FaHome className="text-4xl text-white" />
              <div>
                <p className="text-xl">Difusión efectiva y rápida ocupación.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 fade-in-up" style={{ animationDelay: '400ms' }}>
              <FaIdCard className="text-4xl text-white" />
              <div>
                <p className="text-xl">Filtrado estricto de inquilinos.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 fade-in-up" style={{ animationDelay: '600ms' }}>
              <FaSmile className="text-4xl text-white" />
              <div>
                <p className="text-xl">Tranquilidad total: tú cobras, nosotros gestionamos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Results + Proceso wrapper (single decorative image shared) */}
      <div className="relative">
        {/* decorative background image positioned top-right and visible across both sections */}

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
            <CounterStat
              end={2}
              suffix=" mil"
              label="Unidades Vendidas"
              delay={0}
            />
            
            {/* Stat 2 */}
            <CounterStat
              end={20}
              suffix=" mil"
              label="Clientes Atendidos"
              delay={200}
            />
            
            {/* Stat 3 */}
            <CounterStat
              end={3}
              suffix=" mil"
              label="Unidades Rentadas"
              delay={400}
            />
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8"></div>
        </div>
        
      </section>

        {/* Sección Conoce Nuestro Proceso */}
        <div className="bg-[#000000] py-32">
        <div className="max-w-6xl mx-auto px-6">
          {/* Título */}
          <h2 className="text-6xl font-light text-white text-center mb-24" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
            Conoce Nuestro<br />
            <span className="text-gray-300">Proceso de renta paso a paso</span>
          </h2>

          {/* Pasos del proceso */}
          <div className="relative">
            {/* Línea vertical conectora (centrada) */}
            <div className="absolute left-1/2 top-6 bottom-6 w-0.5 bg-white opacity-50 -translate-x-1/2"></div>
{/*animación de los pasos*/}
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

  /* Start hidden; when .in-view is added the animation runs */
  .fade-in-up {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .fade-in-up.in-view {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
    transform: translateY(20px) scale(0.95);
  }

  .fade-in-up.in-view {
    animation: fadeInUp 0.8s ease-out both;
  }
`}</style>



            {/* Paso 1 */}
            <div className="relative mb-24 fade-in-up mt-16 p-6">
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold text-2xl z-10 shadow-lg">
                1
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
                <div className="flex justify-center sm:justify-end">
                  <img src={prt1} alt="Auditoría Documental" className="w-[450px] h-[320px] object-cover rounded-[20px] pr-12 hidden sm:block shadow-xl hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="text-white max-w-lg">
                  <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
                    Auditoría Documental y Preparación Legal
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Revisamos y ordenamos toda la documentación necesaria para garantizar que la propiedad esté lista para la venta. Nuestro equipo legal verifica títulos, gravámenes y antecedentes para evitar sorpresas en el cierre.
                  </p>
                </div>
              </div>
            </div>


            {/* Paso 2 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 ">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                2
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="order-2 sm:order-1 text-white max-w-lg">
                  <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: '"Poltawski Nowy", serif' }}>Análisis Inicial y Valoración Profesional</h3>
                  <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Realizamos una valoración profesional y un análisis de mercado para definir un precio competitivo y una estrategia que maximice tu beneficio y acelere la venta.
                  </p>
                </div>
                <div className="order-1 sm:order-2 flex justify-center sm:justify-start">
                  <img src={prt2} alt="Análisis Inicial" className="w-[450px] h-[320px] object-cover rounded-[20px] pl-12 hidden sm:block shadow-xl hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="relative mb-24 fade-in-up mt-16 p-6">
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold text-2xl z-10 shadow-lg">
                3
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
                <div className="flex justify-center sm:justify-end">
                  <img src={prt3}  alt="Estrategia de Comercialización" className="w-[450px] h-[320px] object-cover rounded-[20px] pr-12 hidden sm:block shadow-xl hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="text-white max-w-lg">
                  <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
                    Estrategia de Comercialización Personalizada
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Diseñamos un plan de comercialización a la medida: fotografía profesional, anuncios en portales y difusión dirigida para atraer compradores calificados.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 ">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                4
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="order-2 sm:order-1 text-white max-w-lg">
                  <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
                    Gestión de Interesados y Visitas Filtradas
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Coordinamos y filtramos interesados, agendamos visitas con compradores preseleccionados y realizamos presentaciones guiadas para optimizar tiempo y resultados.
                  </p>
                </div>
                <div className="order-1 sm:order-2 flex justify-center sm:justify-start">
                  <img src={prt4}alt="Gestión de Interesados" className="w-[450px] h-[320px] object-cover rounded-[20px] pl-12 hidden sm:block shadow-xl hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="relative mb-24 fade-in-up mt-16 p-6">
              <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-bold text-2xl z-10 shadow-lg">
                5
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
                <div className="flex justify-center sm:justify-end">
                  <img src={prt5}alt="Negociación y Ofertas" className="w-[450px] h-[320px] object-cover rounded-[20px] pr-12 hidden sm:block shadow-xl hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="text-white max-w-lg">
                  <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
                    Negociación y Presentación de Ofertas
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Asesoramos en la recepción y negociación de ofertas, evaluando propuestas y buscando las mejores condiciones para ti, con transparencia y protección de tus intereses.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 6 */}
            <div className="relative mb-12 fade-in-up mt-10 p-4 ">
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-semibold text-lg z-10">
                6
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                <div className="order-2 sm:order-1 text-white max-w-lg">
                  <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: '"Poltawski Nowy", serif' }}>Firma, Escritura y Cierre Seguro</h3>
                  <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Acompañamos todo el proceso de firma y escrituración, coordinando trámites y garantizando un cierre seguro y conforme a la normativa.
                  </p>
                </div>
                <div className="order-1 sm:order-2 flex justify-center sm:justify-start">
                  <img src={prt6}  alt="Firma y Cierre" className="w-[450px] h-[320px] object-cover rounded-[20px] pl-12 hidden sm:block shadow-xl hover:scale-105 transition-transform duration-300" />
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
    </div>
    </div>
  )
}

export default Renta
