import React, { useState } from 'react';
import './App.css';
import { ComponentType } from './UIKit/Types';
import useUIKit from './UIKit/useUIKit';

function App() {
    const [componentType, setComponentType] = useState<ComponentType>('Material');

    const toggleUIKit = (currentType: ComponentType) => {
        setComponentType(currentType === 'Bootstrap' ? 'Material' : 'Bootstrap');
    };

    const UIKit = useUIKit(componentType);

    return (
        <div>
            <header>
                <UIKit.Button onClick={() => toggleUIKit(componentType)}>
                    {componentType === 'Bootstrap' ? 'Show Bootstrap' : 'Show Material'}
                </UIKit.Button>
            </header>
            <main>
                <h1>UIKit Toggling</h1>
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
