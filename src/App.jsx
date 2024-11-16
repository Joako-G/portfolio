// import { AboutMe } from './components/AboutMe'
import { Technologies } from './components/Tehcnologies'
import './app.css'
import { Project } from './components/project/Project'
import { Presentation } from './components/Presentation'
import { AboutMe } from './components/aboutMe/AboutMe'
import Header from './components/Header'

export function App () {
  return (
    <div className='absolute w-full -z-10 items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white'>
      <Header />
      <main className='px-4'>
        <Presentation />
        <div className='space-y-24'>
          <Project />
          <Technologies />
          <AboutMe />
        </div>
      </main>
    </div>
  )
}
