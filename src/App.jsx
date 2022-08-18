import { useState } from 'react'
import Button from './components/atoms/Button/Button'
import CourseDetailModal from './components/pages/CourseDetailModal/CourseDetailModal'
import Home from './components/pages/Home/Home'
import MainLayout from './components/templates/MainLayout/MainLayout'

function App() {
  const [isModalOpen, setModalIsOpen] = useState(false)

  return (
    <MainLayout>
      {isModalOpen && (
        <CourseDetailModal
          isModalOpen={isModalOpen}
          setModalIsOpen={setModalIsOpen}
        />
      )}
      <Button
        variant="secondary"
        onClick={() => setModalIsOpen(true)}
        type="button"
      >
        Show the modal
      </Button>
      <Home />
    </MainLayout>
  )
}

export default App
