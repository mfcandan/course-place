import './button.scss'

const Button = ({ children, variant }) => {
  return (
    <button className={`button ${variant || 'primary'}`}>{children}</button>
  )
}

export default Button
