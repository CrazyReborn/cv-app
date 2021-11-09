import React from "react";

class ExperienceForm extends React.Component {
    render() {
        const { startYear, endYear, companyName, 
            jobTitle, mainTasks, handleChange, handleSubmit} = this.props;

        return (
            <form className="experience" onSubmit={handleSubmit}>
                    <label htmlFor="startYear">Start Year</label>
                    <input onChange={handleChange} id="startYear" name="currentStartYear" type="text" value={startYear}></input>
                    <label htmlFor="endYear">End Year</label>
                    <input onChange={handleChange} id="endYear" name="currentEndYear" type="text" value={endYear}></input>
                    <label htmlFor="companyName">Company Name</label>
                    <input onChange={handleChange} type="text" name="currentCompanyName" id="companyName" value={companyName}></input>
                    <label htmlFor="jobTitle">Job Title</label>
                    <input onChange={handleChange} type="text" name="currentJobTitle" id="jobTitle" value={jobTitle}></input>
                    <label htmlFor="mainTasks">Main Tasks</label>
                    <input onChange={handleChange} type="text" name="currentMainTasks" id="mainTasks" value={mainTasks}></input>
                    <input type="submit"></input>
                    </form>
        )
    }
}

export default ExperienceForm