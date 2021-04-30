import React, { useCallback, useEffect, useState } from "react";
// React bootstrap
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Router
import { useHistory } from "react-router-dom";
// Hook Query Params
import useQuery from "../../hooks/useQuery";
// Search Bar
import { ReactComponent as SearchIcon } from '../../assets/img/search-outline.svg';

// Search Bar Component
const SearchBar = () => {
    // Router
    const history = useHistory();
    // Query Params
    const queryParams = useQuery();
    // Search
    const [search, setSearch] = useState('');
    // Handle On Change Input
    const handleOnChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearch(value);
    }, [setSearch])
    // Handle Submit Form
    const handleSubmitForm = (e: React.SyntheticEvent) => {
        // Prevent Event
        e.preventDefault();
        e.stopPropagation();
        // Query Params
        let searchQ = '';
        if (search) {
            searchQ = search;
        }
        const queryParams = new URLSearchParams({ search: searchQ })
        // Navigate
        history.push({
            pathname: '/items',
            search: queryParams.toString()
        })
    }

    // Fetch Data
    const fectchData = useCallback(() => {
        console.log('fecth')
        const searchQ = queryParams.get('search') ? queryParams.get('search') : '';
        if (searchQ && searchQ !== '') {
            setSearch(searchQ)
        }
    }, [queryParams, setSearch])
    useEffect(() => {
        fectchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Form onSubmit={handleSubmitForm}>
            <InputGroup>
                <FormControl
                    name="search-bar-input"
                    id="search-bar-input"
                    value={search}
                    onChange={handleOnChangeInput}
                    placeholder="Nunca dejes de buscar"
                    aria-label="Nunca dejes de buscar"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="gray-100" type="submit">
                        <SearchIcon />
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>

    )
}


export default SearchBar;
