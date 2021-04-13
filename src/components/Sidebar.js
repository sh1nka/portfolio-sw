import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
            <nav className='nav'>
                <ul className="sidebar-items">
                    <li className="sidebar-item">
                        <NavLink to='/about' exact activeClassName='active'>
                            About
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink to='/projects' exact activeClassName='active'>
                            Projects
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink to='/skills' exact activeClassName='active'>
                            Skills
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink to='/contact' exact activeClassName='active'>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;