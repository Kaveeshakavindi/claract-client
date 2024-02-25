import * as React from 'react';
import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ParallaxProvider } from "react-scroll-parallax";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <ParallaxProvider>
    <App/>
    </ParallaxProvider>
    </BrowserRouter>
  </StrictMode>
)

