import classes from './Intro.module.css'
import { BsFillHeartFill } from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'


const Intro = () => {
  const [isIntroFinish, setIsIntroFinish] = useState(false)
  useEffect(() => {
    Aos.init()
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setIsIntroFinish(true)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  if (isIntroFinish) return

  return (
    <div className={classes.Intro}>
      <div className={`${classes.heart}`} data-aos='fade-up' >
        <BsFillHeartFill size={100} />
      </div>
    </div>
  )
}

export default Intro