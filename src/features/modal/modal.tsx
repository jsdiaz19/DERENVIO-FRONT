import './modal.css'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    actionButton: () => void;
    children: React.ReactNode;
  }

  /**
   * Componente modal
   * @param param0 
   * @returns 
   */
function Modal({ isOpen, onClose, actionButton, children}: ModalProps) {
    return !isOpen ? null : (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                
                <div className='footer'>
                    <button className="btn"  onClick={actionButton} >Aceptar</button>
                    <button className="btn" type='button' onClick={onClose} >Cancelar</button>
                </div>
            </div>
            
        </div>
    )
}

export default Modal;