import React, {useState} from 'react';
import ApiDataProvider from './ApiDataProvider'

function AppContent (){
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div>
            <ApiDataProvider />

        </div>
    );
}

export default AppContent;
