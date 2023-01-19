import classes from './Project.module.css'
import { useInView } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Project = () => {
  const { ref, inView } = useInView
  useEffect(() => {
    Aos.init()
  })
  return (
    <div className={`${classes.Project} ${inView ? classes.animation : ''}`} ref={ref} data-aos='fade-up'>
      <span>P</span>
      <span>R</span>
      <span>O</span>
      <span>J</span>
      <span>E</span>
      <span>C</span>
      <span>T</span>
      <span>S</span>
    </div>
  )
}

export default Project