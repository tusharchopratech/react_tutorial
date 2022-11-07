import React from 'react';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import { searchProducts } from '../rest/SearchProductsAPI';
import { ContentPasteOffOutlined } from '@mui/icons-material';

export default function SearchProduct() {

    const [productsText, setProductsText] = useState([]);
    const [products, setProducts] = useState([]);

    const fetchData = async (searchString) => {
        try {
            let response = await searchProducts({ q: searchString });
            if (response.status === 200) {

                let productsArray = response.data.products;
                // console.log(productsArray);
                let tmp = [];
                let tmp2 = [];
                
                for (let i = 0; i < productsArray.length; i++) {
                    let data = productsArray[i].title.substring(0, 25) + " | " + productsArray[i].description.substring(0, 50) + " | " + productsArray[i].id;
                    tmp.push(data);
                    tmp2.push(productsArray[i]);
                }
                setProductsText(tmp);
                setProducts(tmp2);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleSearch = (event) => {
        let searchText = event.target.value;
        if (searchText.length > 2) {
            fetchData(searchText);
        }
    };

    const handleSelectedValue = (event, value) => {
        console.log(value);
        let index = productsText.indexOf(value);
        console.log(products[index]);
    };

    return (
        <div>
            <Autocomplete
                disablePortal
                options={productsText}
                sx={{ width: '100%' }}
                onChange={(event, value) => handleSelectedValue(event, value)}
                renderInput={(params) => <TextField {...params} label="Movie" onChange={event => handleSearch(event)} />}
            />
        </div>
    )
}
