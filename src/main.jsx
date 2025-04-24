import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  Home,
  About,
  Contact,
  Service,
  NutritionSearch,
  Profile,
  BarcodeScanner,
  LoginPage,
  // SignupPage
} from './Component';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      {/* <Route path='/signup' element={<SignupPage />} /> */}
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Services' element={<Service />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/NutritionSearch' element={<NutritionSearch />} />
      <Route path="/Scanner" element={<BarcodeScanner />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)