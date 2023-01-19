import classes from './ProjectContent.module.css'
import Content from './Content'
import myLedgerImg from './../IMG/MyLedger.png'
import gameboyImg from './../IMG/gameboy.png'
import tutorFinderImg from './../IMG/tutorFinder.png'

const myLedger = {
  header: 'MyLedger',
  desc: 'A daily ledger app, gives you ability to track your incomes and expenses and data visualization. Built by React and stored data in firebase. Note: For IPhone only (Personal Use)',
  img: <img src={myLedgerImg} alt='MyLedger' width={'60%'} />
}

const gameboy = {
  header: 'Gameboy Theme Portfolio',
  desc: 'My first web application, portfolio in a theme of an old school gameboy. Build by HTML, CSS, and JavaScript cause I was just started learning React at that time.',
  img: <img src={gameboyImg} alt='Gameboy Portfolio' width={'100%'} />
}

const tutorFinder = {
  header: 'tutorFinder Project',
  desc: 'A third year project at university, a middleman platform for students and tutor. Built by HTML, CSS, Javascript, PHP, and SQL. Use PHPMyAdmin as a database.',
  img: <img src={tutorFinderImg} alt='tutorFinder Project' width={'100%'} />
}

const ProjectContent = () => {
  return (
    <div className={classes.ProjectContent}>
      <Content {...myLedger} />
      <Content {...gameboy} />
      <Content {...tutorFinder} />
    </div>
  )
}

export default ProjectContent