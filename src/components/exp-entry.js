import React, { useState } from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react/cjs/react.development";

function ExperienceEntry (props) {

    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [mainTasks, setMainTasks] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [editing, setEditing] = useState(false);
    const [id, setId] = useState(uniqid());

    const [newEdu, setNewEdu] = useState({});
    
    useEffect(() => {
        setNewEdu ({
            startYear,
            endYear,
            jobTitle,
            mainTasks,
            companyName,
            editing,
            id,
        })
    }, [newEdu])

    function handleEdit(job) {
        setStartYear(job.startYear);
        setEndYear(job.endYear);
        setJobTitle(job.jobTitle);
        setMainTasks(job.mainTask);
        setEditing(!editing);
        setId(job.id);
    }

    function changeStateToDefault() {
        setStartYear('');
        setEndYear('');
        setJobTitle('');
        setMainTasks('');
        setCompanyName('');
        setEditing(false);
        setId(uniqid());
    }

    const { job, handleDelete, handleResubmit } = props;

        return (
           <div>
            {!editing
            ? <div>
            <h3>{job.companyName}</h3>
            <p>From {job.startYear} to {job.endYear}</p>
            <p>Position: {job.jobTitle}</p>
            <p>Responsibilities: {job.mainTasks}</p>
            <button onClick={() => handleEdit(job)}><FontAwesomeIcon icon={faPen}/> Edit</button>
            <button onClick={() => handleDelete(job.id)}><FontAwesomeIcon icon={faMinus}/> Delete</button>
            </div>
            :<form className="experience" onSubmit={(e) => {handleResubmit(e, job, newEdu); changeStateToDefault()}}>
            <label htmlFor="startYear">Start Year</label>
            <input onChange={(e) => setStartYear(e.target.value)} id="startYear" name="startYear" type="text" value={startYear}></input>
            <label htmlFor="endYear">End Year</label>
            <input onChange={(e) => setEndYear(e.target.value)} id="endYear" name="endYear" type="text" value={endYear}></input>
            <label htmlFor="companyName">Company Name</label>
            <input onChange={(e) => setCompanyName(e.target.value)} type="text" name="companyName" id="companyName" value={companyName}></input>
            <label htmlFor="jobTitle">Job Title</label>
            <input onChange={(e) => setJobTitle(e.target.value)} type="text" name="jobTitle" id="jobTitle" value={jobTitle}></input>
            <label htmlFor="mainTasks">Main Tasks</label>
            <input onChange={(e) => setMainTasks(e.target.value)} type="text" name="mainTasks" id="mainTasks" value={mainTasks}></input>
            <input type="submit"></input>
            </form>
            }
            </div>
        )
    }

export default ExperienceEntry