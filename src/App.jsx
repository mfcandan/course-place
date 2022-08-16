import Home from './components/pages/Home/Home'
import MainLayout from './components/templates/MainLayout/MainLayout'

function App() {
  return (
    <div className="app">
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  )
}

export default App
