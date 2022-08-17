import Navbar from '../../organisms/Navbar/Navbar'
import CourseSearch from '../../molecules/CourseSearch/CourseSearch'
import Footer from '../../organisms/Footer/Footer'
import './mainLayout.scss'

const MainLayout = ({ children }) => {
  return (
    <main className="layout">
      <Navbar />
      <CourseSearch />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
