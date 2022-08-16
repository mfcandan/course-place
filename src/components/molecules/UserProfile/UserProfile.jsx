import Avatar from '../../atoms/Avatar/Avatar'
import './userProfile.scss'

const UserProfile = ({ userName, userImg }) => {
  return (
    <div className="userProfile">
      <Avatar userImg={userImg} />
      <div>{userName}</div>
    </div>
  )
}

export default UserProfile
