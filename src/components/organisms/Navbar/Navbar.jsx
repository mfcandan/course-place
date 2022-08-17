import Logo from '../../atoms/Logo/Logo'
import TotalPoint from '../../molecules/TotalPoint/TotalPoint'
import UserProfile from '../../molecules/UserProfile/UserProfile'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Logo />
        <div className="items">
          <div className="item">
            <TotalPoint total={700} />
          </div>
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
