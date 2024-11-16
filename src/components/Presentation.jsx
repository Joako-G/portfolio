// import { FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import { Image } from '@nextui-org/react'
import prefil from '../assets/perfil.jpg'
import './style.css'

export function Presentation () {
  return (
    <section className='section py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
      <div className='max-w-xl'>
        <div className='flex gap-4 mb-4'>
          <Image
            className='size-20 rounded-full'
            alt='NextUI hero Image'
            src={prefil}
          />
          <a href='#' rel='noopener' className='flex items-center transition md:justify-center md:hover:scale-105'>
            <div className='flex items-center'>
              <span className='relative inline-flex overflow-hidden rounded-full p-[1px]'>
                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]' />
                <div className='inline-flex items-center justify-center w-full px-3 py-1 text-sm rounded-full cursor-pointer bg-gray-800 text-white/80 backdrop-blur-3xl whitespace-nowrap'>
                  Disponible para trabajar
                </div>
              </span>
            </div>
          </a>
        </div>
        <h1 className='text-4xl pb-6'>Hola, soy Matias</h1>
        <p>
          1 año de experiencia trabajando en proyectos personales. <strong className='text-cyan-400'>Desarrollador Front-End</strong> de Jujuy - Argentina.
        </p>
      </div>
    </section>
  )
}
