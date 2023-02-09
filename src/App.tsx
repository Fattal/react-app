import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

const Home = React.lazy(() => import('./components/home/Home'));

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page404 />} />
          <Route path="about" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/*<li>*/}
          {/*  <Link to="/about">About</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link to="/dashboard/messages">Messages (Dashboard)</Link>*/}
          {/*</li>*/}
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}


function Page404() {
  return (
    <div>
      <h2>404</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/about">Go to the home page</Link>
      </p>
    </div>
  );
}
