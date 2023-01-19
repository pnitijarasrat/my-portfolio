import './App.css';
import NavBar from './component/NavBar/Navbar';
import Progress from './component/ProgressBar/ProgressBar';
import Home from './component/HomePage/Home';
import AboutMe from './component/AboutMe/AboutMe';
import Skill from './component/Skill/Skill';
import SkillCarousel from './component/Skill/SkillCarousel';
import Project from './component/Project/Project';
import ProjectContent from './component/Project/ProjectContent';
import Achievement from './component/Achievement/Achievement';
import AchievementContent from './component/Achievement/AchievementContent';

function App() {
  return (
    <>
      <Progress />
      <Home />
      <AboutMe />
      <Skill />
      <SkillCarousel />
      <Project />
      <ProjectContent />
      <Achievement />
      <AchievementContent />
    </>
  );
}

export default App;
