import ProgressBar from 'react-scroll-progress-bar'
import classes from './Progress.module.css'

const Progress = () => {
  return (
    <div className={classes.Progress}>
      <ProgressBar
        bgcolor='#54c465' />
    </div>
  )
}

export default Progress