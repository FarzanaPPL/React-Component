import Tasklist from '../Tasklist'
import './index.css'

const Projects=()=>(
    <div className="projects-container">
        <h1 className='project-heading'>React Components Assignments</h1>
        <label for="progress" className='progress'>Project Progress</label>
        <progress id="progress" value="80" max="100" className='progressbar'>80%</progress>
        <p className='project-description'>React is an open-source front-end JavaScript library maintained by a community of a group of developers and Meta. React is primarily is used for building application UI. It is mainly used for developing single-page applications and mobile applications. For making reusable UI components, react is very useful.</p>
        <Tasklist />
    </div>
)

export default Projects