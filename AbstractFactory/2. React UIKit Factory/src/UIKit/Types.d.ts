import React from 'react';

type ComponentType = 'bootstrap' | 'material';

interface IUIKit {
    Button(props: ButtonProps): JSX.Element;
    Input(props: InputProps): JSX.Element;
}

interface ButtonProps {
    children: string;
    type?: 'button' | 'reset' | 'submit' = 'submit';
    onClick?: () => void;
}

interface InputProps {
    type?: string;
}

export { ComponentType, ButtonProps, InputProps, IUIKit };
