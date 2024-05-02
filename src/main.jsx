import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp'
import {FirstApp} from './FirstApp'
import './styles.css';



ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <HelloWorldApp/>
        <FirstApp title="Hola, soy John" subTitle={123}/>
    </React.StrictMode>
);