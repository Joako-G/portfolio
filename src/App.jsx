// import { AboutMe } from './components/AboutMe'
import { Technologies } from './components/Tehcnologies'
import './app.css'
import { Project } from './components/project/Project'
import { Presentation } from './components/Presentation'
import { AboutMe } from './components/aboutMe/AboutMe'

export function App () {
  console.log('first')
  return (
    <div className='dark text-foreground bg-background'>
      <Presentation />
      <AboutMe />
      <Project />
      <Technologies />
    </div>
  )
}
