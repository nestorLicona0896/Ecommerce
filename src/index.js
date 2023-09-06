import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//
import { ClassProvider } from "../src/components/portal/FormClassContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ClassProvider>
        <App/>
    </ClassProvider>
    
);

