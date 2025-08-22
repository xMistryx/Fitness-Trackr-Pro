import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <>
      <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to="/activitiesPage">Activities</NavLink>
        {token ? (
          <NavLink to="/activitiesPage" onClick={() => logout()}>Log out</NavLink>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
    </>
  );
}