import classes from './Content.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const AContent = (props) => {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className={classes.AContainer}>
      <div className={classes.AContent}>
        <h1 data-aos='fade-up'>{props.header}</h1>
        <p data-aos='fade-up'>{props.detail}</p>
      </div>
      <div className={classes.imgDiv} data-aos='fade-up'>
        {props.img}
      </div>
    </div>
  )
}

export default AContent