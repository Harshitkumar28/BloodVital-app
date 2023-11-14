import React from 'react'
import {BiSolidDonateBlood,BiUserCircle} from 'react-icons/bi'
import {useNavigate, useLocation, Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
const Header = () => {
    const {user} = useSelector(state=>state.auth)

    const navigate = useNavigate();
    const location = useLocation();
    // logout handler
    const handleLogout = () => {
        localStorage.clear()
        alert("Logout Successfully"); 
        navigate('/login');
        // our authentication is based on token
    }


  return (
    <>
        <nav className = "navbar">
            <div className = "container-fluid">
                <div className="navbar-brand" >
                    <BiSolidDonateBlood color="red" />
                    Blood<i>Vital</i>
                </div>
                <ul className="navbar-nav flex-row ">
                    <li className="nav-item mx-3">
                        <p className="nav-link">
                            <BiUserCircle/>
                            Welcome {" "}
                            {user?.name || user?.hospitalName || user?.organisation}
                             &nbsp;
                            <span className="badge bg-secondary">{user?.role}</span>
                        </p>
                    </li>
                    {
                        (location.pathname === "/" || location.pathname === "/donar"
                        || location.pathname === "/hospital"
                        ) ? (
                            <li className="nav-item mx-3">
                        <Link to="/analytics" className="nav-link">
                            Analytics
                        </Link>
                    </li>
                        ) : (
                                <li className="nav-item mx-3">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        )
                    }
                    <li className="nav-item mx-3">
                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header