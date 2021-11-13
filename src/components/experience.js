import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import uniqid from "uniqid";
import ExperienceEntry from "./exp-entry";
import ExperienceForm from "./exprience-form";

function Experience () {  
    const defaultJob = {
        startYear: '2012', 
        endYear: '2015', 
        uniName: 'University of Michigan', 
        title: 'doc',
        editing: false,
        id: uniqid(),
    }

    const [addNew, setAddNew] = useState(false);

    const [all, setAll] = useState([defaultJob]);

    const [currentStartYear, setCurrentStartYear] = useState('');
    const [currentEndYear, setCurrentEndYear] = useState('');
    const [currentCompanyName, setCurrentCompanyName] = useState('');
    const [currentJobTitle, setCurrentJobTitle] = useState('');
    const [currentMainTasks, setCurrentMainTasks] = useState('');
    const [currentId, setCurrentId] = useState(uniqid());


    function handleDelete(id) {
        const newAll = all.filter(edu => edu.id !== id);
        setAll(newAll);
    }

    function handleAddEducationEntry() {
        setAddNew(!addNew);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newEntry = {
            startYear: currentStartYear,
            endYear: currentEndYear,
            companyName: currentCompanyName,
            jobTitle: currentJobTitle,
            mainTasks: currentMainTasks,
            id: currentId,
        }
        setAddNew(!addNew);
        setAll(all.concat(newEntry));
        setCurrentStartYear('');
        setCurrentEndYear('');
        setCurrentCompanyName('');
        setCurrentJobTitle('');
        setCurrentMainTasks('');
        setCurrentId(uniqid());
    }
    function handleResubmit(e, job, newJob) {
        e.preventDefault();
        const prevAll = all.slice();
        const index = all.indexOf(job);
        prevAll[index] = newJob;
        setAll(prevAll);
    }
        return (
            <div className="experience">
                <h2>Work Experience</h2>
                {all.map((job) => {
                    return (
                        <div key={job.id}>
                       <ExperienceEntry job={job} handleDelete={handleDelete} handleResubmit={handleResubmit} />
                       </div>
                    )
                })}
                {!addNew
                ? <button onClick={handleAddEducationEntry}><FontAwesomeIcon icon={faPlus}/> Add Job</button>
                : <ExperienceForm handleSubmit={handleResubmit} startYear={currentStartYear} 
                  endYear={currentEndYear} companyName={currentCompanyName} 
                  jobTitle={currentJobTitle} mainTasks={currentMainTasks} />
                    }
        </div>
        )
}

export default Experience