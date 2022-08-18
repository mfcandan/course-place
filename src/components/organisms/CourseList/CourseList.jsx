import { courseTabs } from '../../../constants/courseTabs'
import { useStore } from '../../../store/store'
import AllCourses from '../../pages/AllCourses/AllCourses'
import MyCourses from '../../pages/MyCourses/MyCourses'
import './courseList.scss'

const CourseList = () => {
  const { selectedTab } = useStore()

  const selectedCourseList = () => {
    switch (selectedTab) {
      case courseTabs.allCourses:
        return <AllCourses />
      case courseTabs.myCourses:
        return <MyCourses />
      default:
        break
    }
  }

  return <article className="courseList">{selectedCourseList()}</article>
}

export default CourseList
