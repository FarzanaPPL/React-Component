import Coworkers from '../Coworkers'
import './index.css'

const Sidebar=()=>(
    <div className="sidebar-container">
        <div>
        <h1 className="employee-name">Farzana Shaik</h1>
        <p className='username'>FarzanaPPL</p>
        <img className='profile-image' src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="profile" />
        </div>
        <Coworkers />
    </div>
)

export default Sidebar