import React, { useState } from "react";
import uniqid from "uniqid";
import EducationEntry from "./education-entry";
import EdcucationForm from "./education-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Education() {
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
    const [currentUniName, setCurrentUniName] = useState('');
    const [currentTitle, setCurrentTitle] = useState('');
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
            uniName: currentUniName,
            title: currentTitle,
            id: currentId,
        }
        setAll(all.push(newEntry));

        setCurrentStartYear('');
        setCurrentEndYear('');
        setCurrentUniName('');
        setCurrentTitle('');
        setCurrentId(uniqid());
    }

    function handleResubmit(e, edu, changedState) {
        e.preventDefault();
        const prevAll = this.state.all.slice();
        const index = this.state.all.indexOf(edu);
        prevAll[index] = changedState;
        this.setState({
            all: prevAll,
        })
    }
        return (
            <div className="education">
                <h2>Education</h2>
                {all.map((edu) => {
                    return(
                        <div key={edu.id}>
                        <EducationEntry edu={edu} handleResubmit={handleResubmit} handleDelete={handleDelete}/>
                        </div>
                    )
                })}
                {!addNew
                ? <button onClick={handleAddEducationEntry}><FontAwesomeIcon icon={faPlus}/>Add New</button>
                : <EdcucationForm handleSubmit={handleSubmit} startYear={currentStartYear}
                  endYear={currentEndYear} uniName={currentUniName} title={currentTitle} />
                    }
        </div>
        )
}

export default Education