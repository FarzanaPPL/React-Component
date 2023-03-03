import './index.css'

const Tasks=()=>(
    <div>
        <h1 className='tasks-heading'>Tasks:</h1>
        <div className='tasks-container'>
            <table className="table">
            <tr className="table-row">
                    <th className="table-row">Task Name</th>
                    <th className="table-row">Total Working Hours</th>
                    <th className="table-row">Total Working Done</th>
                </tr>
                <tr className="table-row table-content">
                    <td className="table-row">Resume Builder</td>
                    <td className="table-row">5 hours</td>
                    <td className="table-row">Completed</td>
                </tr>
            </table>
            <div className='progress-container'> 
            <label for="progress" className='progress'>Project Progress</label>
        <progress id="progress" value="100" max="100" className='progressbar'>100%</progress>
        <div className='report-container'>
            <p className='work-report'>Report work done <input type="text" className='input' /></p>
            <button className='submit-button'>Submit</button>
        </div>
        </div>
        </div>
        <div className='tasks-container'>
            <table className="table">
                <tr className="table-row">
                    <th className="table-row">Task Name</th>
                    <th className="table-row">Total Working Hours</th>
                    <th className="table-row">Total Working Done</th>
                </tr>
                <tr className="table-row table-content">
                    <td className="table-row">React Functionality</td>
                    <td className="table-row">7 hours</td>
                    <td className="table-row">Completed</td>
                </tr>
            </table>
            <div className='progress-container'> 
            <label for="progress" className='progress'>Project Progress</label>
        <progress id="progress" value="100" max="100" className='progressbar'>100%</progress>
        <div className='report-container'>
            <p className='work-report'>Report work done <input type="text" className='input' /></p>
            <button className='submit-button'>Submit</button>
        </div>
        </div>
        </div>
        <div className='tasks-container'>
            <table className="table">
            <tr className="table-row">
                    <th className="table-row">Task Name</th>
                    <th className="table-row">Total Working Hours</th>
                    <th className="table-row">Total Working Done</th>
                </tr>
                <tr className="table-row table-content">
                    <td className="table-row">SPA</td>
                    <td className="table-row">8 hours</td>
                    <td className="table-row">Completed</td>
                </tr>
            </table>
            <div className='progress-container'> 
            <label for="progress" className='progress'>Project Progress</label>
        <progress id="progress" value="100" max="100" className='progressbar'>100%</progress>
        <div className='report-container'>
            <p className='work-report'>Report work done<input type="text" className='input' /></p>
            <button className='submit-button'>Submit</button>
        </div>
        </div>
        </div>
        
    </div>
)

export default Tasks