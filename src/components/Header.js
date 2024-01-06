import { Link } from "react-router-dom";
export default function Header() {
  const styles = {
    padding: "10px 200px 10px 200px",
    borderRadius: "15px 0px 0px 15px",
    textAlign: "left",
  };
  return (
    <nav className="navbar">
      <div className="navbar-left-side">
        <i class="fa-solid fa-bars"></i>
        <div className="youtube-all">
          <i class="fa-brands fa-youtube"></i>
          <h2 className="yt">YouTube</h2>
        </div>
      </div>
      <div className="navbar-center">
        <input
          placeholder="Hľadať"
          className="input"
          type="text"
          style={styles}
        />
        <div className="mag-glass">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <i class="fa-solid fa-microphone"></i>
      </div>
      <div className="navbar-right-side">
        <i class="fa-solid fa-video-slash"></i>
        <i class="fa-regular fa-bell"></i>
        <Link to="/login">
          <h1>K</h1>
        </Link>
      </div>
    </nav>
  );
}
