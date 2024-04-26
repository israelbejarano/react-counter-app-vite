import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return (<h1>Hola Mundo!!!</h1>);
}

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);