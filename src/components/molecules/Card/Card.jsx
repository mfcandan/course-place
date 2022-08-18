import UserProfile from '../UserProfile/UserProfile'
import Button from '../../atoms/Button/Button'
import SavingsIcon from '@mui/icons-material/Savings'
import { useStore } from '../../../store/store'
import './card.scss'

const course = {
  title: 'Everything You Need to Know About Vue.js',
  content: '<h1>Hello World</h1>',
  price: 300,
  imgUrl: 'https://www.sipexe.com/assets/courses/react.jpg',
}

const Card = () => {
  const { toggleModal } = useStore()

  return (
    <div className="card">
      <div className="top">
        <img src={course.imgUrl} alt={course.title + ' image'} />
      </div>
      <hr />
      <div className="bottom">
        <div className="title">
          <h3>{course.title}</h3>
        </div>
        <div className="cardFooter">
          <div className="author">
            <UserProfile
              userName="Fatih Candan"
              userImg="https://media-exp1.licdn.com/dms/image/C4E03AQEnl0HcbfN3kA/profile-displayphoto-shrink_800_800/0/1617886445977?e=1666224000&v=beta&t=WqkhaSOBMphRet06ZPupegZzFS6aaHb1jJJYGQgBs8s"
            />
          </div>
          {course.price ? (
            <div className="price">
              {course.price} <SavingsIcon />
            </div>
          ) : (
            <div className="price">Free</div>
          )}
        </div>
        <Button
          variant="success"
          width="100%"
          onClick={() => toggleModal(course)}
        >
          More Details
        </Button>
      </div>
    </div>
  )
}

export default Card
