import { FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import './style.css'

export function Presentation () {
  return (
    <section className='flex flex-col items-center bg-slate-800'>
      <div>
        <h1 data-text='Front-end Developer' className='text-xl md:text-5xl text-cyan-500 font-bold m-3 dev'> Front-end Developer</h1>
      </div>
      <h3 className='text-large md:text-3xl m-3'> Matias Joaquin Gallardo</h3>
      <div className='flex'>
        <a href='https://www.linkedin.com/in/matias-joaquin-gallardo-28a945236'><FaLinkedinIn className='w-12 mr-2 p-2 hover:text-sky-500' /></a>
        <a href='https://github.com/Joako-G'><FaGithub className='w-12 ml-2 p-2 hover:text-sky-500' /></a>
      </div>
    </section>
  )
}
