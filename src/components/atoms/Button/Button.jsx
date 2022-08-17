import './button.scss'

const Button = ({
  children,
  variant,
  isSelected,
  onClick,
  isBold,
  width,
  height,
}) => {
  return (
    <button
      onClick={() => onClick(children)}
      width={width}
      style={{ width: width || 'auto', height: height || 'auto' }}
      className={`button ${variant || 'primary'} ${isSelected && 'success'} ${
        isBold && 'bold'
      }`}
    >
      {children}
    </button>
  )
}

export default Button
