import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./views/Landing";
import NotFound from "./views/NotFound";

import App from './App';
import Scale from "./views/Scale";
import Scales from "./views/Scales";
import Categories from "./views/Categories";

import './index.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Landing /> } />
                <Route path="*" element={ <NotFound /> } />

                <Route path="app" element={ <App /> }>
                    <Route path="categories" element={ <Categories /> } />
                    <Route path="scales" element={ <Scales /> } />
                    <Route path="scales">
                        <Route path=":scaleId" element={ <Scale /> } />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);
