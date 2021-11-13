import React from "react";

function ExperienceForm (props) {
    const { startYear, endYear, companyName, 
    jobTitle, mainTasks, handleSubmit} = props;
    const { setCurrentStartYear, setCurrentEndYear, setCurrentCompanyName,
            setCurrentJobTitle, setCurrentMainTasks} = props;
    return (
        <form className="experience" onSubmit={handleSubmit}>
            <label htmlFor="startYear">Start Year</label>
            <input onChange={(e) => setCurrentStartYear(e.target.value)} id="startYear" name="currentStartYear" type="text" value={startYear}></input>
            <label htmlFor="endYear">End Year</label>
            <input onChange={(e) => setCurrentEndYear(e.target.value)} id="endYear" name="currentEndYear" type="text" value={endYear}></input>
            <label htmlFor="companyName">Company Name</label>
            <input onChange={(e) => setCurrentCompanyName(e.target.value)} type="text" name="currentCompanyName" id="companyName" value={companyName}></input>
            <label htmlFor="jobTitle">Job Title</label>
            <input onChange={(e) => setCurrentJobTitle(e.target.value)} type="text" name="currentJobTitle" id="jobTitle" value={jobTitle}></input>
            <label htmlFor="mainTasks">Main Tasks</label>
            <input onChange={(e) => setCurrentMainTasks(e.target.value)} type="text" name="currentMainTasks" id="mainTasks" value={mainTasks}></input>
            <input type="submit"></input>
        </form>
    )
}

export default ExperienceForm