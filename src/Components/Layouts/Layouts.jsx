import { Sun, Moon, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Layouts() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const nextTheme = savedTheme === 'light' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.classList.toggle('light', nextTheme === 'light')
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.classList.toggle('light', nextTheme === 'light')
    localStorage.setItem('theme', nextTheme)
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/pdf/CV-WILLIAM-BORGE.pdf'
    link.download = 'CV-WILLIAM-BORGE.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleMenuClick = (item) => {
    const sectionMap = {
      Proyectos: 'proyectos',
      Habilidades: 'habilidades',
      Experiencia: 'experiencia',
      Testimonios: 'testimonios',
      Blog: 'blog',
      Contacto: 'contacto'
    }

    if (item === 'Inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const targetId = sectionMap[item]
      const targetElement = document.getElementById(targetId)

      if (!targetElement) return

      const navbarOffset = 88
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarOffset

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  const menuItems = ['Inicio', 'Proyectos', 'Habilidades', 'Experiencia', 'Testimonios', 'Blog', 'Contacto']

  return (
    <nav className="fixed top-0 w-full z-50 bg-opacity-90 bg-gradient-to-r from-[#020420] to-[#03072b] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              Portafolio
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-white rounded-full"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-white rounded-full bg-white/5 border border-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-full bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-40 bg-black/40 backdrop-blur-[1px]">
            <div className="mx-3 mt-3 rounded-2xl border border-white/10 bg-[#0b123d]/95 p-3 shadow-2xl">
              <div className="px-2 pb-2 border-b border-white/10">
                <p className="text-sm text-gray-300">Navegacion</p>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item}
                  onClick={() => {
                    handleMenuClick(item);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-200 hover:text-blue-400 hover:bg-white/5 block px-3 py-2.5 text-base font-medium cursor-pointer rounded-lg transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center gap-4 px-3 py-2">
                <button
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity w-full"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
    </nav>
  )
}
