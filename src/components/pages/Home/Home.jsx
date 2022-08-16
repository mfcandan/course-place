import CourseSearch from '../../molecules/CourseSearch/CourseSearch'
import Navbar from '../../organisms/Navbar/Navbar'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <CourseSearch />
      <div className="container">
        
      </div>
    </div>
  )
}

export default Home
