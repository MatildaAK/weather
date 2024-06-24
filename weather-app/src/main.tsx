import ReactDOM from 'react-dom/client';
// import React from "react";
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './Pages/HomePage/HomePage';
import DailyWeather from './components/DailyWeather/DailyWeather';
import TodaysWeather from './components/TodaysWeather/TodaysWeather';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      { path: "", element: <HomePage />},
      { path: "daily", element: <DailyWeather />},
      { path: "today", element: <TodaysWeather />}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
