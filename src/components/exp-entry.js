import React from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faMinus } from '@fortawesome/free-solid-svg-icons';

class ExperienceEntry extends React.Component {
    constructor() {
        super();
        this.state = {
            startYear: '',
            endYear: '',
            jobTitle: '',
            mainTasks: '',
            editing: false,
            id: uniqid(),
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeStateToDefault = this.changeStateToDefault.bind(this);
    }
    handleEdit(job) {
        this.setState({
            startYear: job.startYear,
            endYear: job.endYear,
            jobTitle: job.jobTitle,
            mainTasks: job.mainTasks,
            editing: !this.state.editing,
            id: job.id
        });
    }
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }
    changeStateToDefault() {
        this.setState({
            startYear: '',
            endYear: '',
            jobTitle: '',
            mainTasks: '',
            editing: false,
            id: uniqid(),
        });
    }
    render() {
        const { job, handleDelete, handleResubmit } = this.props;
        const { startYear, endYear, companyName, jobTitle, mainTasks} = this.state;
        return (
           <div>
            {!this.state.editing
            ? <div>
            <h3>{job.companyName}</h3>
            <p>From {job.startYear} to {job.endYear}</p>
            <p>Position: {job.jobTitle}</p>
            <p>Responsibilities: {job.mainTasks}</p>
            <button onClick={() => this.handleEdit(job)}><FontAwesomeIcon icon={faPen}/> Edit</button>
            <button onClick={() => handleDelete(job.id)}><FontAwesomeIcon icon={faMinus}/> Delete</button>
            </div>
            :<form className="experience" onSubmit={(e) => {handleResubmit(e, job, this.state); this.changeStateToDefault(e)}}>
            <label htmlFor="startYear">Start Year</label>
            <input onChange={this.handleChange} id="startYear" name="startYear" type="text" value={startYear}></input>
            <label htmlFor="endYear">End Year</label>
            <input onChange={this.handleChange} id="endYear" name="endYear" type="text" value={endYear}></input>
            <label htmlFor="companyName">Company Name</label>
            <input onChange={this.handleChange} type="text" name="companyName" id="companyName" value={companyName}></input>
            <label htmlFor="jobTitle">Job Title</label>
            <input onChange={this.handleChange} type="text" name="jobTitle" id="jobTitle" value={jobTitle}></input>
            <label htmlFor="mainTasks">Main Tasks</label>
            <input onChange={this.handleChange} type="text" name="mainTasks" id="mainTasks" value={mainTasks}></input>
            <input type="submit"></input>
            </form>
            }
            </div>
        )
    }
}


export default ExperienceEntry