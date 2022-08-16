import logoImg from '../../../assets/logo.png'

const Logo = ({ w, h }) => {
  return (
    <img
      width={w || '150px'}
      height={h || 'auto'}
      className="logo"
      src={logoImg}
      alt="Course Place Logo"
    />
  )
}

export default Logo
