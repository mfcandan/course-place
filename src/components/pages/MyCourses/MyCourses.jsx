import { useEffect, useState } from 'react'
import { useStore } from '../../../store/store'
import Card from '../../molecules/Card/Card'
import './myCourses.scss'

const MyCourses = () => {
  const { myCourses, fetchMyCourses, searchQuery } = useStore()
  const [filteredCourses, setFilteredCourses] = useState(myCourses)

  useEffect(() => {
    fetchMyCourses()
  }, [])

  useEffect(() => {
    setFilteredCourses(myCourses)
  }, [myCourses])

  useEffect(() => {
    if (searchQuery.length > 1) {
      const tempCourses = filteredCourses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery)
      )
      setFilteredCourses(tempCourses)
    } else {
      setFilteredCourses(myCourses)
    }
  }, [searchQuery])

  return (
    <>
      {searchQuery.length > 1
        ? filteredCourses.map(
          (course) =>
            course.isEnabled && <Card key={course.id} course={course} />
        )
        : myCourses.map(
          (course) =>
            course.isEnabled && <Card key={course.id} course={course} />
        )}
    </>
  )
}

export default MyCourses
