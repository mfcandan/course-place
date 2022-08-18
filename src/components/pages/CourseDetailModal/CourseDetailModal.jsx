import SavingsIcon from '@mui/icons-material/Savings'
import Button from '../../atoms/Button/Button'
import Modal from '../../molecules/Modal/Modal'
import { useStore } from '../../../store/store'
import { authors } from '../../../mock/mockData'
import UserProfile from '../../molecules/UserProfile/UserProfile'
import './courseDetailModal.scss'

const CourseDetailModal = ({ title }) => {
  const { courseDetailModal, enrollCourse, user } = useStore()
  const author = authors.find(
    (courseAuthor) => courseAuthor?.id === courseDetailModal?.course?.authorId
  )

  const handleEnrollCourse = () => {
    if (user.hubPoints >= courseDetailModal.course.price) {
      enrollCourse(courseDetailModal.course.price, courseDetailModal.course.id)
    }
  }

  return (
    courseDetailModal.isOpen && (
      <Modal title={title || ''}>
        <div className="courseDetailModal">
          <div className="top">
            <h2>{courseDetailModal.course.title}</h2>
            <img
              className="courseImg"
              src={courseDetailModal.course.imgUrl}
              alt="react"
            />
            <div className="info">
              {author && (
                <UserProfile userName={author.name} userImg={author.imgUrl} />
              )}
              <div>
                {!courseDetailModal.course.isEnabled ? (
                  <Button
                    variant={
                      parseInt(courseDetailModal.course.price) <= user.hubPoints
                        ? 'orange'
                        : 'disable'
                    }
                    width="15rem"
                    height="4rem"
                    onClick={() => handleEnrollCourse()}
                  >
                    Enroll Now!
                    {courseDetailModal.course.price > 0 && (
                      <div className="price">
                        {courseDetailModal.course.price} <SavingsIcon />
                      </div>
                    )}
                  </Button>
                ) : (
                  <div className="enable">Enrolled</div>
                )}
              </div>
            </div>
            {user.hubPoints < parseInt(courseDetailModal.course.price) &&!courseDetailModal.course.isEnabled && (
              <h3>Not Enough Hub Points :(</h3>
            )}
          </div>
          <div className="bottom">
            <div className="content">
              {courseDetailModal.course?.content ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: courseDetailModal.course?.content,
                  }}
                />
              ) : (
                <h3>Content</h3>
              )}
            </div>
          </div>
        </div>
      </Modal>
    )
  )
}

export default CourseDetailModal
