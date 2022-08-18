import { useStore } from '../../../store/store'
import Card from '../../molecules/Card/Card'
import './allCourses.scss'

const AllCourses = () => {
  const { courses } = useStore()

  return (
    <>
      {courses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </>
  )
}

export default AllCourses
