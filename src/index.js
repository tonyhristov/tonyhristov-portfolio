import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App'
import PageLayout from "./pages/page-layout";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App>
            <PageLayout/>
        </App>
    </React.StrictMode>,
);
