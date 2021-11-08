import React from "react";
import uniqid from "uniqid";
import ExperienceEntry from "./exp-entry";
import ExperienceForm from "./exprience-form";

class Experience extends React.Component {
    constructor() {
        super();
        this.state = {
            addNew: false,
            all: [{
                startYear: '2020',
                endYear: '2021',
                companyName: 'Sprite',
                jobTitle: 'sommelier',
                mainTasks: 'Drinking sprite',
                id: uniqid(),
            }],
            currentStartYear: '',
            currentEndYear: '',
            currentCompanyName: '',
            currentJobTitle: '',
            currentMainTasks: '',
            currentId: uniqid(),
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddEducationEntry = this.handleAddEducationEntry.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResubmit = this.handleResubmit.bind(this);
        this.handleResubmit = this.handleResubmit.bind(this);
    }

    handleDelete(id) {
        this.setState({
            all: this.state.all.filter(edu => edu.id !== id)
        });
    }

    handleAddEducationEntry() {
        this.setState({
            addNew: !this.state.addNew,
        });
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
                [name]: value,
                id: this.state.currentId,
        });
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault();
        const newEntry = {
            startYear: this.state.currentStartYear,
            endYear: this.state.currentEndYear,
            companyName: this.state.currentCompanyName,
            jobTitle: this.state.currentJobTitle,
            mainTasks: this.state.currentMainTasks,
            id: this.state.currentId,
        }
        this.setState({
            addNew: !this.state.addNew,
            all: this.state.all.concat(newEntry),
            currentStartYear: '',
            currentEndYear: '',
            currentCompanyName: '',
            currentJobTitle: '',
            currentMainTasks: '',
            currentId: uniqid(),
        }, console.log(this.state.all));
    }
    handleResubmit(e, job, changedState) {
        e.preventDefault();
        const prevAll = this.state.all.slice();
        const index = this.state.all.indexOf(job);
        prevAll[index] = changedState;
        this.setState({
            all: prevAll,
        });
    }
    render() {
        const { all, addNew } = this.state;
        const {currentStartYear, currentEndYear, currentCompanyName, currentJobTitle, currentMainTasks } = this.state;
        return (
            <div className="experience">
                <h2>Work Experience</h2>
                {all.map((job) => {
                    return (
                        <div key={job.id}>
                       <ExperienceEntry job={job} handleDelete={this.handleDelete} handleResubmit={this.handleResubmit} />
                       </div>
                    )
                })}
                {!addNew
                ? <button onClick={this.handleAddEducationEntry}>Add Job</button>
                : <ExperienceForm handleSubmit={this.handleResubmit} handleChange={this.handleChange} currentStartYear={currentStartYear} 
                  currentEndYear={currentEndYear} currentCompanyName={currentCompanyName} 
                  currentJobTitle={currentJobTitle} currentMainTasks={currentMainTasks} />
                    }
        </div>
        )
    }
}

export default Experience