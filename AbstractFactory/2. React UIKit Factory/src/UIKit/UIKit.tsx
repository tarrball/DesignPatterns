import React from 'react';
import { ButtonProps, InputProps, IUIKit } from './Types';

export class UIKit implements IUIKit {
    // TODO more specific JSX.Element? Some kind of button element?
    Button = (props: ButtonProps = { type: 'submit', children: 'Button' }): JSX.Element => {
        const { children: text, ...rest } = props;

        return <button {...rest}>{text}</button>;
    };
    Input = (props: InputProps): JSX.Element => <input></input>;
}
