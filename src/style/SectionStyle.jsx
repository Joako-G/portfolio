export function SectionStyle ({ children }) {
  return (
    <section className='pt-2 ml-10 mr-10'>
      <div className='grid grid-cols-1 justify-items-center items-center gap-5 m-3 md:grid-cols-[2fr_1fr]  p-5 border-2 rounded-lg border-solid border-cyan-50'>
        {children}
      </div>
    </section>
  )
}
