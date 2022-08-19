import  * as React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'react-bootstrap';
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<BrowserRouter>
  <ThemeProvider>
    <App/>
  </ThemeProvider>
</BrowserRouter>
);

