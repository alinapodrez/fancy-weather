import {FC} from 'react';


export const SearchForm:FC = () => {
    return(
        <form action="" method="get">
            <input placeholder="Search city or ZIP" type="search"/>
            <span></span>
            <button className='button search' type="submit">SEARCH</button>
        </form>
    );
}