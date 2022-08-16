import SearchInput from '../../atoms/SearchInput/SearchInput'
import './courseSearch.scss'

const CourseSearch = () => {
  return (
    <div className="courseSearch">
      <div className="container">
        <h1>Courses </h1>
        <SearchInput />
      </div>
    </div>
  )
}

export default CourseSearch
