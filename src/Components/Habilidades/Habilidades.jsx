import { motion } from 'framer-motion'
import { Code, Server, Smartphone, Palette, Terminal, Cloud } from 'lucide-react'

const skills = [
  { name: 'Desarrollo Frontend', level: 90, icon: Code },
  { name: 'Desarrollo Backend', level: 85, icon: Server },
  { name: 'Desarrollo Móvil', level: 80, icon: Smartphone },
  { name: 'Diseño UI/UX', level: 85, icon: Palette },
  { name: 'Angular', level: 85, icon: Code },
  { name: 'Laravel', level: 80, icon: Server },
  { name: 'React.js', level: 90, icon: Code },
  { name: 'PHP', level: 80, icon: Server },
  { name: 'Tailwind CSS', level: 75, icon: Palette },
  { name: 'Bootstrap', level: 95, icon: Palette },
  { name: 'Control de Versiones con Git', level: 85, icon: Code },
  { name: 'Administración de Servidores con Linux', level: 85, icon: Terminal },
  { name: 'Administración de Sistemas', level: 75, icon: Server },
  { name: 'SaaS', level: 80, icon: Cloud },
]

function Habilidades() {
  return (
    <section id="habilidades" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-[#020420] to-[#03072b]">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text px-4"
      >
        Mis Habilidades
      </motion.h3>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="backdrop-blur-lg bg-white/5 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-blue-500/20 mr-3 sm:mr-4">
                <skill.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400" />
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white">{skill.name}</h4>
            </div>
            <div className="relative w-full h-3 sm:h-4 bg-black/30 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: 0.2 }}
              >
                <div className="absolute top-0 right-0 h-full w-full bg-[rgba(255,255,255,0.2)] animate-pulse"></div>
              </motion.div>
            </div>
            <div className="flex justify-between items-center mt-2 sm:mt-3">
              <span className="text-xs sm:text-sm text-gray-400">Dominio</span>
              <span className="text-base sm:text-lg font-semibold text-blue-400">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Habilidades
