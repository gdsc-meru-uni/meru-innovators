import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import App from './App.jsx';
import Homepage from './pages/homepage/homepage.jsx';
import Communities from './pages/communities/communities.jsx';
import Events from './pages/events/events.jsx';
import Blogs from './pages/blogs/blogs.jsx';
import NotFound from './components/notfound.jsx';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<Homepage />} />
      <Route index path="/communities" element={<Communities />} errorElement={<NotFound />} />
      <Route index path="/events" element={<Events />} errorElement={<NotFound />} />
      <Route index path="/blogs" element={<Blogs />} errorElement={<NotFound />} />
      <Route index path="/*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
