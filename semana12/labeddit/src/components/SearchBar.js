import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useContext } from 'react'
import SearchContext from '../context/SearchContext';

function SearchBar() {
    const { search, setSearch } = useContext(SearchContext)

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    return (<div>
        <InputGroup>
            <Input onChange={onChange} value={search} placeholder="Pesquisar" />
            <InputRightElement children={<Search2Icon color="gray.300" />} />
        </InputGroup>
    </div>

    )
}

export default SearchBar;