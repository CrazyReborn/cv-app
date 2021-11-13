import React, { useState } from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faMinus } from '@fortawesome/free-solid-svg-icons';

function EducationEntry(props) {

    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [uniName, setUniName] = useState('');
    const [title, setTitle] = useState('');
    const [editing, setEditing] = useState('');
    const [id, setId] = useState(uniqid());

    let newEdu = {};

    function handleEdit(edu) {
        setStartYear(edu.startYear);
        setEndYear(edu.endYear);
        setUniName(edu.uniName);
        setTitle(edu.title);
        setEditing(!editing);
        setId(edu.id);
    }

    function changeStateToDefault() {
        setStartYear('');
        setEndYear('');
        setUniName('');
        setTitle('');
        setEditing(false);
        setId(uniqid());
    }
    
    function createNewEdu() {
        newEdu = {
            startYear,
            endYear,
            uniName,
            title,
            editing,
            id,
        }
    }


    const { edu, handleResubmit, handleDelete } = props;
    return (
        <div>
            {!editing
                ? <div>
                    <h3>{edu.uniName}</h3>
                    <p>Title: {edu.title}</p>
                    <p>From {edu.startYear} to {edu.endYear}</p>
                    <button onClick={() => handleEdit(edu)}><FontAwesomeIcon icon={faPen} /> Edit</button>
                    <button onClick={() => handleDelete(edu.id)}><FontAwesomeIcon icon={faMinus} /> Delete</button>
                </div>
                : <form className="education" onSubmit={(e) => { createNewEdu(); handleResubmit(e, edu, newEdu); changeStateToDefault() }}>
                    <label htmlFor="startYear">Start Year</label>
                    <input onChange={(e) => setStartYear(e.target.value)} id="startYear" name="startYear" type="number" min="1960" max="2021" step="1" value={startYear}></input>
                    <label htmlFor="endYear">End Year</label>
                    <input onChange={(e) => setEndYear(e.target.value)} id="endYear" name="endYear" type="number" min="1960" max="2021" step="1" value={endYear}></input>
                    <label htmlFor="uniName">School Name</label>
                    <input onChange={(e) => setUniName(e.target.value)} type="text" name="uniName" id="uniName" value={uniName}></input>
                    <label htmlFor="title">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" value={title}></input>
                    <input type="submit"></input>
                </form>
            }
        </div>
    )
}

export default EducationEntry