import React from 'react';
import ProfileCard from '../components/admin/profileCard';
import {getByTestId, render} from '@testing-library/react';

let container = null;

describe('testing profileCard.js' ,()=>{
    beforeEach(()=>{
        container = render(<ProfileCard/>).container;
    });

    it('should render profilecard component ',()=>{
        expect(getByTestId(container, 'outer-div-tag')).toBeTruthy();
    });


    it('should render image ',()=>{
        expect(getByTestId(container,'icon')).toBeTruthy();
    });

    it('should render text in the h1 tag ',()=>{
        expect(getByTestId(container,'h1-tag').textContent).toBe('Welcome Back');
    });

});
