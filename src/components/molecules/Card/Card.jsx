import UserProfile from '../UserProfile/UserProfile'
import Button from '../../atoms/Button/Button'
import SavingsIcon from '@mui/icons-material/Savings'
import { useStore } from '../../../store/store'
import { authors } from '../../../mock/mockData'
import './card.scss'

const Card = ({ course }) => {
  const { toggleModal } = useStore()
  const author = authors.find(
    (courseAuthor) => courseAuthor.id === course.authorId
  )

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
            <UserProfile userName={author.name} userImg={author.imgUrl} />
          </div>
          {!course.isEnabled ? (
            course.price ? (
              <div className="price">
                {course.price} <SavingsIcon />
              </div>
            ) : (
              <div className="price">Free</div>
            )
          ) : (
            <div className="enable">Enrolled</div>
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
