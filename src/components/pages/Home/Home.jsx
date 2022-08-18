import { useEffect } from 'react'
import { useStore } from '../../../store/store'
import TabManager from '../../molecules/TabManager/TabManager'
import CourseList from '../../organisms/CourseList/CourseList'
import './home.scss'

const Home = () => {
  const { fetchCourses } = useStore()

  useEffect(() => {
    fetchCourses()
  }, [])
  
  return (
    <div className="home">
      <div className="container">
        <TabManager />
        <CourseList />
      </div>
    </div>
  )
}

export default Home
