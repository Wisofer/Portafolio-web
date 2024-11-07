import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

function Experiencia() {
  return (
    <section className="py-20">
      <h3 className="text-4xl font-bold mb-12 text-center">Experiencia y Estadísticas</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white bg-opacity-10 p-6 rounded-xl">
          <h4 className="text-2xl font-semibold mb-4">Proyectos Completados por Año</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={experienceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#555" />
              <XAxis dataKey="year" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none' }}
                labelStyle={{ color: '#fff' }}
              />
              <Line type="monotone" dataKey="projects" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-xl">
          <h4 className="text-2xl font-semibold mb-4">Stack Tecnológico</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={techStackData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {techStackData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', border: 'none' }}
                labelStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {techStackData.map((item, index) => (
              <div key={item.name} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiencia
