import CourseSearch from '../../molecules/CourseSearch/CourseSearch'
import Navbar from '../../organisms/Navbar/Navbar'
import './myCourses.scss'

const MyCourses = () => {
  return (
    <div className="myCourses">
      <Navbar />
      <CourseSearch />
      <div className="container">

      </div>
    </div>
  )
}

export default MyCourses
