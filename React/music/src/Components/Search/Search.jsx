import React from 'react';
import './Search.css'
import Chart from '../Chart/Chart'


const Search = ({value, onChange, searchData}) => {
    return (
        <div className="search">
            <form method="post" className="search__form" onSubmit={searchData}>
                <input type="text" className="search__input" placeholder="Search music" value={value} onChange={onChange} name='searchValue'/>
                <input type="submit" value="search" className="search__btn"/>
            </form>
            <Chart/>
        </div>
    );
};

export default Search;
