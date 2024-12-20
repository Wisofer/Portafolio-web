import { Sun, Moon, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Layouts() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/pdf/CV-WILLIAM-BORGE.pdf';
    link.download = 'CV-WILLIAM-BORGE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const menuItems = ['Inicio', 'Proyectos', 'Habilidades', 'Experiencia', 'Testimonios', 'Blog', 'Contacto'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-90 bg-gradient-to-r from-[#020420] to-[#03072b] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              Portfolio
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              className="p-2 text-gray-300 hover:text-white rounded-full"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5" />
            </button>
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center gap-4 px-3 py-2">
                <button
                  className="p-2 text-gray-300 hover:text-white rounded-full"
                  aria-label="Toggle theme"
                >
                  <Sun className="h-5 w-5" />
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity w-full"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
