import { useEffect } from 'react'
import Button from '../../atoms/Button/Button'
import './modal.scss'

const Modal = ({ children, isModalOpen, setModalIsOpen, title }) => {
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

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen)
  }

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
