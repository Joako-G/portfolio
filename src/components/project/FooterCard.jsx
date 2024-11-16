// import { GitHub } from '../Icon'

import { Button } from '@nextui-org/react'

const FooterCard = ({ url, page }) => {
  return (
    <footer className='mt-auto flex items-end justify-start m-4 gap-x-4'>
      {/* <a href={url} className='inline-flex items-center justify-center bg-gray-400 rounded-lg p-2 h-12 border-2 border-green-300'>
        <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-brand-github h-[40px]' width='28' height='28' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#2c3e50' fill='none' strokeLinecap='round' strokeLinejoin='round'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
        </svg>
        Ir al proyecto

      </a>
      <a href={page} className='inline-flex items-center justify-center bg-gray-400 rounded-lg p-2 h-12 border-2 border-green-300'>
        <svg className='icon icon-tabler icon-tabler-brand-github h-[28px]' xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' /><path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' /></svg>
        Ir al proyecto

      </a> */}

      <Button className='pl-0' color='primary' variant='shadow'>
        <a href={url} className='inline-flex items-center'>
          <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-brand-github h-[40px]' width='28' height='28' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#fff' fill='none' strokeLinecap='round' strokeLinejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
          </svg>
          Ir al proyecto

        </a>
      </Button>

      <Button className='pl-0' color='primary' variant='shadow'>
        <a href={page} className='inline-flex items-center justify-cente'>
          <svg className='icon icon-tabler icon-tabler-brand-github h-[28px]' xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='#fff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' /><path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' /></svg>
          Probar juego

        </a>
      </Button>
    </footer>
  )
}

export default FooterCard
