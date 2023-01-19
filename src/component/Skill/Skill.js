import classes from './Skill.module.css'
import { useInView } from 'react-intersection-observer'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

const Skill = () => {
  const { ref, inView } = useInView()
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className={`${classes.Skill} ${inView ? classes.animation : ''}`} ref={ref} data-aos='fade-up'>
      SKILLS !
    </div>
  )
}

export default Skill