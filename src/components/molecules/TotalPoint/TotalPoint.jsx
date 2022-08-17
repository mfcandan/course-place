import SavingsIcon from '@mui/icons-material/Savings'
import './totalPoints.scss'

const TotalPoint = ({total}) => {
  return (
    <div className='totalPoints'>
      <h5>Hub Points:</h5>
      <div className="price">
        {total} <SavingsIcon />
      </div>
    </div>
  )
}

export default TotalPoint
