import { allCoursesData } from '../../../mock/mockData'
import Card from '../../molecules/Card/Card'
import './allCourses.scss'

const AllCourses = () => {
  return (
    <>
      {allCoursesData.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </>
  )
}

export default AllCourses
