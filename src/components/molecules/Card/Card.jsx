import UserProfile from '../UserProfile/UserProfile'
import Button from '../../atoms/Button/Button'
import SavingsIcon from '@mui/icons-material/Savings'
import './card.scss'

const Card = () => {
  return (
    <div className="card">
      <div className="top">
        <img
          src="https://www.sipexe.com/assets/courses/react.jpg"
          alt="react-course"
        />
      </div>
      <hr />
      <div className="bottom">
        <div className="title">
          <h3>Everything You Need to Know About React.js </h3>
        </div>
        <div className="cardFooter">
          <div className="author">
            <UserProfile
              userName="Fatih Candan"
              userImg="https://media-exp1.licdn.com/dms/image/C4E03AQEnl0HcbfN3kA/profile-displayphoto-shrink_800_800/0/1617886445977?e=1666224000&v=beta&t=WqkhaSOBMphRet06ZPupegZzFS6aaHb1jJJYGQgBs8s"
            />
          </div>
          <div className="price">
              150 <SavingsIcon />
          </div>
        </div>
        <Button variant="success" width="100%">
          More Details
        </Button>
      </div>
    </div>
  )
}

export default Card
