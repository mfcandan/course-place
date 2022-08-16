import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo/Logo'
import UserProfile from '../../molecules/UserProfile/UserProfile'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <Logo />
        </Link>
        <div className="items">
          <Link to="/courses">
            <div className="item">All Courses</div>
          </Link>
          <Link to="/my-courses">
            <div className="item">My Courses</div>
          </Link>

          <div className="item">
            <UserProfile
              userName="Marry Jane"
              userImg={
                'https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5edfa7c6f978e75372dc332e_profilephoto1.jpeg'
              }
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
