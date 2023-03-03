import Sidebar from '../Sidebar'
import Projects from '../Projects'
import './index.css'

const ProjectsList=()=>(
    <div className="projects-list-container">
        <Sidebar />
        <Projects />
    </div>
)

export default ProjectsList