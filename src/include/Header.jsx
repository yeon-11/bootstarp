import { Outlet, Link } from "react-router-dom"; //header, body 경계선

const Header = () => {
    return (
        <>
        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/container" className="nav-link">bootstrap</Link>
                </li>
                <li className="nav-item">
                    <Link to="/typo" className="nav-link">Typography</Link>
                </li>
                <li className="nav-item">
                    <Link to="/color" className="nav-link">Color</Link>
                </li>
                <li className="nav-item">
                    <Link to="/table" className="nav-link">Table</Link>
                </li>
                <li className="nav-item">
                    <Link to="/img" className="nav-link">Img</Link>
                </li>
                <li className="nav-item">
                    <Link to="/jumbo" className="nav-link">Jumbo</Link>
                </li>
                <li className="nav-item">
                    <Link to="/alerts" className="nav-link">Alerts</Link>
                </li>
                <li className="nav-item">
                    <Link to="/btn" className="nav-link">button</Link>
                </li><li className="nav-item">
                    <Link to="/badges" className="nav-link">Badges</Link>
                </li>
                <li className="nav-item">
                    <Link to="/progress" className="nav-link">Progress</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cards" className="nav-link">Cards</Link>
                </li>
                <li className="nav-item">
                    <Link to="/layer" className="nav-link">Layer</Link>
                </li>
                <li className="nav-item">
                    <Link to="/toastm" className="nav-link">Toast</Link>
                </li>
            </ul>
        </nav>
        <Outlet /> {/*선언하지 않으면 작동하지 않음*/}
        </>
    )
}

export default Header;