import { useState } from "react";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";


export const App = () => {

  const [query, setQuery] = useState('');

  const typeQueryInState = (query) => {
    setQuery(query);
  };

  return (
    <>
      <Searchbar onSubmit={typeQueryInState} />
      <ImageGallery query={query} />
    
    </>
  );
  
};
