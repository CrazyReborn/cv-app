import React from "react";

class EdcucationForm extends React.Component {
    render() {
        const { startYear, endYear, uniName, title, handleChange, handleSubmit} = this.props;
        return (
            <form className="education" onSubmit={handleSubmit}>
                    <label htmlFor="startYear">Start Year</label>
                    <input onChange={handleChange} id="startYear" name="currentStartYear" type="number" min="1960" max="2021" step="1" value={startYear}></input>
                    <label htmlFor="endYear">End Year</label>
                    <input onChange={handleChange} id="endYear" name="currentEndYear" type="number" min="1960" max="2021" step="1" value={endYear}></input>
                    <label htmlFor="uniName">School Name</label>
                    <input onChange={handleChange} type="text" name="currentUniName" id="uniName" value={uniName}></input>
                    <label htmlFor="title">Title</label>
                    <input onChange={handleChange} type="text" name="currentTitle" id="title" value={title}></input>
                    <input type="submit"></input>
                    </form>
        )
    }
}

export default EdcucationForm