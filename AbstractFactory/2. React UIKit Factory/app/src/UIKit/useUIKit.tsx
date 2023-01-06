import React from 'react';
import { BootstrapKit } from './BootstrapKit';
import { MaterialKit } from './MaterialKit';
import { ComponentType, IUIKit } from './Types';
import { UIKit } from './UIKit';

const useUIKit = (type: ComponentType): IUIKit => {
    switch (type) {
        case 'bootstrap':
            return new BootstrapKit();
        case 'material':
            return new MaterialKit();
        default:
            return new UIKit();
    }
};

export default useUIKit;
