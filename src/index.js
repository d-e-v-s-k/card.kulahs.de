import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/app/app";
import "./index.scss";

const el = document.getElementById("app");
const root = ReactDOM.createRoot(el);

//  entry point
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
