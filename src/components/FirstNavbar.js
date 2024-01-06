import { NavLink, Link, useSearchParams } from "react-router-dom";
export default function FirstNavbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div className="top-navbar">
        <NavLink
          to="."
          className={({ isActive }) => (isActive ? "active" : "btns")}
        >
          <h4 className="top-nav-let">Všetko</h4>
        </NavLink>
        <NavLink
          to="/hry?type=hry"
          className={({ isActive }) => (isActive ? "active" : "btns")}
        >
          <h4 className="top-nav-let">Hry</h4>
        </NavLink>
        <NavLink
          to="/mixi"
          className={({ isActive }) => (isActive ? "active" : "btns")}
        >
          <h4 className="top-nav-let">Mixi</h4>
        </NavLink>
        <NavLink
          to="/hudba"
          className={({ isActive }) => (isActive ? "active" : "btns")}
        >
          <h4 className="top-nav-let">Hudba</h4>
        </NavLink>
      </div>
    </>
  );
}
