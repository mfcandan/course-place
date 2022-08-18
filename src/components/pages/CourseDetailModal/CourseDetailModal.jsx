import SavingsIcon from '@mui/icons-material/Savings'
import Button from '../../atoms/Button/Button'
import Modal from '../../molecules/Modal/Modal'
import { useStore } from '../../../store/store'
import './courseDetailModal.scss'

const CourseDetailModal = ({ title }) => {
  const { courseDetailModal } = useStore()

  return (
    courseDetailModal.isOpen && (
      <Modal title={title || ''}>
        <div className="courseDetailModal">
          <div className="top">
            <h2>{courseDetailModal.course.title}</h2>
            <img
              src={
                courseDetailModal.course.imgUrl
                  ? courseDetailModal.course.imgUrl
                  : 'https://www.sipexe.com/assets/courses/react.jpg'
              }
              alt="react"
            />
            <Button variant="orange" width="15rem" height="4rem">
              Enroll Now!
              {courseDetailModal.course.price > 0 && (
                <div className="price">
                  {courseDetailModal.course.price} <SavingsIcon />
                </div>
              )}
            </Button>
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
