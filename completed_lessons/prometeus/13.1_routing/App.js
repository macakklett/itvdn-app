import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="App container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
