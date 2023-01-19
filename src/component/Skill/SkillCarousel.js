import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SkillItem from "./SkillItem";
import classes from './SkillCarousel.module.css'
import { RiHtml5Fill, RiCss3Fill, RiReactjsFill } from 'react-icons/ri'
import { SiJavascript, SiNodedotjs, SiTypescript } from 'react-icons/si'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const html = {
  logo: <RiHtml5Fill size={100} />,
  header: "HTML",
  level: "Experienced"
}
const css = {
  logo: <RiCss3Fill size={100} />,
  header: "CSS",
  level: "Experienced"
}
const javascript = {
  logo: <SiJavascript size={100} />,
  header: "JavaScript",
  level: "Skillful"
}
const react = {
  logo: <RiReactjsFill size={100} />,
  header: "ReactJS",
  level: "Intermediate"
}
const node = {
  logo: <SiNodedotjs size={100} />,
  header: "NodeJS",
  level: "Beginner"
}
const typescript = {
  logo: <SiTypescript size={100} />,
  header: "TypeScript",
  level: "Beginner"
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const SkillCarousel = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className={classes.SkillCarousel} data-aos="fade-up">
      <Carousel responsive={responsive} draggable={true} swipeable={true} infinite={true}>
        <SkillItem {...html} />
        <SkillItem {...css} />
        <SkillItem {...javascript} />
        <SkillItem {...react} />
        <SkillItem {...node} />
        <SkillItem {...typescript} />
      </Carousel>
    </div>
  )
}
export default SkillCarousel