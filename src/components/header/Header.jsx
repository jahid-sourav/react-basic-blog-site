import "../commonStyles/CommonStyles.css";
import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="temp-container">
        <div className="flex items-center justify-between">
          <a href="index.html" className="logo">
            knowledge cafe
          </a>
          <img src="men.webp" alt="Men" className="header-image" />
        </div>
      </div>
    </header>
  );
}
