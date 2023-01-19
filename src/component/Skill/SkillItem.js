import classes from './SkillItem.module.css'

const SkillItem = (props) => {
  return (
    <div className={classes.SkillItem}>
      {props.logo}
      <h1>{props.header}</h1>
      <p>{props.level}</p>
    </div>
  )
}

export default SkillItem