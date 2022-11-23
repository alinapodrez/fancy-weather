import {render, logDOM} from '@testing-library/react';
import {SelectButton} from './SelectButton';

describe ('SelectButton', ()=>{
    it ('should render select button', ()=>{
        render(<SelectButton/>)
        logDOM()
    })
    // it ('should render button refresh', ()=>{
    //     render(<SelectButton/>)
    //     expect(screen.getByTestId('refresh-button')).toBeVisible()
    // })
})