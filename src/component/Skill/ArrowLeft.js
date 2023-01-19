import classes from './Arrow.module.css'
import { CgArrowLeftR } from 'react-icons/cg'
const ArrowLeft = ({ onClick, ...rest }) => {
  return (
    <div onClick={() => { onClick() }} className={classes.Arrow}>
      <CgArrowLeftR />
    </div>
  )
}

export default ArrowLeft