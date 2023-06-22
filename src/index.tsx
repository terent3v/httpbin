import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Get from './components/Get/Get';
import Post from './components/Post/Post';
import Delete from './components/Delete/Delete';
import LogsProvider from './components/LogsProvider/LogsProvider';
import Home from './components/Home/Home';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />
      },
      {
        path: "get",
        element: <Get />
      },
      {
        path: "post",
        element: <Post />
      },
      {
        path: "delete",
        element: <Delete />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LogsProvider>
      <RouterProvider router={router} />
    </LogsProvider>
  </React.StrictMode>
);
