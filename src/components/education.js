import React from "react";
import uniqid from "uniqid";

class Education extends React.Component {
    constructor() {
        super();
        this.state = {
            all: [{
                startYear: '2012', endYear: '2018', uniName: 'Vitebsk',
            id: uniqid()}],
            current: {
                startYear: '',
                endYear: '',
                uniName: '',
                id: uniqid(),
            }
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        this.setState({
            all: this.state.all.filter(edu => edu.id !== id)
        });
    }
    render() {
        const { all } = this.state;
        return (
            <div>
                {all.map(edu => {
                    return (
                        <div key={edu.id}>
                            <h2>Education</h2>
                            <p>{edu.startYear} - {edu.endYear}</p>
                            <p>{edu.uniName}</p>
                            <button onClick={() => this.handleDelete(edu.id)}>Delete this entry</button>
                        </div>
                    )
                })}
            <button>Add Education</button>
        </div>
        )
    }
}

export default Education