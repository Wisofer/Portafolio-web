import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const quickLinks = ['Inicio', 'Proyectos', 'Habilidades', 'Experiencia', 'Contacto']

  const scrollToSection = (item) => {
    const sectionMap = {
      Proyectos: 'proyectos',
      Habilidades: 'habilidades',
      Experiencia: 'experiencia',
      Contacto: 'contacto'
    }

    if (item === 'Inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetId = sectionMap[item]
    const targetElement = document.getElementById(targetId)
    if (!targetElement) return

    const navbarOffset = 88
    const top = targetElement.getBoundingClientRect().top + window.scrollY - navbarOffset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <footer className="w-full border-t border-white/10 bg-gradient-to-b from-[#020420] to-[#03072b] px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-2xl font-bold text-white">William Borge</h4>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Desarrollo soluciones web y moviles enfocadas en resultados de negocio, rendimiento y experiencia de usuario.
            </p>
          </div>

          <div>
            <h5 className="mb-3 text-lg font-semibold text-white">Navegacion</h5>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-sm text-gray-300 transition-colors hover:text-blue-400"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-3 text-lg font-semibold text-white">Contacto</h5>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-400" /> wisofer17@gmail.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-blue-400" /> +505 8153 9569</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-400" /> Nicaragua</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-gray-300">© {currentYear} William Borge. Todos los derechos reservados.</p>

          <div className="flex items-center gap-4 text-gray-300">
            <a href="https://github.com/Wisofer" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-400">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/william-borge-450798201/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-400">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/wisofer17/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-400">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="mailto:wisofer17@gmail.com" className="transition-colors hover:text-blue-400">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer