import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaMapMarkerAlt, FaBed, FaBath, FaCar, FaRuler } from 'react-icons/fa'

const PropiedadDetalle = () => {
  const { id } = useParams();
  const [imagenPrincipal, setImagenPrincipal] = useState(0);

  // Datos de la propiedad (en una aplicación real, vendrían de una API o parámetro de ruta)
  const propiedad = {
    id: 1,
    titulo: 'Departamento Penthouse en renta Amsterdam, Cauddesa - Con roof garden privado',
    precio: 67000,
    moneda: 'MXN',
    imagenes: [
      'https://via.placeholder.com/800x500?text=Propiedad+Principal',
      'https://via.placeholder.com/200x150?text=Imagen+1',
      'https://via.placeholder.com/200x150?text=Imagen+2',
      'https://via.placeholder.com/200x150?text=Imagen+3',
      'https://via.placeholder.com/200x150?text=Imagen+4'
    ],
    descripcion: 'ULTRA MODERNISTA Y DISEÑO ÚNICO. Este departamento penthouse de lujo ubicado en Amsterdam, Cauddesa, es una joya arquitectónica que combina elegancia contemporánea con comodidad absoluta. Con un exclusivo roof garden privado, ofrece vistas panorámicas y un espacio de relajación sin igual. Perfecto para aquellos que buscan vivir en el corazón de la ciudad con todas las amenidades de un resort.',
    caracteristicas: {
      recamaras: 3,
      banos: 2,
      cocheras: 2,
      areaConstruida: '250 m²',
      areaTerreno: '300 m²',
      datosTecnicos: {
        habitables: '169 m²',
        balcon: '0.62 m²',
        terraza: '0.62 m²'
      }
    },
    amenidades: [
      'Roof garden privado',
      'Piscina en azotea',
      'Gimnasio',
      'Seguridad 24/7',
      'Acceso a parques',
      'Estacionamiento techado',
      'Elevador privado',
      'Sistema de automatización del hogar',
      'Cocina gourmet',
      'Aire acondicionado central',
      'Calefacción',
      'Jardín privado'
    ],
    ubicacion: 'Amsterdam, Cauddesa',
    agente: {
      nombre: 'Departamento Penthouse',
      subtitulo: 'en renta Amsterdam, Cauddesa - Con roof garden privado',
      telefono: '+52 442 788 8800',
      email: 'contacto@torssam.com'
    },
    propiedadesSimilares: [
      { id: 2, precio: 2840000, tipo: 'VENTA', descripcion: 'Departamento en zona residencial', ubicacion: 'Desarrollo Santa Juliana' },
      { id: 3, precio: 2840000, tipo: 'VENTA', descripcion: 'Departamento en zona residencial', ubicacion: 'Desarrollo Santa Juliana' },
      { id: 4, precio: 2840000, tipo: 'VENTA', descripcion: 'Departamento en zona residencial', ubicacion: 'Desarrollo Santa Juliana' }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header con título, ubicación y precio */}
      <section className="bg-black py-6 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-light mb-3">
                {propiedad.titulo}
              </h1>
              <p className="text-gray-400 text-sm flex items-center">
                <FaMapMarkerAlt className="mr-2 text-white" />
                {propiedad.ubicacion}
              </p>
            </div>
            <div className="text-right">
              <div className="bg-white/10 px-6 py-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">Precio</p>
                <p className="text-4xl font-light">${propiedad.precio.toLocaleString()} MXN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        {/* Galería de imágenes */}
        <div className="mb-8">
          {/* Imagen principal */}
          <div className="mb-4 h-[500px] bg-gray-900 rounded-lg overflow-hidden relative group">
            <img 
              src={propiedad.imagenes[imagenPrincipal]} 
              alt="Propiedad" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Miniaturas */}
          <div className="grid grid-cols-5 gap-3 mb-8">
            {propiedad.imagenes.map((imagen, index) => (
              <button
                key={index}
                onClick={() => setImagenPrincipal(index)}
                className={`aspect-[4/3] rounded-lg overflow-hidden relative ${
                  imagenPrincipal === index 
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-black' 
                    : 'hover:opacity-80'
                } transition-all duration-300`}
              >
                <img 
                  src={imagen} 
                  alt={`Imagen ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                {imagenPrincipal === index && (
                  <div className="absolute inset-0 bg-white/10"></div>
                )}
              </button>
            ))}
          </div>

          {/* Botones de acción */}
          <div className="flex gap-3 mb-8">
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-medium rounded hover:bg-gray-700 transition-colors">
              💾 Favorito
            </button>
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-medium rounded hover:bg-gray-700 transition-colors">
              📸 Imágenes
            </button>
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-medium rounded hover:bg-gray-700 transition-colors">
              🎬 Videos
            </button>
          </div>
        </div>

        {/* Contenido descriptivo y panel de contacto */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Descripción y características - Izquierda */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-xl font-light mb-4">Descripción de la Propiedad</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{propiedad.descripcion}</p>
              
              <div className="mb-6">
                <h3 className="text-sm font-light mb-3">Características Principales</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div className="flex items-center">
                    <FaBed className="text-2xl mr-3 text-white/80" />
                    <div>
                      <p className="text-xs text-gray-400">Recámaras</p>
                      <p className="text-sm font-medium">{propiedad.caracteristicas.recamaras}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaBath className="text-2xl mr-3 text-white/80" />
                    <div>
                      <p className="text-xs text-gray-400">Baños</p>
                      <p className="text-sm font-medium">{propiedad.caracteristicas.banos}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaCar className="text-2xl mr-3 text-white/80" />
                    <div>
                      <p className="text-xs text-gray-400">Cocheras</p>
                      <p className="text-sm font-medium">{propiedad.caracteristicas.cocheras}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaRuler className="text-2xl mr-3 text-white/80" />
                    <div>
                      <p className="text-xs text-gray-400">Área</p>
                      <p className="text-sm font-medium">{propiedad.caracteristicas.areaConstruida}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                  <p>• Sala-comedor con balcón</p>
                  <p>• Cocina abierta</p>
                  <p>• Área de lavandería</p>
                  <p>• La principal con vestidor</p>
                  <p>• Cuarto de TV con terraza</p>
                  <p>• Estacionamiento techado</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-light mb-3">Datos Técnicos</h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                  <p>• {propiedad.caracteristicas.datosTecnicos.habitables} habitables</p>
                  <p>• {propiedad.caracteristicas.datosTecnicos.balcon} balcón</p>
                  <p>• {propiedad.caracteristicas.datosTecnicos.terraza} terraza</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-light mb-3">Mantenimiento Incluido</h3>
                <div className="text-xs text-gray-300">
                  <p>• Servicios incluidos</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-light mb-3">Amenidades</h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                  {propiedad.amenidades.map((amenidad, index) => (
                    <p key={index}>• {amenidad}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Panel de contacto - Derecha */}
          <div>
            <div className="bg-white rounded-lg p-6 sticky top-20">
              <div className="mb-6">
                <span className="bg-black text-white px-3 py-1 text-xs font-medium rounded inline-block mb-4">VENTA</span>
                <h3 className="text-xl font-bold mb-2 text-black">Departamento Penthouse</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">en renta Amsterdam, Cauddesa - Con roof garden privado</p>
                <p className="text-black font-bold text-2xl mb-4">$67,000</p>
                <div className="flex items-center gap-4 mb-4 text-gray-500">
                  <p className="text-xs">ID: TOR-1</p>
                  <p className="text-xs">Ref: 2025-0001</p>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 px-4 rounded font-medium mb-3 hover:bg-gray-900 transition-all duration-300">
                Agendar Visita
              </button>
              <button className="w-full border border-black text-black py-3 px-4 rounded font-medium hover:bg-gray-50 transition-all duration-300">
                Contactar
              </button>

              <div className="border-t border-gray-200 mt-6 pt-6 space-y-4">
                <div>
                  <p className="text-gray-500 text-xs mb-2">TIPO DE PROPIEDAD</p>
                  <p className="text-black">Departamento</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-2">TERRENO</p>
                  <p className="text-black">{propiedad.caracteristicas.areaTerreno}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-2">FECHA DE PUBLICACIÓN</p>
                  <p className="text-black">24/10/2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propiedades similares */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-800">
        <h2 className="text-xl font-light mb-8">Propiedades Similares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propiedad.propiedadesSimilares.map((prop) => (
            <div key={prop.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              <div className="relative h-48 bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="absolute top-3 right-3 bg-black text-white px-3 py-1 text-xs font-medium">
                  {prop.tipo}
                </span>
                <img 
                  src="https://via.placeholder.com/400x300?text=Propiedad" 
                  alt={`Propiedad ${prop.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xl font-light mb-2">
                  ${(prop.precio / 1000000).toFixed(2)} MXN
                </p>
                <p className="text-gray-400 text-xs mb-2">{prop.descripcion}</p>
                <p className="text-gray-500 text-xs">{prop.ubicacion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default PropiedadDetalle
