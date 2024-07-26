import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ComplaintStatusScreen from './screens/complaintStatus';
import ComplaintHandlingPolicy from './screens/handlingPolicy';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />  
      <Route path="/citizenLogin" element={<LoginScreen />} />
      <Route path="/complaintStatus" element={<ComplaintStatusScreen />} />   
      <Route path="//handlingPolicy" element={<ComplaintHandlingPolicy />} />   
    </Route>
  )
) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} / >
  </React.StrictMode>
);
reportWebVitals();
