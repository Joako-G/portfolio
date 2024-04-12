import { useState } from 'react'
import { projects } from '../projects'

export function useProject () {
  const [index, setIndex] = useState(0)
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(true)
  const [project, setProject] = useState(projects[index])

  const nextProject = () => {
    const newIndex = index + 1
    if (newIndex === projects.length - 1) {
      setNext(false)
    }
    setProject(projects[newIndex])
    setPrev(true)
    setIndex(newIndex)
  }

  const prevProject = () => {
    const newIndex = index - 1
    if (newIndex === 0) {
      setPrev(false)
    }
    setProject(projects[newIndex])
    setNext(true)
    setIndex(prevState => prevState - 1)
  }

  return { project, next, nextProject, prev, prevProject }
}
