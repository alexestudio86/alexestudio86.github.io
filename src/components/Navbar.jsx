export function Navbar ( ){
    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={ {zIndex: 5} }>
            <div className='container'>
                <div className="d-flex">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <a className="nav-link text-uppercase active" aria-current="page" href='#' >my Work</a>
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