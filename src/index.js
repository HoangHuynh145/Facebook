import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { NavBar, MainPage, ProfilePage, LoginPage } from './pages'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Browser, Route, Routes } from 'react-router-dom'
import { StoreProvider } from './pages/main/store'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <Browser>
        <Routes>
          <Route path="/Facebook/login" element={<LoginPage />} />
          <Route path="/Facebook/navBar" element={<NavBar />}>
            <Route path="main" element={<MainPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Browser>
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
