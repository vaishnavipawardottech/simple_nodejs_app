function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                 Asset Tracker
            </div>

            <div className="navbar-links">
                <a href="#dashboard">Dashboard</a>
                <a href="#assets">Assets</a>
                <a href="#add-asset">Add Asset</a>
            </div>
        </nav>
    );
}

export default Navbar;