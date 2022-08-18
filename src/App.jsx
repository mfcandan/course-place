import CourseDetailModal from './components/pages/CourseDetailModal/CourseDetailModal'
import Home from './components/pages/Home/Home'
import MainLayout from './components/templates/MainLayout/MainLayout'

function App() {
  return (
    <MainLayout>
      <Home />
      <CourseDetailModal />
    </MainLayout>
  )
}

export default App
