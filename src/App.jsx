import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import MyCourses from './components/pages/MyCourses/MyCourses'
import MainLayout from './components/templates/MainLayout/MainLayout'

function App() {
  return (
    <>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/courses" element={<Home />} />
            </Route>
            <Route path="/my-courses">
              <Route index element={<MyCourses />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </>
  )
}

export default App
