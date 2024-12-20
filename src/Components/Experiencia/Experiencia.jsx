import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { motion } from 'framer-motion'

const experienceData = [
  { year: 2019, projects: 3 },
  { year: 2020, projects: 7 },
  { year: 2021, projects: 9 },
  { year: 2022, projects: 15 },
  { year: 2023, projects: 15 },
  { year: 2024, projects: 20 },
]

const techStackData = [
  { name: 'React', value: 25 },
  { name: 'Laravel', value: 20 },
  { name: 'JavaScript', value: 30 },
  { name: 'PHP', value: 25 },
  { name: 'Tailwind CSS', value: 10 },
  { name: 'GitHub', value: 10 },
  { name: 'Lucide React', value: 5 },
  { name: 'Font Awesome', value: 5 },
]

const COLORS = ['#00f2fe', '#4facfe', '#0ea5e9', '#38bdf8', '#7dd3fc']

function Experiencia() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#020420] to-[#03072b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text"
        >
          Experiencia y Estadísticas
        </motion.h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-lg bg-white/5 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-300"
          >
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-8 text-blue-300">Proyectos Completados por Año</h4>
            <div className="h-[250px] sm:h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={experienceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="year" stroke="#fff" tick={{fontSize: 12}} />
                  <YAxis stroke="#fff" tick={{fontSize: 12}} />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(3,7,43,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="projects" 
                    stroke="#4facfe"
                    strokeWidth={2}
                    dot={{ stroke: '#00f2fe', strokeWidth: 2, r: 3 }}
                    activeDot={{ r: 6, stroke: '#00f2fe', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-lg bg-white/5 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-300"
          >
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-8 text-blue-300">Stack Tecnológico</h4>
            <div className="h-[250px] sm:h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={techStackData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {techStackData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]}
                        style={{filter: 'drop-shadow(0px 0px 8px rgba(0,242,254,0.3))'}}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(3,7,43,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {techStackData.map((item, index) => (
                <motion.div 
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center bg-white/5 p-2 rounded-lg backdrop-blur-sm"
                >
                  <div 
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2" 
                    style={{ 
                      backgroundColor: COLORS[index % COLORS.length],
                      boxShadow: `0 0 10px ${COLORS[index % COLORS.length]}` 
                    }}
                  ></div>
                  <span className="text-xs sm:text-sm text-gray-300">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experiencia
