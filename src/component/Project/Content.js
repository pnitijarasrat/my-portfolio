import classes from './Content.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Content = (props) => {
  useEffect(() => {
    Aos.init()
  })

  return (
    <section className={classes.Container}>
      <div className={classes.Content}>
        <h1 data-aos='fade-up' >{props.header}</h1>
        <p data-aos='fade-up' >{props.desc}</p>
      </div>
      <div className={classes.imgDiv} data-aos='fade-up'>
        {props.img}
      </div>
    </section>
  )
}

export default Content