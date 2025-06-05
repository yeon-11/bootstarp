import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">React Ref</a>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#target">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="target">
                    <ul className="nav navbar-nav me-auto">
                        {/* React 주요 메뉴 */}
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/hooks" className="nav-link">Hooks</Link></li>
                        <li className="nav-item"><Link to="/effect" className="nav-link">useEffect</Link></li>
                        <li className="nav-item"><Link to="/container" className="nav-link">Bootstrap</Link></li>
                        <li className="nav-item"><Link to="/typo" className="nav-link">Typography</Link></li>
                        <li className="nav-item"><Link to="/color" className="nav-link">Color</Link></li>

                        {/* Flex 드롭다운 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                Flex
                            </a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link to="/flex" className="nav-link">Flex</Link></li>
                                <li className="nav-item"><Link to="/flex2" className="nav-link">Flex2</Link></li>
                            </ul>
                        </li>

                        {/* Component etc 드롭다운 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                Component etc
                            </a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link to="/btn" className="nav-link">Button</Link></li>
                                <li className="nav-item"><Link to="/table" className="nav-link">Table</Link></li>
                                <li className="nav-item"><Link to="/form" className="nav-link">Form</Link></li>
                                <li className="nav-item"><Link to="/cards" className="nav-link">Cards</Link></li>
                                <li className="nav-item"><Link to="/alerts" className="nav-link">Alerts</Link></li>
                                <li className="nav-item"><Link to="/badges" className="nav-link">Badges</Link></li>
                                <li className="nav-item"><Link to="/progress" className="nav-link">Progress</Link></li>
                                <li className="nav-item"><Link to="/toastm" className="nav-link">Toast</Link></li>
                                <li className="nav-item"><Link to="/img" className="nav-link">Img</Link></li>
                                <li className="nav-item"><Link to="/jumbo" className="nav-link">Jumbo</Link></li>
                                <li className="nav-item"><Link to="/pagination" className="nav-link">Pagination</Link></li>
                                <li className="nav-item"><Link to="/list" className="nav-link">List</Link></li>
                                <li className="nav-item"><Link to="/collapse" className="nav-link">Collapse</Link></li>
                                <li className="nav-item"><Link to="/layer" className="nav-link">Layer</Link></li>
                            </ul>
                        </li>

                        {/* ReactBootstrap 드롭다운 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                ReactBootstrap
                            </a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link to="/ref" className="nav-link">Ref</Link></li>
                                <li className="nav-item"><Link to="/buttons" className="nav-link">Buttons</Link></li>
                                <li className="nav-item"><Link to="/acc" className="nav-link">Accordion</Link></li>
                                <li className="nav-item"><Link to="/tabs" className="nav-link">Tabs</Link></li>
                                <li className="nav-item"><Link to="/tb" className="nav-link">Tb</Link></li>
                                <li className="nav-item"><Link to="/modals" className="nav-link">Modals</Link></li>
                                <li className="nav-item"><Link to="/pagen" className="nav-link">Pagenation</Link></li>
                                <li className="nav-item"><Link to="/fig" className="nav-link">Figure</Link></li>
                                <li className="nav-item"><Link to="/ts" className="nav-link">Toast</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        </>
    )
}

export default Header;
