import {FaHandPointRight} from 'react-icons/fa'
import './index.css'

const Coworkers=()=>(
    <div className='coworkers-container'>
        <h1 className='coworkers'>Coworkers</h1>
        <div className='coworkers-list-container'>
            <p className='coworkers-items'><FaHandPointRight className='circle' /> Veeresh</p>
            <p className='coworkers-items'><FaHandPointRight className='circle' /> Mallikarjuna</p>
            <p className='coworkers-items'><FaHandPointRight className='circle' /> Srinath</p>
            <p className='coworkers-items'><FaHandPointRight className='circle' />Asif</p>
        </div>
    </div>
)   

export default Coworkers