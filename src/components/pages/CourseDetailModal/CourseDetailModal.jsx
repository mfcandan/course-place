import SavingsIcon from '@mui/icons-material/Savings'
import Button from '../../atoms/Button/Button'
import Modal from '../../molecules/Modal/Modal'
import './courseDetailModal.scss'

const CourseDetailModal = ({ isModalOpen, setModalIsOpen, title, course }) => {
  return (
    isModalOpen && (
      <Modal
        isModalOpen={isModalOpen}
        setModalIsOpen={setModalIsOpen}
        title={title || 'Course Details:'}
      >
        <div className="courseDetailModal">
          <div className="top">
            <h2>Everything You Need to Know About React.js</h2>
            <img
              src="https://www.sipexe.com/assets/courses/react.jpg"
              alt="react"
            />
            <Button variant="orange" width="15rem" height="4rem">
              Enroll Now!
              <div className="price">
                150 <SavingsIcon />
              </div>
            </Button>
          </div>
          <div className="bottom">
            <div className="content">
              {course?.content ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: course?.content,
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
