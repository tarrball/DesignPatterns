import React from 'react';
import { BootstrapKit } from './BootstrapKit';
import { MaterialKit } from './MaterialKit';
import { ComponentType, IUIKit } from './Types';
import { UIKit } from './UIKit';

const useUIKit = (type: ComponentType): IUIKit => {
    switch (type) {
        case 'Bootstrap':
            return new BootstrapKit();
        case 'Material':
            return new MaterialKit();
        default:
            return new UIKit();
    }
};

export default useUIKit;
