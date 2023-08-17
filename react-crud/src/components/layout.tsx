import { Outlet, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Toaster } from "react-hot-toast";

function Layout() {
    return (
        <div>
          <Toaster position="bottom-right" reverseOrder={true}/>
          <Navbar>
            <Navbar.Brand className="navbar-item">React CRUD</Navbar.Brand>
            <Nav>
              <NavLink className="navbar-item navbar-link" to="/">Home</NavLink>
              <NavLink className="navbar-item navbar-link" to="/profile">Profile</NavLink>
              <NavLink className="navbar-item navbar-link" to="/client">Client</NavLink>
              <NavLink className="navbar-item navbar-link" to="/product">Product</NavLink>
            </Nav>
          </Navbar>

          <Outlet />
        </div>
    )
}

export default Layout;