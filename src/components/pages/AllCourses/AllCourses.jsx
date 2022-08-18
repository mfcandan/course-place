import { useEffect, useState } from 'react'
import { useStore } from '../../../store/store'
import Card from '../../molecules/Card/Card'
import './allCourses.scss'

const AllCourses = () => {
  const { courses, searchQuery } = useStore()
  const [filteredCourses, setFilteredCourses] = useState(courses)

  useEffect(() => {
    setFilteredCourses(courses)
  }, [])

  useEffect(() => {
    if (searchQuery.length > 1) {
      const tempCourses = filteredCourses.filter((course) =>
        course.title.toLowerCase().includes(searchQuery)
      )
      setFilteredCourses(tempCourses)
    } else {
      setFilteredCourses(courses)
    }
  }, [searchQuery])

  return (
    <>
      {searchQuery.length > 1
        ? filteredCourses.map((course) => (
          <Card key={course.id} course={course} />
        ))
        : courses.map((course) => <Card key={course.id} course={course} />)}
    </>
  )
}

export default AllCourses
