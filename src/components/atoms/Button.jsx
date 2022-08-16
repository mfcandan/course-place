import { useState } from 'react'
import './button.scss'

const Button = ({ children, variant }) => {
  const [isSelected, setIsSelected] = useState()

  return (
    <button
      onClick={() => setIsSelected(!isSelected)}
      className={`button ${variant || 'primary'} ${isSelected && 'selected'}`}
    >
      {children}
    </button>
  )
}

export default Button
