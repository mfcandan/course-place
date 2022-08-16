import './avatar.scss'

const Avatar = ({userImg}) => {
  return (
    <img
      src={userImg}
      alt="User Photo"
      className="avatar"
    />
  )
}

export default Avatar
