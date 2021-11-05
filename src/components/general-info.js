import React from "react";

class GeneralInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: 'Vl',
            lastName: 'Ku',
            title: 'asddd',
            email: 'dddsa@gmail.com',
            editing: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleEditRequest = this.handleEditRequest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    handleEditRequest() {
        this.setState({
            editing: !this.state.editing
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            editing: !this.state.editing
        });
    }
    render() {
        const {firstName, lastName, title, email, editing} = this.state;
        return (
            <div>
                {editing 
                ? <form onSubmit={this.handleSubmit}>
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={firstName} onChange={this.handleChange}></input>
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={lastName} onChange={this.handleChange}></input>
                    <label for="title">Job Title</label>
                    <input type="text" id="title" name="title" value={title} onChange={this.handleChange}></input>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" value={email} onChange={this.handleChange}></input>
                    <input type="submit"></input>
                </form>
            : <div>
                <h2>{firstName + ' ' + lastName}</h2>
                <p>{title}</p>
                <p>{email}</p>
                <button onClick={this.handleEditRequest}>edit</button>
                </div>}
            </div>
            
        )
    }
}

export default GeneralInfo