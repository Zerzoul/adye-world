import logoAdyeRose from "../assets/logo-adye-rose.png"
import avatar from "../assets/avatar.png"


const Header = () => {
    return (
        <header>
            <div className="app-header">
                <div className="app-header-logo">
                    <img src={logoAdyeRose} alt="logo AdyeRose" />
                </div>
                <div className="app-header-avatar">
                    <img src={avatar} alt="avatar AdyeRose" />
                </div>
            </div>
        </header>
    )
};

export default Header;