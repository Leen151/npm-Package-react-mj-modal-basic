import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  primaryButton, 
  secondaryButton 
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}> 
        <button className="modal-close" onClick={onClose} aria-label="Fermer la modale">
          ✖
        </button>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>
        {(primaryButton || secondaryButton) && (
          <div className="modal-buttons">
            {secondaryButton && (
              <button className="modal-button secondary" onClick={secondaryButton.onClick} >
                {secondaryButton.text}
              </button>
            )}
            {primaryButton && (
              <button className="modal-button primary" onClick={primaryButton.onClick} >
                {primaryButton.text}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }),
  secondaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  })
}

Modal.defaultProps = {
  primaryButton: null,
  secondaryButton: null
}

export default Modal;