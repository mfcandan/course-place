import './searchInput.scss'
import SearchIcon from '@mui/icons-material/Search'

const SearchInput = () => {
  return (
    <div className="searchInput">
      <input placeholder="Search your favorite course" />
      <div className="searchBtn">
        <SearchIcon />
      </div>
    </div>
  )
}

export default SearchInput
