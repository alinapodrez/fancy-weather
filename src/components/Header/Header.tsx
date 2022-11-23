import {FC} from 'react';
import './Header.scss';
import {SelectButton} from './SelectButton/SelectButton';
import {SearchForm} from './SearchForm/SearchForm';

export const Header:FC = () => {
    return(
        <header className="header">
            <div className='controllers'>
                <button data-testid='refresh-button' className='button bg-refresh'><span></span></button>
                <SelectButton/>
                <button className='button temperature fah'>°F</button>
                <button className='button temperature cel active'>°C</button>
            </div>
            <SearchForm/>
        </header>
    );
}