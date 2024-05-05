import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelloWorldApp} from './HelloWorldApp'
import {FirstApp} from './FirstApp'
import { CounterApp } from './CouterApp';
import './styles.css';



ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        <FirstApp title="Hola, soy John" subTitle={123}/>
        {/* <CounterApp value={1989}/> */}
    </React.StrictMode>
);