import Logo from '../../atoms/Logo/Logo'
import TotalPoint from '../../molecules/TotalPoint/TotalPoint'
import UserProfile from '../../molecules/UserProfile/UserProfile'
import { useStore } from '../../../store/store'
import './navbar.scss'

const Navbar = () => {
  const { user } = useStore()

  return (
    <nav className="navbar">
      <div className="container">
        <Logo />
        <div className="items">
          <div className="item">
            <TotalPoint total={user.hubPoints} />
          </div>
          <div className="item">
            <UserProfile userName={user.name} userImg={user.imgUrl} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
