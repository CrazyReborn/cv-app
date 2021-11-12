import React from "react";

function EdcucationForm (props){
        const { startYear, endYear, uniName, title, } = props;
        const {handleSubmit, setCurrentStartYear, setCurrentEndYear, setCurrentUniName, setCurrentTitle} = props;
        return (
            <form className="education" onSubmit={handleSubmit}>
                    <label htmlFor="startYear">Start Year</label>
                    <input onChange={(e) => setCurrentStartYear(e.target.value)}  id="startYear" name="currentStartYear" type="number" min="1960" max="2021" step="1" value={startYear}></input>
                    <label htmlFor="endYear">End Year</label>
                    <input onChange={(e) => setCurrentEndYear(e.target.value)} id="endYear" name="currentEndYear" type="number" min="1960" max="2021" step="1" value={endYear}></input>
                    <label htmlFor="uniName">School Name</label>
                    <input onChange={(e) => setCurrentUniName(e.target.value)} type="text" name="currentUniName" id="uniName" value={uniName}></input>
                    <label htmlFor="title">Title</label>
                    <input onChange={(e) => setCurrentTitle(e.target.value)} type="text" name="currentTitle" id="title" value={title}></input>
                    <input type="submit"></input>
                    </form>
        )
}

export default EdcucationForm