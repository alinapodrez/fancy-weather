import {render, screen, logDOM} from '@testing-library/react';
import {Header} from './Header';

describe ('Header', ()=>{
    it ('should render header', ()=>{
        render(<Header/>)
        logDOM()
    })
    it ('should render button refresh', ()=>{
        render(<Header/>)
        expect(screen.getByTestId('refresh-button')).toBeVisible()
    })
})