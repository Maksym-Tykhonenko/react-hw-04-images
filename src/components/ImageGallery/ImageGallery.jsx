import { useState, useEffect } from "react";

import { getImgs } from "servises/api";
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";

import {GallaryList } from './ImageGallery.styled';


export const ImageGallery =({query})=> {

    const [imgs, setImgs] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [, setError] = useState(null);
    
    useEffect(() => {
        setImgs([]);
        setPage(1);
    }, [query]);

    useEffect(() => {
        setLoading(true);

        getImgs(query, page)
            .then((fotos) => {
                setImgs((state) => ([
                    ...state, ...fotos.hits
                ])
                )
            })
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [page, query]);
    
    const onLoadMore = () => {
        setPage(prevPage => prevPage + 1)
    };

       return (
           <>
               
               <GallaryList>
               
                   {imgs.map(({ id, previewURL, tags, largeImageURL }) => {
                       return <ImageGalleryItem
                           key={id}
                           previewURL={previewURL}
                           tags={tags}
                           largeImageURL={largeImageURL}
                       />
                   })}
               
               </GallaryList>
               
               {loading && <Loader />}<br />
               {imgs.length > 0 && <Button loadMore={onLoadMore} />}
          </>
          
       );
    };
