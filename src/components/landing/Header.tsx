import Navbar from "./Navbar";

function Header() {
    return (
        <div className="container-header">
            <div className="header-background">
                <img 
                    src="src\assets\img\fondo.png" 
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
                        <h2>Make Your Interior More Minimalistic & Modern</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;