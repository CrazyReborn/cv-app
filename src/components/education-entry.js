import React from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faMinus } from '@fortawesome/free-solid-svg-icons';

class EducationEntry extends React.Component {
    constructor() {
        super();
        this.state = {
            startYear: '',
            endYear: '',
            uniName: '',
            title: '',
            editing: false,
            id: uniqid(),
        }
        this.handleChange = this.handleChange.bind(this);
        this.changeStateToDefault = this.changeStateToDefault.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleEdit(edu) {
        
        this.setState({
            startYear: edu.startYear,
            endYear: edu.endYear,
            uniName: edu.uniName,
            title: edu.title,
            editing: !this.state.editing,
            id: edu.id
        },);
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
            uniName: '',
            title: '',
            editing: false,
            id: uniqid(),
        });
    }
    render() {
        const { edu, handleResubmit, handleDelete } = this.props;
        const { startYear, endYear, uniName, title } = this.state;
        return (
            <div>
                {!this.state.editing
                    ? <div>
                    <h3>{edu.uniName}</h3>
                    <p>Title: {edu.title}</p>
                    <p>From {edu.startYear} to {edu.endYear}</p>
                    <button onClick={() => this.handleEdit(edu)}><FontAwesomeIcon icon={faPen}/> Edit</button>
                    <button onClick={() => handleDelete(edu.id)}><FontAwesomeIcon icon={faMinus}/> Delete</button>
                    </div>
                    : <form className="education" onSubmit={(e) => {handleResubmit(e, edu, this.state); this.changeStateToDefault()}}>
                        <label htmlFor="startYear">Start Year</label>
                        <input onChange={this.handleChange} id="startYear" name="startYear" type="number" min="1960" max="2021" step="1" value={startYear}></input>
                        <label htmlFor="endYear">End Year</label>
                        <input onChange={this.handleChange} id="endYear" name="endYear" type="number" min="1960" max="2021" step="1" value={endYear}></input>
                        <label htmlFor="uniName">School Name</label>
                        <input onChange={this.handleChange} type="text" name="uniName" id="uniName" value={uniName}></input>
                        <label htmlFor="title">Title</label>
                        <input onChange={this.handleChange} type="text" name="title" id="title" value={title}></input>
                        <input  type="submit"></input>
                        </form>
                        }
            </div>
        )
    }
}

export default EducationEntry