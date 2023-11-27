import { Link } from "react-router-dom"

export function Navbar ( ){
    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={ {zIndex: 5} }>
            <div className='container'>
                <div className="d-flex">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <Link to={'MyWork'} className="nav-link text-uppercase active" aria-current="page" >my Work</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase" href="#" >About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase" href="#" >What I do</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}