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
    <section id="habilidades" className="py-20">
      <h3 className="text-4xl font-bold mb-12 text-center">Mis Habilidades</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-10 p-6 rounded-xl"
          >
            <div className="flex items-center mb-4">
              <skill.icon className="w-8 h-8 mr-3 text-blue-400" />
              <h4 className="text-xl font-semibold">{skill.name}</h4>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <motion.div
                className="bg-blue-600 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
            <p className="text-right mt-2">{skill.level}%</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Habilidades
