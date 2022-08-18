import { allCoursesData } from '../../../mock/mockData'
import Card from '../../molecules/Card/Card'
import './myCourses.scss'

const MyCourses = () => {
  return (
    <>
      {allCoursesData.map(
        (course) => course.isEnabled && <Card key={course.id} course={course} />
      )}
    </>
  )
}

export default MyCourses
