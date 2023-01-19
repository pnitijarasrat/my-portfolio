import AContent from "./Content"
import hackerBadge from './../IMG/problemsolving.png'
import tsCer from './../IMG/typescriptCer.png'
import classes from './AchievementContent.module.css'

const hackerRank = {
  header: 'HackerRank Problem Solving Badge',
  detail: 'Currently 4 stars',
  img: <img src={hackerBadge} alt='Problem Solving Badge' width={'80%'} />
}
const typeScriptCer = {
  header: 'Mastering TypeScript - 2022',
  detail: 'Udemy TypeScript Course Certification',
  img: <img src={tsCer} alt='TS Certification' width={'100%'} />

}

const AchievementContent = () => {
  return (
    <div className={classes.AchievementContent}>
      <AContent {...hackerRank} />
      <AContent {...typeScriptCer} />
    </div>
  )
}

export default AchievementContent