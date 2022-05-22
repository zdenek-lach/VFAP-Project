import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/styling/GlobalStyle.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={new QueryClient()}>
                <App/>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);

