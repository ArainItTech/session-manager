import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import { auth } from "../config/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(user != null) setIsLoggedIn(true);
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading, navigate]);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm my-2"
        color="dark"
        dark
      >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logo}
            style={{
              height: 40,
              width: 40,
            }}
          />
          Session Information
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse
          className="d-sm-inline-flex flex-sm-row-reverse"
          isOpen={!collapsed}
          navbar
        >
          <Nav className="ml-auto" navbar>
            {!isLoggedIn && (
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
            )}
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            {isLoggedIn && (
              <NavItem>
                <NavLink onClick={handleSignout}>
                  Logout
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
