import React from "react";
import uniqid from "uniqid";

class Education extends React.Component {
    constructor() {
        super();
        this.state = {
            addNew: false,
            all: [{
                startYear: '2012', endYear: '2018', uniName: 'Vitebsk',
            id: uniqid()}],
            currentStartYear: '',
            currentEndYear: '',
            currentUniName: '',
            currentId: uniqid(),
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddEducationEntry = this.handleAddEducationEntry.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            uniName: this.state.currentUniName,
            id: this.state.currentId,
        }
        this.setState({
            addNew: !this.state.addNew,
            all: this.state.all.concat(newEntry),
            currentStartYear: '',
            currentEndYear: '',
            currentUniName: '',
            currentId: uniqid(),
        }, console.log(this.state.all));
    }
    render() {
        const { all, addNew } = this.state;
        const {currentStartYear, currentSEndYear, currentSUniName } = this.state;
        return (
            <div>
                <h2>Education</h2>
                {all.map((edu) => {
                    return (
                        <div key={edu.id}>
                            <p>{edu.startYear} - {edu.endYear}</p>
                            <p>{edu.uniName}</p>
                            <button onClick={() => this.handleDelete(edu.id)}>Delete this entry</button>
                        </div>
                    )
                })}
                {!addNew
                ? <button onClick={this.handleAddEducationEntry}>Add Education</button>
                : <form onSubmit={this.handleSubmit}>
                    <label htmlFor="startYear">Start Year</label>
                    <input onChange={this.handleChange} id="startYear" name="currentStartYear" type="number" min="1960" max="2021" step="1" value={currentStartYear}></input>
                    <label htmlFor="endYear">End Year</label>
                    <input onChange={this.handleChange} id="endYear" name="currentEndYear" type="number" min="1960" max="2021" step="1" value={currentSEndYear}></input>
                    <label htmlFor="uniName">School Name</label>
                    <input onChange={this.handleChange} type="text" name="currentUniName" id="uniName" value={currentSUniName}></input>
                    <input type="submit"></input>
                    </form>
                    }
        </div>
        )
    }
}

export default Education