import classes from './Home.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { BsLinkedin } from 'react-icons/bs'

const Home = () => {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className={classes.Home}>
      <h1 className={classes.pendulum} data-aos='fade-right'>Hi</h1>
      <h1 data-aos='fade-right'>My Name is</h1>
      <h1 data-aos='fade-right'>Puriwat</h1>
      <p data-aos='fade-right'>| Frontend Developer | Essentialist | Self Learner |</p>
      <div>
        <a
          href='https://www.linkedin.com/in/p-nitijarasrat/'
          target='_blank' rel="noreferrer"
          style={{ color: 'inherit' }}><BsLinkedin size={30} /></a>
      </div>
    </div>
  )
}

export default Home