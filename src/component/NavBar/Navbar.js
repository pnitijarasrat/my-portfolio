import classes from './Navbar.module.css'

const NavBar = () => {
  return (
    <nav className={classes.Navbar}>
      <div>Home</div>
      <div>About Me</div>
      <div>Skills</div>
      <div>Projects</div>
    </nav>
  )
}

export default NavBar