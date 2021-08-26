import React, { useState } from "react";
import "../../../index.css";
import { Input } from "antd";
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';
import { productBaseURL } from '../../../config/baseUrl';
import { AutoComplete } from 'antd';


const { Search } = Input;
const SearchBar = ({ styleName }) => {
    const [suggestion, setSuggestion] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState([]);

    let searchTimer;
    let searchKeyword;
    const autoSuggest = (searchInputValue) => {
        clearTimeout(searchTimer);
        searchKeyword = searchInputValue;
        searchTimer = setTimeout(async () => {
            console.log(searchKeyword);
            let suggestedSearched = await axios.get(`${productBaseURL}/api/v1/fetch-auto-complete-suggestions/`, { params: { searchKeyword } });
            console.log('suggestedSearched', suggestedSearched.data);
            setSuggestion(suggestedSearched.data);
        }, 300)
    }

    const onSearch = (searchText) => {
        autoSuggest(searchText);
    };

    const onSelect = async (data) => {
        console.log('onSelect', data);
        let searchedProducts = await axios.get(`${productBaseURL}/api/v1/search-products`, { params: { searchKeyword: data } });
        console.log('searched product', searchedProducts.data);
        setSearchedProducts(searchedProducts.data);
    };


    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            marginTop: "2.8%",
            // background: "blue",
        }}>
            {/* <Search
                style={{ borderRadius: 5, height: 35, width: "100%", minWidth: "50%" }}
                placeholder="Search"
                onSearch={(value) => console.log(value)}
                className='searchBar'
            /> */}
            <div className="input-group mb-3">
                {/* <input
                 type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"
                    onChange={autoSuggest}
                /> */}

                <AutoComplete
                    options={suggestion}
                    className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"
                    onSelect={onSelect}
                    onSearch={onSearch}
                    style={{ textAlign: 'left' }}

                />

                <div style={{
                    display: "flex",
                    minWidth: 50,
                    borderTopRightRadius: 4,
                    borderBottomRightRadius: 4,
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#521C87",
                    cursor: "pointer",
                    fontWeight: "bold",
                    color: "white"
                }}>
                    <BiSearch style={{ display: "flex", color: "white", fontSize: 18, cursor: 'pointer' }} />
                </div>
            </div>

        </div>
    );
};

export default SearchBar;
