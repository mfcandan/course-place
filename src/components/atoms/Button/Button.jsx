import './button.scss'

const Button = ({ children, variant, isSelected, onClick }) => {
  return (
    <button
      onClick={() => onClick(children)}
      className={`button ${variant || 'primary'} ${isSelected && 'selected'}`}
    >
      {children}
    </button>
  )
}

export default Button
