import Navbar from "./Navbar";

function Header() {
    return (
        <div className="container-header">
            <div className="header-background">
                <img
                    src="/src/assets/img/fondo.png"
                    alt="Interior background"
                    className="header-background-img"
                />
            </div>
            <div className="header-content">
                <Navbar />
                <div className="container-header-info">
                    <div className="info-central">
                        <h2>Make Your Interior More Minimalistic & Modern</h2>
                    </div>
                    <div className="sub-info-central">
                        <h2>Turn your room with panto into a lot more minimalist and modern with ease and speed</h2>
                    </div>
                    <div className="search-container">
                        <input type="text" placeholder="Search furniture" />
                        <button><img src="/src/assets/icons/search-icon.svg" alt="Search" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;