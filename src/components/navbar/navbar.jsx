import { Link, useLocation } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
    const { pathname } = useLocation();
    const paths = [
        { pathName: '/', copy: 'INICIO' },
        { pathName: '/servicios', copy: 'SERVICIOS' },
        { pathName: '/about', copy: 'ABOUT' },
        { pathName: '/contacto', copy: 'CONTACTO' }
    ]

    return (
        <>
            <header id='header'>
                <div>
                    <Link className="pathSelected" to='/'>HENRY 3D</Link>
                </div>
                <nav className="navbar">
                    {
                        paths.map((path, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={path.pathName}
                                    className={pathname === path.pathName ? 'pathSelected' : 'notSelected'}
                                >
                                    {path.copy}
                                </Link>
                            )
                        })
                    }
                </nav>
            </header>
        </>
    )
}