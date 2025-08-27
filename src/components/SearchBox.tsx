'use client';

import * as React from 'react';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

import { getPosts, searchPosts } from '@/redux/features/postsSlice';
import { AppDispatch } from '@/redux/store';
import debounce from '@/utils/debounce';

interface Props {
    placeholder?: string;
}

const SearchBox: React.FC<Props> = ({ placeholder }) => {
    const dispatch: AppDispatch = useDispatch();

    const [searchText, setSearchText] = React.useState('');

    const search = async (query: string) => {
        dispatch(searchPosts(query));
    }

    const debouncedSearch = debounce(search, 1000);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value.trim();
        setSearchText(value);
        if (value) {
            debouncedSearch(value);
        } else {
            dispatch(getPosts({ page: 1, limit: 25 }));
        }
    };
    
    return (
        <TextField 
            value={searchText}
            onChange={handleSearch}
            placeholder={placeholder ?? ''}
            size="small"
            fullWidth
        />    
    );
};

export default SearchBox;