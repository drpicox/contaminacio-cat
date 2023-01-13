import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavLink({ to, children }: { to: string; children: any }) {
  return (
    <Link className="nav-link" to={to}>
      {children}
    </Link>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar bg="primary">
        <Nav>
          <NavLink to="/">Contaminacio-Cat</NavLink>
        </Nav>
      </Navbar>
      {children}
    </>
  );
}
