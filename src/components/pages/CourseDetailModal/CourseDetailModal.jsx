import SavingsIcon from '@mui/icons-material/Savings'
import Button from '../../atoms/Button/Button'
import Modal from '../../molecules/Modal/Modal'
import { useStore } from '../../../store/store'
import { authors } from '../../../mock/mockData'
import UserProfile from '../../molecules/UserProfile/UserProfile'
import './courseDetailModal.scss'

const CourseDetailModal = ({ title }) => {
  const { courseDetailModal } = useStore()
  const author =
    courseDetailModal?.course?.authorId &&
    authors.find(
      (courseAuthor) => courseAuthor?.id === courseDetailModal?.course?.authorId
    )

  return (
    courseDetailModal.isOpen && (
      <Modal title={title || ''}>
        <div className="courseDetailModal">
          <div className="top">
            <h2>{courseDetailModal.course.title}</h2>
            <img
              className="courseImg"
              src={
                courseDetailModal.course.imgUrl
                  ? courseDetailModal.course.imgUrl
                  : 'https://www.sipexe.com/assets/courses/react.jpg'
              }
              alt="react"
            />
            <div className="info">
              {author && (
                <UserProfile userName={author.name} userImg={author.imgUrl} />
              )}
              <div>
                {!courseDetailModal.course.isEnabled ? (
                  <Button variant="orange" width="15rem" height="4rem">
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
