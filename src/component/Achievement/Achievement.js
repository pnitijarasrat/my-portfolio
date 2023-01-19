import classes from './Achievement.module.css'
import { useInView } from 'react-intersection-observer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Achievement = () => {
  const { ref, inView } = useInView()
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className={`${classes.Achievement} ${inView ? classes.animation : ''}`} ref={ref} data-aos='fade-up'>
      <span>A</span>
      <span>C</span>
      <span>H</span>
      <span>I</span>
      <span>E</span>
      <span>V</span>
      <span>E</span>
      <span>M</span>
      <span>E</span>
      <span>N</span>
      <span>T</span>
      <span>S</span>
    </div >
  )
}

export default Achievement
