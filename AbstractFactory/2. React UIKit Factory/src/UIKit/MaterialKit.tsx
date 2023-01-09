import React from 'react';
import './MaterialKit.css';
import Button from '@mui/material/Button';
import { ButtonProps, InputProps } from './Types';
import { UIKit } from './UIKit';
import { TextField } from '@mui/material';

export class MaterialKit extends UIKit {
    Button = (props: ButtonProps = { type: 'submit', children: 'Button' }): JSX.Element => <Button {...props}></Button>;
    Input = (props: InputProps): JSX.Element => <TextField label='Outlined' variant='outlined' />;
}
