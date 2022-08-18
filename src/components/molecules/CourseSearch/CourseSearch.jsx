import { useStore } from '../../../store/store'
import SearchInput from '../../atoms/SearchInput/SearchInput'
import './courseSearch.scss'

const CourseSearch = () => {
  const { searchQuery, setSearchQuery} = useStore()

  return (
    <div className="courseSearch">
      <div className="container">
        <h1>Courses </h1>
        <SearchInput onChange={setSearchQuery} value={searchQuery} />
      </div>
    </div>
  )
}

export default CourseSearch
