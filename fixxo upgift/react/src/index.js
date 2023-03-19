import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvider } from './contexts/ProductContext';
import { ContactFormProvider } from './contexts/ContactFormContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductProvider>
    <ContactFormProvider>
        <App />
    </ContactFormProvider>
    </ProductProvider>
);