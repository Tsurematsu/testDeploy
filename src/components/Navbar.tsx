import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black text-white fixed w-full top-0 left-0 z-[999]">
      {/* Header superior solo con teléfono y español */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center text-sm">
            <span>+52 442 788 8800</span>
            <span>ESPAÑOL</span>
          </div>
        </div>
      </div>

      {/* Fila con TORSSAM y menús de navegación */}
      <div className="py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            {/* Hamburger menu for mobile */}
            <div className="flex justify-between items-center md:hidden">
              <Link to="/">
                <h1 className="text-3xl font-light tracking-widest hover:text-gray-300 transition-colors">TORSSAM</h1>
              </Link>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col space-y-4 mt-4 md:hidden`}>
              <Link to="/propiedades" className="hover:text-gray-300 transition-colors">PROPIEDADES</Link>
              <Link to="/venta" className="hover:text-gray-300 transition-colors">VENTA</Link>
              <Link to="/renta" className="hover:text-gray-300 transition-colors">RENTA</Link>
              <Link to="/about" className="hover:text-gray-300 transition-colors">SOBRE NOSOTROS</Link>
              <Link to="/contact" className="hover:text-gray-300 transition-colors">CONTACTO</Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:justify-between md:items-center md:w-full">
              {/* Menú izquierdo */}
              <div className="flex space-x-6">
                <Link to="/propiedades" className="hover:text-gray-300 transition-colors">PROPIEDADES</Link>
                <Link to="/venta" className="hover:text-gray-300 transition-colors">VENTA</Link>
                <Link to="/renta" className="hover:text-gray-300 transition-colors">RENTA</Link>
              </div>

              {/* Logo central */}
              <div className="text-center">
                <Link to="/">
                  <h1 className="text-4xl font-light tracking-widest hover:text-gray-300 transition-colors">TORSSAM</h1>
                </Link>
              </div>

              {/* Menú derecho */}
              <div className="flex space-x-6">
                <Link to="/about" className="hover:text-gray-300 transition-colors">SOBRE NOSOTROS</Link>
                <Link to="/contact" className="hover:text-gray-300 transition-colors">CONTACTO</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar