import React from "react";
import uniqid from "uniqid";

class Education extends React.Component {
    constructor() {
        super();
        this.state = {
            addNew: false,
            all: [{
                startYear: '2012', 
                endYear: '2018', 
                uniName: 'Vitebsk', 
                title: 'doc',
                editing: false,
                id: uniqid()}],
            currentStartYear: '',
            currentEndYear: '',
            currentUniName: '',
            currentTitle: '',
            currentId: uniqid(),
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddEducationEntry = this.handleAddEducationEntry.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
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

    handleEdit(edu) {
        this.setState({
            addNew: this.state.addNew,
            all: this.state.all,
            currentStartYear: edu.startYear,
            currentEndYear: edu.endYear,
            currentUniName: edu.uniName,
            currentTitle: edu.title,
            currentId: this.state.currentId,
        });
        const prevAll = this.state.all.slice();
        const index = prevAll.indexOf(edu);
        prevAll[index].editing = !edu.editing;
        this.setState({
            all: prevAll,
        });
    }
    handleResubmit(e, edu) {
        e.preventDefault();
        const prevAll = this.state.all.slice();
        const index = prevAll.indexOf(edu);
        const newEntry = {
            startYear: this.state.currentStartYear,
            endYear: this.state.currentEndYear,
            uniName: this.state.currentUniName,
            title: this.state.currentTitle,
            editing: !edu.editing,
            id: this.state.currentId,
        }
        prevAll[index] = newEntry
        this.setState({
            all: prevAll,
            currentStartYear: '',
            currentEndYear: '',
            currentUniName: '',
            currentTitle: '',
            currentId: uniqid(),
        }, );
    }

    handleSubmit(e) {
        e.preventDefault();
        const newEntry = {
            startYear: this.state.currentStartYear,
            endYear: this.state.currentEndYear,
            uniName: this.state.currentUniName,
            title: this.state.currentTitle,
            id: this.state.currentId,
        }
        this.setState({
            addNew: !this.state.addNew,
            all: this.state.all.concat(newEntry),
            currentStartYear: '',
            currentEndYear: '',
            currentUniName: '',
            currentTitle: '',
            currentId: uniqid(),
        }, console.log(this.state.all));
    }
    render() {
        const { all, addNew } = this.state;
        const {currentStartYear, currentEndYear, currentUniName, currentTitle } = this.state;
        return (
            <div className="education">
                <h2>Education</h2>
                {all.map((edu) => {
                    return (
                        <div key={edu.id}>
                            {!edu.editing
                            ?<div>
                            <h3>{edu.uniName}</h3>
                            <p>Title: {edu.title}</p>
                            <p>From {edu.startYear} to {edu.endYear}</p>
                            <button onClick={() => this.handleEdit(edu)}>Edit this entry</button>
                            </div>
                            : <form onSubmit={(e) => this.handleResubmit(e, edu)}>
                                <label htmlFor="startYear">Start Year</label>
                                <input onChange={this.handleChange} id="startYear" name="currentStartYear" type="number" min="1960" max="2021" step="1" value={currentStartYear}></input>
                                <label htmlFor="endYear">End Year</label>
                                <input onChange={this.handleChange} id="endYear" name="currentEndYear" type="number" min="1960" max="2021" step="1" value={currentEndYear}></input>
                                <label htmlFor="uniName">School Name</label>
                                <input onChange={this.handleChange} type="text" name="currentUniName" id="uniName" value={currentUniName}></input>
                                <label htmlFor="title">Title</label>
                                <input onChange={this.handleChange} type="text" name="currentTitle" id="title" value={currentTitle}></input>
                                <input  type="submit"></input>
                                </form>}
                            
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
                    <input onChange={this.handleChange} id="endYear" name="currentEndYear" type="number" min="1960" max="2021" step="1" value={currentEndYear}></input>
                    <label htmlFor="uniName">School Name</label>
                    <input onChange={this.handleChange} type="text" name="currentUniName" id="uniName" value={currentUniName}></input>
                    <label htmlFor="title">Title</label>
                    <input onChange={this.handleChange} type="text" name="currentTitle" id="title" value={currentTitle}></input>
                    <input type="submit"></input>
                    </form>
                    }
        </div>
        )
    }
}

export default Education