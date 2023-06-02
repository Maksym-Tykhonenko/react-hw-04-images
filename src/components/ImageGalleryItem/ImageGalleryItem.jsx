import { useState} from 'react';

import { GalleryItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';

import { Modal } from 'components/Modal/Modal';


export const ImageGalleryItem =({previewURL, tags, largeImageURL})=> {

    const [showModal, setShowModal] = useState(false);
    

    const toggleModal = () => {
        setShowModal(s => !s);
    };


        return (
            <>
                <GalleryItem onClick={toggleModal}>
                    <ImageGalleryItemImage
                        src={previewURL}
                        alt={tags} />
                </GalleryItem>
            
                {showModal &&
                    (<Modal
                        onClose={toggleModal}
                        largeImage={largeImageURL}
                        tags={tags} />
                        
                       
                    )}
                
            </>
        
        );
    };
    
