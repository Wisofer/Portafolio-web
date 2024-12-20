import Layouts from './Components/Layouts/Layouts'
import { useState } from 'react'
import Proyectos from './Components/Proyectos/Proyectos'
import Habilidades from './Components/Habilidades/Habilidades'
import Experiencia from './Components/Experiencia/Experiencia'
import Testimonial from './Components/Testimonial/Testimonial'
import WorkExperiencia from './Components/WorkExperiencia/WorkExperiencia'
import Certificaciones from './Components/Certificaciones/Certificaciones'
import Blog from './Components/Blog/Blog'
import Contacto from './Components/Contacto/Contacto'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Layouts />
      <main>
        <HeroBanner />
        <Proyectos />
        <Habilidades />
        <Experiencia />
        <Testimonial /> 
        <WorkExperiencia />
        <Certificaciones />
        <Blog />
        <Contacto />
        <Footer />
      </main>

    </div>
  )
}

export default App