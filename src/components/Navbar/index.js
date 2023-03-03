import {Link} from 'react-router-dom'
import './index.css'

const Navbar=()=>{
    const onClickLogout=()=>{
        
    }
    
    return(
        <div className="navbar-container">
        <ul className="nav-list">
            <Link to="/home" className='nav-link'><li className='nav-item'>Home</li></Link>
            <Link to="/profile" className='nav-link'><li className='nav-item'>Profile</li></Link>
        </ul>
        <button type="button" className='logout-button' onClick={onClickLogout}>Logout</button>
    </div>
    )
}

export default Navbar