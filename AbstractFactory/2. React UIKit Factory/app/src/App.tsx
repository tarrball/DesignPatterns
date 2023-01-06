import React, { useState } from 'react';
import './App.css';
import { ComponentType } from './UIKit/Types';
import useUIKit from './UIKit/useUIKit';

function App() {
    const [componentType, setComponentType] = useState<ComponentType>('material');

    const toggleUIKit = (currentType: ComponentType) => {
        setComponentType(currentType === 'bootstrap' ? 'material' : 'bootstrap');
    };

    const UIKit = useUIKit(componentType);

    return (
        <div>
            <header>
                {/* make some kind of toggle? */}
                <UIKit.Button onClick={() => toggleUIKit(componentType)}>Toggle</UIKit.Button>
            </header>
            <main>
                <form>
                    <UIKit.Input></UIKit.Input>
                    <UIKit.Input></UIKit.Input>
                    <UIKit.Button>Submit</UIKit.Button>
                </form>
            </main>
        </div>
    );
}

export default App;
