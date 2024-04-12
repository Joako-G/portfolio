import { Image } from '@nextui-org/react'
import prefil from '../../assets/perfil.jpg'

export function AboutMe () {
  return (
    <section className='pt-10 ml-10 mr-10'>
      <div className='grid grid-cols-1 justify-items-center items-center gap-5 md:grid-cols-[2.5fr_1fr]  p-5 border-2 rounded-lg border-solid border-cyan-50 border-opacity-20'>
        <div>
          <h3 className='text-2xl font-bold'>Hola, soy Matias Joaquin Gallardo</h3>
          <p className=''>
            desarrollador <strong className='text-xl'>front-end con 1 año de experiencia</strong> trabajando en proyectos personales para poner en practica mis conocimientos en React, asi poder brindar las mejores interfaces de usuiaros y soluciones. A menudo busco aprender nuevas tegnologias y realizar nuevos proyectos para mejorar mis habilides como desarrollador y asi brindar a los usuarios un diseño interactivo y agradable.
          </p>
        </div>
        <Image
          className='w-[250px]'
          alt='NextUI hero Image'
          src={prefil}
        />
      </div>
    </section>
  )
}
