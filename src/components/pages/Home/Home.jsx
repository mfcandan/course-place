import CourseSearch from '../../molecules/CourseSearch/CourseSearch'
import TagManager from '../../molecules/TagManager/TagManager'
import Navbar from '../../organisms/Navbar/Navbar'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <CourseSearch />
      <div className="container">
        <TagManager />
      </div>
    </div>
  )
}

export default Home
