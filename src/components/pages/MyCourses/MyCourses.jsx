import { useEffect } from 'react'
import { useStore } from '../../../store/store'
import Card from '../../molecules/Card/Card'
import './myCourses.scss'

const MyCourses = () => {
  const { myCourses, fetchMyCourses } = useStore()

  useEffect(() => {
    fetchMyCourses()
  }, [])

  return (
    <>
      {myCourses.map(
        (course) => course.isEnabled && <Card key={course.id} course={course} />
      )}
    </>
  )
}

export default MyCourses
