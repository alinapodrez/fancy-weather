import {FC} from 'react';
import './Header.scss';


export const Header:FC = () => {
    return(
        <header className="header">
            <div className='controllers'>
                <button data-testid='refresh-button' className='button bg-refresh'><span></span></button>
                <select className='button language'>
                    <option value='EN'>EN</option>
                    <option value='RU'>RU</option>
                </select>
                <button className='button temperature fah'>°F</button>
                <button className='button temperature cel active'>°C</button>
            </div>
            <form action="" method="get">
                <input placeholder="Search city or ZIP" type="search"/>
                <button className='button search' type="submit">SEARCH</button>
            </form>
        </header>
    );
}