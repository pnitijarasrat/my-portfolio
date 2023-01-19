import classes from './AboutMe.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const AboutMe = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className={classes.AboutMe} data-aos='fade-up'>
      <h1 data-aos='fade-up'>Here is a quick detail about me</h1>
      <p data-aos='fade-up'>Hello !, My name is Puriwat Nitijarasrat.</p>
      <p data-aos='fade-up'>I am an industrial engineering from Chulalongkorn University.</p>
      <p data-aos='fade-up'>I found myself enjoying building website so I started learning about web development myself !</p>
    </div>
  )
}

export default AboutMe