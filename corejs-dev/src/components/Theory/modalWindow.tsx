import * as React from "react";

type ModalProps = {
    isVisible: boolean;
    title: string;
    content: React.ReactNode;
    footer: React.ReactNode;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible = false, title, content, footer, onClose }) => {
    function keydownHandler ({ key }: {key: string }) {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };
  
    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });
  
    return !isVisible ? null : (
        <div key={'user-modal'} className="user-modal" onClick={onClose}>
            <div key={'user-modal-dialog'} className="user-modal-dialog" onClick={e => e.stopPropagation()}>
                <div key={'user-modal-header'} className="user-modal-header">
                    <h3 key={'user-modal-title'} className="user-modal-title">{title}</h3>
                    <button key={'modal-btn-close'} className="btn-close" onClick={onClose}></button>
                </div>
                <div key={'user-modal-body'} className="user-modal-body">
                    <div key={'user-modal-content'} className="user-modal-content">{content}</div>
                </div>
                {footer && <div key={'user-modal-footer'} className="user-modal-footer">{footer}</div>}
            </div>
      </div>
    );
};


export default Modal;