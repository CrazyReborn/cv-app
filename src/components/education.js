import React from "react";
import uniqid from "uniqid";
import EducationEntry from "./education-entry";
import EdcucationForm from "./education-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Education extends React.Component {
    constructor() {
        super();
        this.state = {
            addNew: false,
            all: [{
                startYear: '2012', 
                endYear: '2015', 
                uniName: 'University of Michigan', 
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
                [name]: value,
                id: this.state.currentId,
        });
        console.log(this.state)
    }
    handleResubmit(e, edu, changedState) {
        e.preventDefault();
        const prevAll = this.state.all.slice();
        const index = this.state.all.indexOf(edu);
        prevAll[index] = changedState;
        this.setState({
            all: prevAll,
        })
    }
    render() {
        const { all, addNew } = this.state;
        const {currentStartYear, currentEndYear, currentUniName, currentTitle } = this.state;
        return (
            <div className="education">
                <h2>Education</h2>
                {all.map((edu) => {
                    return(
                        <div key={edu.id}>
                        <EducationEntry edu={edu} handleResubmit={this.handleResubmit} handleDelete={this.handleDelete}/>
                        </div>
                    )
                })}
                {!addNew
                ? <button onClick={this.handleAddEducationEntry}><FontAwesomeIcon icon={faPlus}/>Add New</button>
                : <EdcucationForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} startYear={currentStartYear}
                  endYear={currentEndYear} uniName={currentUniName} title={currentTitle} />
                    }
        </div>
        )
    }
}

export default Education