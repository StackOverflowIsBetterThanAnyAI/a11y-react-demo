import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ marginBottom: "1rem" }}>
            <Link to="/buggy" className="nav-link">
                Buggy Page
            </Link>
        </nav>
    );
}
