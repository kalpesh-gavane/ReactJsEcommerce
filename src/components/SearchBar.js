import React, { Component } from 'react';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Autocomplete from 'react-autocomplete';
import { getCountry, matchCountry } from './dataService';


const SearchBar = () => {
    // The handler 
    const handleTag = ({ target }, fieldName) => {
        const { value } = target;
        switch (fieldName) {
            case 'tags':
                console.log('Value ', value)
                // Do your stuff here
                break;
            default:
        }
    };

    return (
        <Autocomplete
            inputProps={{ id: 'states-autocomplete' }}
            wrapperStyle={{ position: 'relative', display: 'inline-block' }}
            items={getCountry()}
            getItemValue={item => item.category_name}
            shouldItemRender={matchCountry}
            onSelect={(event) => handleTag(event, 'tags')}
            renderMenu={children => (
                <div className="menu">
                    {children}
                </div>
            )}
            renderItem={(item, isHighlighted) => (
                <div
                    className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                    key={item.abbr} >
                    {item.category_name}
                </div>
            )}
        />
    );

}

export default SearchBar;