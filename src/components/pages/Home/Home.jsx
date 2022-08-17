import TabManager from '../../molecules/TabManager/TabManager'
import CourseList from '../../organisms/CourseList/CourseList'
import './home.scss'

const Home = () => {
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
