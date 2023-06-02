import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from "react-icons/fi";


import { Overlay, ModalPopUp, Btn, Icon } from './Modal.styled';


const modalRoot = document.querySelector('#modal-root');

export const Modal =({ largeImage, tags, onClose })=> {

    useEffect(() => {
        const handleEscPress = (e) => {
            console.log(e.code)
            if (e.code === 'Escape') {
                onClose();
            };
        };
        
        window.addEventListener('keydown', handleEscPress);

        return () => {
            window.removeEventListener('keydown', handleEscPress)
        }
    });
    
    const handleBackdropClick = (e) => {

        if (e.currentTarget === e.target) {
            onClose();
        };

    };

        return createPortal (
            <Overlay
                onClick={handleBackdropClick}>
                <ModalPopUp >
                    <Btn type='button' onClick={onClose}><Icon><FiX /></Icon></Btn>
                    <img src={largeImage} alt={tags} width='700' />
                    
                </ModalPopUp>
            </Overlay>,
            modalRoot
        );
    };

