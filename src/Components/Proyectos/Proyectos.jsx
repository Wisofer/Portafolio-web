import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Building2, Plane, Smartphone } from 'lucide-react'

const projects = [
  {
    id: 0,
    title: 'BarRestPOS',
    description:
      'Sistema web para bares y restaurantes que centraliza mesas, pedidos, ventas e inventario en un solo panel.',
    result:
      'Menos errores en operación diaria y mayor rentabilidad del negocio.',
    image:
      '/img/Gemini_Generated_Image_ssy9rzssy9rzssy9.png',
    platform: 'web',
    status: 'live',
    icon: Briefcase,
    demoLink: 'https://bar.encuentrame.org/',
    projectLink: '#'
  },
  {
    id: 1,
    title: 'Sistema de Óptica',
    description:
      'Sistema web para ópticas que integra citas, recetas, clientes e inventario en un panel centralizado y ágil.',
    result:
      'Atención más ágil y mejor control del negocio.',
    image:
      '/img/sistemadeoptica.png',
    platform: 'web',
    status: 'live',
    icon: Building2,
    demoLink: 'https://opticontrol-frontend.cowib.es/',
    projectLink: '#'
  },
  {
    id: 2,
    title: 'Sistema para Taller de Motos',
    description:
      'Sistema web para talleres de motos que centraliza órdenes, clientes, repuestos y facturación en un solo panel.',
    result:
      'Más productividad diaria y mejor experiencia para tus clientes.',
    image:
      '/img/tallerdemoto.png',
    platform: 'web',
    status: 'live',
    icon: Briefcase,
    demoLink: 'https://moto.encuentrame.org/',
    projectLink: '#'
  },
  {
    id: 3,
    title: 'Sistema para Agencias de Compras y Envíos',
    description:
      'Plataforma para agencias que centraliza pedidos, clientes y facturación desde un solo panel.',
    result:
      'Más control operativo y menos errores diarios.',
    image:
      '/img/agenciadecompra%20.png',
    platform: 'web',
    status: 'live',
    icon: Plane,
    demoLink: '#',
    projectLink: '#'
  },
  {
    id: 4,
    title: 'GlowNic',
    description:
      'App inteligente para salones de belleza que centraliza citas, clientes y control financiero en una sola plataforma.',
    result:
      'Más organización, más clientes y mejor rentabilidad del salón.',
    image:
      '/img/glownic.png',
    platform: 'app',
    status: 'live',
    icon: Smartphone,
    demoLink: 'https://play.google.com/store/apps/details?id=com.glownic.app&pcampaignid=web_share',
    projectLink: '#'
  },
  {
    id: 5,
    title: 'Encuéntrame',
    description:
      'Plataforma comunitaria que conecta personas, profesionales y empresas para encontrar empleo, ofrecer servicios y contratar talento local en minutos.',
    result:
      'Más oportunidades, contrataciones más rápidas y comunicación directa sin intermediarios.',
    image:
      '/img/unnamed.webp',
    platform: 'app',
    status: 'beta',
    icon: Smartphone,
    demoLink: '#',
    projectLink: '#'
  },
  {
    id: 6,
    title: 'Nisua',
    description:
      'Aplicación móvil de seguimiento menstrual que permite registrar ciclos, predecir períodos y cuidar la salud femenina con una experiencia simple, privada y segura.',
    result:
      'Mayor control del ciclo y bienestar diario con datos protegidos y uso sin conexión.',
    image:
      '/img/nisua.webp',
    platform: 'app',
    status: 'live',
    icon: Smartphone,
    demoLink: 'https://play.google.com/store/apps/details?id=com.cowib.nisua&pcampaignid=web_share',
    projectLink: '#'
  },
  {
    id: 7,
    title: 'BuscaYa',
    description:
      'Aplicación móvil que ayuda a encontrar productos disponibles en tiendas cercanas, conectando compradores con comercios locales de forma rápida y directa.',
    result:
      'Ahorra tiempo al comprar y aumenta la visibilidad de negocios locales en la comunidad.',
    image:
      '/img/buscaya.webp',
    platform: 'app',
    status: 'beta',
    icon: Smartphone,
    demoLink: '#',
    projectLink: '#'
  },
  {
    id: 8,
    title: 'BarbeNic',
    description:
      'Aplicación móvil para barberías que centraliza clientes, citas, servicios y control interno de ingresos/egresos en un solo lugar.',
    result:
      'Mejor organización diaria, menos choques de agenda y mayor control administrativo del negocio.',
    image:
      '/img/barbenic.webp',
    platform: 'app',
    status: 'beta',
    icon: Smartphone,
    demoLink: '#',
    projectLink: '#'
  }
]

function ProjectCard({ project }) {
  const Icon = project.icon
  const isLive = project.status === 'live'
  const [showClosedNotice, setShowClosedNotice] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/70 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-cyan-400/60 hover:shadow-cyan-500/10 sm:p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-4 overflow-hidden rounded-xl border border-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="mb-4 flex items-center gap-3 sm:gap-4">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
          <h4 className="bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
            {project.title}
          </h4>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-gray-300 sm:text-base">
          {project.description}
        </p>

        <div className="mb-5 rounded-xl border border-gray-800 bg-gray-950/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
            Resultado
          </p>
          <p className="mt-1 text-sm text-gray-300">
            {project.result}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={isLive ? project.demoLink : '#'}
            target={isLive ? '_blank' : undefined}
            rel={isLive ? 'noopener noreferrer' : undefined}
            onClick={(event) => {
              if (!isLive) {
                event.preventDefault()
                setShowClosedNotice(true)
              }
            }}
            className={`inline-block rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              isLive
                ? 'border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10'
                : 'cursor-not-allowed border border-amber-400/40 text-amber-300 hover:bg-amber-500/10'
            }`}
          >
            Ver demo
          </a>
        </div>
        {!isLive && showClosedNotice && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-gray-950/75 p-4 backdrop-blur-[2px]"
          >
            <div className="w-full max-w-xs rounded-2xl border border-amber-400/40 bg-gray-900/95 p-4 text-center shadow-2xl shadow-amber-500/10">
              <p className="text-sm font-semibold text-amber-300">
                Demo en prueba cerrada
              </p>
              <p className="mt-1 text-xs text-amber-200">
                Acceso disponible solo por invitacion.
              </p>
              <button
                type="button"
                onClick={() => setShowClosedNotice(false)}
                className="mt-3 rounded-md border border-amber-300/40 px-3 py-1 text-xs text-amber-200 transition-colors hover:bg-amber-400/10"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

function Proyectos() {
  return (
    <section id="proyectos" className="py-10 sm:py-20 bg-gray-950 bg-gradient-to-r from-[#020420] to-[#03072b]">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text px-4 text-center text-3xl font-bold text-transparent sm:text-4xl md:text-5xl"
      >
        Proyectos
      </motion.h3>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Proyectos
