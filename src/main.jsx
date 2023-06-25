import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import App from './App';
import Homepage from './pages/homepage/homepage';
import Communities from './pages/communities/communities';
import Events from './pages/events/events';
import Blogs from './pages/blogs/blogs';
import SignUp from './pages/signup/signup';
import NotFound from './components/notfound';
import ExecutiveLeaders from './pages/leaders/executive-leaders';
import Support from './pages/support/support';
import Testimonials from './pages/testimonials/testimonials';
import Alumni from './pages/alumni/alumni';
import Updates from './pages/updates/updates';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<Homepage />} />
      <Route path="/communities" element={<Communities />} errorElement={<NotFound />} />
      <Route path="/events" element={<Events />} errorElement={<NotFound />} />
      <Route path="/blogs" element={<Blogs />} errorElement={<NotFound />} />
      <Route path="/signup" element={<SignUp />} errorElement={<NotFound />} />
      <Route path="/support" element={<Support />} errorElement={<NotFound />} />
      <Route path="/updates" element={<Updates />} errorElement={<NotFound />} />
      <Route path="/testimonials" element={<Testimonials />} errorElement={<NotFound />} />
      <Route path="/executive-leaders" element={<ExecutiveLeaders />} errorElement={<NotFound />} />
      <Route path="/alumni" element={<Alumni />} errorElement={<NotFound />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
