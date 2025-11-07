    
import hero from '../Public/Avaluo/Overlay/image 13.png'
import fondo from '../Public/fondo.png'
import { useEffect } from 'react'
import paso1 from "../Public/Avaluo/Pasos/avaluo (1).png"
import paso2 from "../Public/Avaluo/Pasos/avaluo (2).png"
import paso3 from "../Public/Avaluo/Pasos/avaluo (3).png"


const Avaluo = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) el.classList.add('in-view')
          else el.classList.remove('in-view')
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll('.fade-in-up').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
   <div className="bg-black text-white font-sans">
    <div className="relative min-h-[90vh] flex items-center justify-center">
           <div className="absolute inset-0 bg-[#1a1a1a] bg-opacity-60">
                    <img src={hero} alt="Background" className="w-full h-[100%] object-cover "/>
                  </div>
            {/* Fondo con overlay */}
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
                Conoce el valor real de <br /> 
                tu propiedad.
    
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
                 Inicia con lo mas importante
              </p>
            </div>
          </div>
      {/* 3 Steps Section */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-bold mb-8">Tu Avalúo En 3 Pasos</h2>

        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .fade-in-up { opacity: 0; transform: translateY(20px) scale(0.98); }
          .fade-in-up.in-view { animation: fadeInUp 0.7s ease-out both; }
        `}</style>

  <div className="max-w-6xl mx-auto px-4 relative ">
          {/* Decorative background images (positioned) */}
          <img 
            src={fondo} 
            alt="decor"
            className="absolute -right-[600px] -top-[100px] rotate-[90deg] w-[600px] md:w-[800px] opacity-15 pointer-events-none z-0"
          />
          <img
            src={fondo}
            alt="hero-decor"
            className="absolute -left-[600px]  bottom-[100px] rotate-[325deg] w-[500px] md:w-[700px] opacity-10 pointer-events-none z-0"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paso 1 */}
            <div className="fade-in-up hover:scale-105 transition-all duration-300 bg-[#1a1a1a] p-4 rounded">
              <img src={paso1} alt="Paso 1: Evaluación inicial" className="w-full rounded-lg shadow-xl" />
              <p className="text-center mt-4 text-lg font-medium">1. Evaluación inicial</p>
              <p className="text-center mt-2 text-sm"> Completa el Formulario Inicial <br />
COMO APARECE. </p>
            </div>

            {/* Paso 2 */}
            <div className="fade-in-up hover:scale-105 transition-all duration-300 bg-[#1a1a1a] p-4 rounded">
              <img src={paso2} alt="Paso 2: Análisis del mercado" className="w-full rounded-lg shadow-xl" />
              <p className="text-center mt-4 text-lg font-medium">2. Formulario de la Propiedad</p>
              <p className="text-center mt-2 text-sm">Detalla las Características de tu Propiedad
Cuéntanos sobre las particularidades que hacen única tu propiedad: <br />
metros cuadrados, número de habitaciones,<br />
amenidades, antigüedad y estado de conservación.</p>
            </div>

            {/* Paso 3 */}
            <div className="fade-in-up hover:scale-105 transition-all duration-300 bg-[#1a1a1a] p-4 rounded">
              <img src={paso3} alt="Paso 3: Entrega del informe" className="w-full rounded-lg shadow-xl" />
              <p className="text-center mt-4 text-lg font-medium">3. Entrega del informe</p>
              <p className="text-center mt-2 text-sm">
                Recibe tu Avalúo Profesional <br />
                Recibirás un avalúo detallado elaborado por nuestros expertos certificados.<br/>
                Te contactaremos vía email o teléfono con el reporte completo.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a href="/form-avaluo">
            <button className="bg-[#1a1a1a] text-white py-3 px-8 rounded font-medium"
              style={{ fontFamily: '"Poltawski Nowy", serif' }}
              >
              Comenzar Avalúo
            </button>
              </a>
          </div>
        </div>
      </section>

      {/* Quote / Contact Section */}
      <section className="py-20 bg-[#0b0b0b] h-[500px]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-lg px-8 py-12 shadow-lg">
            <div className="text-center mb-6">
              <div className="text-sm text-gray-600 uppercase tracking-widest">Torssa Grupo Inmobiliario</div>
            </div>

            <blockquote className="text-center mx-auto max-w-3xl">
              <p className="text-lg md:text-2xl leading-relaxed" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
                “Un avalúo preciso es el primer paso para vender, comprar o rentar con éxito. En Torssa ponemos a tu disposición expertos certificados para garantizarte seguridad en cada decisión.”
              </p>
            </blockquote>
          </div>
        </div>
      </section>
   
      {/* Improved Contact CTA */}
      <section className="py-24 bg-[#060606]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#000000] rounded-md shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch border border-gray-800">
            {/* Left content: large white space with centered title */}
            <div className="w-full md:w-2/3 p-12 md:p-16 flex items-center justify-center text-center">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-widest text-gray-500">Torssa Grupo Inmobiliario</p>
                <h2 className="mt-4 font-serif font-semibold text-4xl md:text-[64px] lg:text-[80px] leading-tight text-white" style={{ fontFamily: '"Poltawski Nowy", serif' }}>
                  ¿Tienes Alguna<br/> Duda?<br/> Contáctanos
                </h2>

                <div className="mt-8 flex items-center justify-center">
                  <a
                    href="https://wa.me/tuNumero"
                    aria-label="Enviar mensaje por WhatsApp a Torssa"
                    className="inline-flex items-center bg-gray-200 text-gray-800 text-sm font-medium py-2 px-4 rounded-full border border-gray-300 shadow-sm"
                  >
                    <span className="mr-3">MANDANOS UN MENSAJE</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-600" aria-hidden>
                      <path d="M20.52 3.48A11.94 11.94 0 0012 .5 11.94 11.94 0 003.48 3.48 11.94 11.94 0 00.5 12c0 2.1.55 4.12 1.6 5.9L.5 23.5l5.8-1.57A11.94 11.94 0 0012 23.5c2.1 0 4.12-.55 5.9-1.6A11.94 11.94 0 0023.5 12c0-3.2-1.25-6.15-3.0-8.52zM12 21c-1.86 0-3.64-.5-5.18-1.44l-.37-.23-3.45.93.93-3.36-.24-.35A8.98 8.98 0 013 12c0-5 4.02-9 9-9s9 4 9 9-4.02 9-9 9z" />
                      <path d="M17.5 14.2c-.3-.15-1.77-.88-2.05-.98-.28-.1-.48-.15-.69.15s-.79.98-.97 1.18c-.18.2-.36.23-.66.08-.3-.15-1.12-.41-2.12-1.31-.78-.7-1.3-1.56-1.45-1.86-.15-.3-.02-.46.13-.6.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.38-.01-.53-.02-.15-.69-1.67-.95-2.29-.25-.6-.51-.52-.69-.53l-.59-.01c-.2 0-.52.07-.8.35-.28.28-1.08 1.06-1.08 2.58 0 1.52 1.1 3 1.25 3.2.15.2 2.15 3.3 5.21 4.63 3.06 1.33 3.06.89 3.61.84.55-.06 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.08-.13-.28-.2-.58-.35z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right panel: tall black rectangle with logo centered */}
            <div className="w-full md:w-1/3 bg-transparent flex items-center justify-center p-12">
              <div className="bg-black w-72 md:w-80 lg:w-96 h-[320px] md:h-[420px] flex items-center justify-center">
                <img src={hero} alt="Torssa Logo" className="object-contain w-56 md:w-64 lg:w-72" />
              </div>
            </div>
          </div>
        </div>
     </section>
     
     
    </div>
  )
}

export default Avaluo