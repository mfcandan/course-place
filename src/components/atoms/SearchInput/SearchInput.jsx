import './searchInput.scss'
import SearchIcon from '@mui/icons-material/Search'

const SearchInput = ({ onChange, value }) => {
  return (
    <div className="searchInput">
      <input
        onChange={e => onChange(e.target.value)}
        value={value}
        placeholder="Search your favorite course"
      />
      <div className="searchBtn">
        <SearchIcon />
      </div>
    </div>
  )
}

export default SearchInput
