import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import hero from '../Public/Propiedades/Hero1.mp4'
import iconDucha from "../Public/Propiedades/icons/shower_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
import iconCama from "../Public/Propiedades/icons/single_bed_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
import iconAuto from "../Public/Propiedades/icons/local_parking_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"

const Propiedades = () => {
  const navigate = useNavigate();
  const [filtroTab, setFiltroTab] = useState('renta');
  const videoRef = useRef(null);
  // Array de propiedades de ejemplo
  const propiedades = [
    {
      id: 1,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 2,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 3,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 4,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 5,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 6,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 7,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 8,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 9,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 10,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 11,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
    {
      id: 12,
      precio: 2840000,
      tipo: 'VENTA',
      descripcion: 'Departamento en zona residencial',
      ubicacion: 'Desarrollo Santa Juliana'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
          playsInline
          autoPlay
          loop
          muted
          preload="auto"
        >
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-light mb-8 md:mb-12 tracking-wide text-white">
              Encuentra tu Próxima<br />
              Propiedad con Nosotros.
            </h1>

            {/* Tabs EN VENTA / EN RENTA */}
            <div className="max-w-3xl mx-auto px-4 mb-8">
              <div className="flex justify-center gap-12 mb-6">
                <button
                  onClick={() => setFiltroTab('venta')}
                  className={`text-lg font-light transition-colors ${
                    filtroTab === 'venta' ? 'text-white border-b-2 border-white pb-2' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  EN VENTA
                </button>
                <button
                  onClick={() => setFiltroTab('renta')}
                  className={`text-lg font-light transition-colors ${
                    filtroTab === 'renta' ? 'text-white border-b-2 border-white pb-2' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  EN RENTA
                </button>
              </div>

              {/* Buscador - card */}
              <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                  <div>
                    <label className="sr-only">Tipo</label>
                    <select className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md text-white placeholder-white placeholder-opacity-70 focus:outline-none">
                      <option className="text-black">Todos</option>
                      <option className="text-black">Casa</option>
                      <option className="text-black">Departamento</option>
                    </select>
                  </div>
                  <div>
                    <label className="sr-only">Ubicación</label>
                    <input type="text" placeholder="Todo México" className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md text-white placeholder-white placeholder-opacity-70 focus:outline-none" />
                  </div>
                  <div>
                    <button className="w-full bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">BUSCAR</button>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-gray-300">Todas las Propiedades Disponibles: {propiedades.length}</p>
          </div>
        </div>
      </section>

      {/* Grid de Propiedades */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propiedades.map((propiedad) => (
            <div 
              key={propiedad.id} 
              onClick={() => navigate(`/propiedad/${propiedad.id}`)}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              {/* Imagen de la propiedad */}
              <div className="relative h-48 bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="absolute top-3 right-3 bg-black text-white px-3 py-1 text-xs font-medium">
                  {propiedad.tipo}
                </span>
                <img 
                  src="https://via.placeholder.com/400x300?text=Propiedad" 
                  alt={`Propiedad ${propiedad.id}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Información de la propiedad */}
              <div className="p-4">
                <p className="text-2xl font-light mb-2">
                  ${(propiedad.precio / 1000000).toFixed(2)} MXN
                </p>
                <p className="text-gray-400 text-sm mb-3">
                  {propiedad.descripcion}
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  {propiedad.ubicacion}
                </p>
                
                {/* Iconos de características */}
                <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                  <div className="flex gap-2 text-xs text-gray-400 h-6 items-center">
                    <img src={iconCama} className='h-[20px] w-auto'  alt="" /><span> 3</span>
                    <img src={iconDucha} className='h-[20px] w-auto' alt="" /><span>2</span>
                    <img src={iconAuto} className='h-[16px] w-auto' alt="" /><span>2</span>
                  </div>
                  <button className="text-white hover:text-gray-300 transition-colors">
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Propiedades
