import { useEffect } from 'react'
import Button from '../../atoms/Button/Button'
import './modal.scss'
import { useStore } from '../../../store/store'

const Modal = ({ children, title }) => {
  const { toggleModal } = useStore()

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        toggleModal()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = 'visible'
      document.removeEventListener('keydown', onKeyDown)
    }
  })

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <div className="modalHeader">
          <h1 className="modalTitle">{title}</h1>
          <Button variant="danger" onClick={() => toggleModal()}>
            x
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal
