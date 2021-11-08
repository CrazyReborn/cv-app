import React from "react";

class ExperienceForm extends React.Component {
    render() {
        const { currentStartYear, currentEndYear, currentCompanyName, 
            currentJobTitle, currentMainTasks, handleChange, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                    <label htmlFor="startYear">Start Year</label>
                    <input onChange={handleChange} id="startYear" name="currentStartYear" type="text" value={currentStartYear}></input>
                    <label htmlFor="endYear">End Year</label>
                    <input onChange={handleChange} id="endYear" name="currentEndYear" type="text" value={currentEndYear}></input>
                    <label htmlFor="companyName">Company Name</label>
                    <input onChange={handleChange} type="text" name="currentCompanyName" id="companyName" value={currentCompanyName}></input>
                    <label htmlFor="jobTitle">Job Title</label>
                    <input onChange={handleChange} type="text" name="currentJobTitle" id="jobTitle" value={currentJobTitle}></input>
                    <label htmlFor="mainTasks">Main Tasks</label>
                    <input onChange={handleChange} type="text" name="currentMainTasks" id="mainTasks" value={currentMainTasks}></input>
                    <input type="submit"></input>
                    </form>
        )
    }
}

export default ExperienceForm