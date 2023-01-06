import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './BootstrapKit.css'
import { ButtonProps, InputProps } from './Types';
import { UIKit } from './UIKit';

export class BootstrapKit extends UIKit {
    Button = (props: ButtonProps = { type: 'submit', children: 'Button' }): JSX.Element => (
        <button {...props} className='btn btn-primary'></button>
    );
    Input = (props: InputProps): JSX.Element => (
        <input
            className='form-control'
            type='text'
            placeholder='Default input'
            aria-label='default input example'
        ></input>
    );
}
