import { CssIcon, ReactIcon, HtmlIcon, JavaScriptIcon, TailwindCSS, GitHub } from './Icon.jsx'

export function Technologies () {
  return (
    <section className='py-2 mx-10 pb-10'>
      <h1 className=' text-5xl font-bold mt-5 mb-5'>Tecnologias</h1>
      <div className='grid grid-cols-1 items-center gap-5 p-5 border-2 rounded-lg border-solid border-cyan-50 md:grid-cols-[2fr_1fr]  border-opacity-20'>
        <div className='technologies-descp'>
          <p>Como habran podido ver en los proyectos que realice, cuento con conocimientos en las siguientes tecnologias: </p>
          <p><strong>React, JavaScript, HTML, CSS, TailwindCSS, NextUI, GitHub</strong></p>
        </div>
        <div className='grid grid-cols-3 gap-10 technologies-img'>
          <ReactIcon />
          <JavaScriptIcon />
          <HtmlIcon />
          <CssIcon />
          <TailwindCSS />
          <GitHub />
        </div>
      </div>
    </section>
  )
}
