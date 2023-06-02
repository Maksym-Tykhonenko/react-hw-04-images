import { useState } from "react";
import { ImSearch } from "react-icons/im";

import {Header, Form, Input, Btn, BtnLable} from './Searchbar.styled';

export const Searchbar =({onSubmit})=> {

    const [query, setQuery] = useState('');

    const handleInputSearch = (e) => {
        setQuery(e.currentTarget.value)
    };

    const hendleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
        recet();
    };

    const recet = () => {
        setQuery('');
    };
 
        return (
            <Header>
                <Form
                    onSubmit={hendleFormSubmit}>
                    <Btn type="submit">
                        
                        <BtnLable><ImSearch /></BtnLable>
                    </Btn>

                    <Input
                        onChange={handleInputSearch}
                        value={query}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </Form>
            </Header>
        );
};