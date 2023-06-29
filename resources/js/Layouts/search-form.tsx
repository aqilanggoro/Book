// @flow
import * as React from 'react';
import {InputAdornment, TextField} from "@mui/material";
import {Search} from "@mui/icons-material";
import {useForm, usePage} from '@inertiajs/react'
import {useEffect, useState} from "react";

type Props = {
    keyword : string
};
export const SearchForm = () => {
    const { query: {keyword = ""} } = usePage().props as any;
    const [inp, setInp] = useState(keyword);
    const { get, data , setData} = useForm<Props>(
        keyword
    );
    useEffect(()=>{
        setData('keyword', keyword);
    },[keyword]);
    const handleSubmit = (e) => {
        e.preventDefault();
        get(route("search"))
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                onChange={(e)=>setData('keyword', e.target.value)}
                fullWidth
                value={data.keyword??""}
                placeholder='Cari judul, penulis & penerbit'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position='start'>
                            <Search/>
                        </InputAdornment>
                    )
                }}
                size='small'
            />
        </form>
    );
};
