import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from 'hooks/UserContext';
import './index.css';
import App from 'components/App';
import theme from 'constants/theme';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserProvider>
            <ThemeProvider theme={theme}>
                <BrowserRouter basename="/task-spa">
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </UserProvider>
    </React.StrictMode>
);
